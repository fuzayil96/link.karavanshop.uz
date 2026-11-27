// Vercel serverless funksiyasi: fikr-mulohazani Telegram guruhidagi topic'ga yuboradi.
// Kerakli Environment Variables (Vercel → Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  — @BotFather bergan token
//   TELEGRAM_CHAT_ID    — guruh ID'si (masalan: -1001234567890)
//   TELEGRAM_THREAD_ID  — topic ID'si (message_thread_id)

const LIMITS = { name: 60, phone: 30, message: 1500 };

const escapeHtml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, TELEGRAM_THREAD_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(500).json({ ok: false, error: "Server sozlanmagan" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  body = body || {};

  // Spam-botlar uchun yashirin maydon: to'ldirilgan bo'lsa, jim qabul qilamiz
  if (body.website) return res.status(200).json({ ok: true });

  const name = clean(body.name, LIMITS.name);
  const phone = clean(body.phone, LIMITS.phone);
  const message = clean(body.message, LIMITS.message);
  const rating = Number.isInteger(body.rating) && body.rating >= 1 && body.rating <= 5 ? body.rating : 0;

  if (!name || message.length < 3) {
    return res.status(400).json({ ok: false, error: "Ism va xabarni kiriting" });
  }
  if (phone && !/^[+\d\s()-]{7,30}$/.test(phone)) {
    return res.status(400).json({ ok: false, error: "Telefon raqam noto'g'ri" });
  }

  const time = new Intl.DateTimeFormat("uz-UZ", {
    timeZone: "Asia/Tashkent",
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date());

  const lines = [
    "📝 <b>Yangi fikr-mulohaza</b>",
    "",
    `👤 <b>Ism:</b> ${escapeHtml(name)}`,
    phone ? `📞 <b>Telefon:</b> ${escapeHtml(phone)}` : null,
    rating ? `⭐ <b>Baho:</b> ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)` : null,
    "",
    `💬 ${escapeHtml(message)}`,
    "",
    `🕒 ${time}`,
  ].filter((l) => l !== null);

  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: lines.join("\n"),
    parse_mode: "HTML",
    disable_web_page_preview: true,
  };
  if (TELEGRAM_THREAD_ID) payload.message_thread_id = Number(TELEGRAM_THREAD_ID);

  try {
    const tg = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await tg.json();
    if (!data.ok) {
      console.error("Telegram xatosi:", data.description);
      return res.status(502).json({ ok: false, error: "Xabar yuborilmadi" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Telegram'ga ulanib bo'lmadi:", err);
    return res.status(502).json({ ok: false, error: "Xabar yuborilmadi" });
  }
}
