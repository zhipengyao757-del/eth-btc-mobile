export default async function handler(req, res) {

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const text = req.query.text || "套利信号触发";

  try {

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    res.status(200).json({ ok: true });

  } catch (e) {

    res.status(500).json({ error: e.toString() });

  }
}
add telegram alert api
