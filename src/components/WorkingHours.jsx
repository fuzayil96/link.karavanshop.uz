import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

// Ish vaqti: har kuni 08:00 – 23:30 (Samarqand vaqti bilan)
const OPEN_MIN = 8 * 60;
const CLOSE_MIN = 23 * 60 + 30;

const tashkentMinutes = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  return get("hour") * 60 + get("minute");
};

const isOpenNow = () => {
  const m = tashkentMinutes();
  return m >= OPEN_MIN && m < CLOSE_MIN;
};

const WorkingHours = () => {
  const [open, setOpen] = useState(isOpenNow);

  useEffect(() => {
    const id = setInterval(() => setOpen(isOpenNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2 className="mb-3 px-1 text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase dark:text-stone-500">
        Ish vaqti
      </h2>

      <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-3 pr-4 shadow-sm ring-1 ring-slate-900/5 backdrop-blur dark:bg-stone-900/70 dark:ring-white/10">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-green-900 text-white shadow-sm dark:bg-green-700">
          <FiClock size={18} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold text-slate-900 dark:text-stone-100">
            08:00 – 23:30
          </span>
          <span className="block text-sm text-slate-500 dark:text-stone-400">
            Har kuni, dam olish kunisiz
          </span>
        </span>
        <span
          className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            open
              ? "bg-green-900/10 text-green-800 dark:bg-green-400/15 dark:text-green-300"
              : "bg-red-500/10 text-red-700 dark:bg-red-400/15 dark:text-red-300"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              open ? "bg-green-600 motion-safe:animate-pulse dark:bg-green-400" : "bg-red-500"
            }`}
          />
          {open ? "Ochiq" : "Yopiq"}
        </span>
      </div>
    </div>
  );
};

export default WorkingHours;
