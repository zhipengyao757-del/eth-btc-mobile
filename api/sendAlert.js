export default async function handler(req, res) {

  try {

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({ error: "Missing ENV variables" });
    }

    const text = req.query.text || "套利信号触发";

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (e) {

    res.status(500).json({ error: e.message });

  }

}
