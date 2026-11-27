import { useState } from "react";
import { FiSend, FiStar, FiAlertCircle } from "react-icons/fi";

const initial = { name: "", phone: "", message: "", rating: 0, website: "" };

const inputClass =
  "w-full rounded-xl bg-stone-100/80 px-4 py-3 text-[15px] text-slate-900 ring-1 ring-slate-900/5 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-green-700 dark:bg-stone-800/70 dark:text-stone-100 dark:ring-white/10 dark:placeholder:text-stone-500 dark:focus:bg-stone-800 dark:focus:ring-green-500";

const FeedbackForm = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");
  const [shakeKey, setShakeKey] = useState(0);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const fail = (msg) => {
    setError(msg);
    setStatus("error");
    setShakeKey((k) => k + 1);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!form.name.trim() || form.message.trim().length < 3) {
      return fail("Iltimos, ismingiz va xabaringizni yozing.");
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Xabar yuborilmadi");
      setStatus("success");
      setForm(initial);
      setShakeKey(0);
    } catch (err) {
      fail(`${err.message}. Birozdan so'ng qayta urinib ko'ring.`);
    }
  };

  return (
    <div>
      <h2 className="mb-3 px-1 text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase dark:text-stone-500">
        Fikr bildirish
      </h2>

      <div className="relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:bg-stone-900/70 dark:ring-white/10">
        {status === "success" ? (
          <div
            role="status"
            className="flex flex-col items-center py-6 text-center"
          >
            <div className="relative grid h-20 w-20 place-items-center">
              <span className="absolute inset-0 rounded-full bg-green-500/30 motion-safe:animate-ring" />
              <span className="relative grid h-20 w-20 place-items-center rounded-full bg-green-700 text-white shadow-lg shadow-green-900/30 motion-safe:animate-pop-in dark:bg-green-600">
                <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                  <path
                    d="M5 12.5l4.5 4.5L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="30"
                    className="motion-safe:animate-draw"
                  />
                </svg>
              </span>
            </div>
            <p className="mt-5 font-display text-lg font-semibold text-green-950 motion-safe:animate-fade-up [animation-delay:300ms] dark:text-green-100">
              Rahmat!
            </p>
            <p className="mt-1 max-w-64 text-sm text-slate-500 motion-safe:animate-fade-up [animation-delay:400ms] dark:text-stone-400">
              Fikringiz bizga yetib keldi. Tez orada ko'rib chiqamiz.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-green-800 ring-1 ring-green-800/20 transition hover:bg-green-900/5 motion-safe:animate-fade-up [animation-delay:500ms] dark:text-green-300 dark:ring-green-300/20 dark:hover:bg-green-400/10"
            >
              Yana yozish
            </button>
          </div>
        ) : (
          <form
            key={shakeKey}
            onSubmit={onSubmit}
            noValidate
            className={`flex flex-col gap-3 ${shakeKey ? "motion-safe:animate-shake" : ""}`}
          >
            {/* Yulduzcha baho */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-600 dark:text-stone-300">
                Xizmatimizni baholang
              </span>
              <div className="flex gap-1" role="radiogroup" aria-label="Baho">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={form.rating === n}
                    aria-label={`${n} yulduz`}
                    onClick={() => setForm((f) => ({ ...f, rating: f.rating === n ? 0 : n }))}
                    className="cursor-pointer p-0.5 transition hover:scale-110 active:scale-90"
                  >
                    <FiStar
                      size={22}
                      className={
                        n <= form.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-300 dark:text-stone-600"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Ismingiz *"
              autoComplete="name"
              maxLength={60}
              value={form.name}
              onChange={set("name")}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Telefon raqamingiz (ixtiyoriy)"
              autoComplete="tel"
              maxLength={30}
              value={form.phone}
              onChange={set("phone")}
              className={inputClass}
            />
            <textarea
              placeholder="Fikringiz, taklif yoki shikoyatingiz *"
              rows={4}
              maxLength={1500}
              value={form.message}
              onChange={set("message")}
              className={`${inputClass} resize-none`}
            />

            {/* Spam-botlar uchun yashirin maydon */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={set("website")}
              className="hidden"
            />

            {status === "error" && (
              <p
                role="alert"
                className="flex items-start gap-2 rounded-xl bg-red-500/10 px-3 py-2.5 text-sm text-red-700 dark:bg-red-400/15 dark:text-red-300"
              >
                <FiAlertCircle size={16} className="mt-0.5 shrink-0" />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-900 font-semibold text-white shadow-md shadow-green-900/20 transition hover:bg-green-800 active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 dark:bg-green-700 dark:hover:bg-green-600"
            >
              {status === "sending" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Yuborilmoqda…
                </>
              ) : (
                <>
                  <FiSend size={17} />
                  Xabar yuborish
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
