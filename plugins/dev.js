const { 𝐂𝐘𝐁𝐄𝐑, commands } = require('../𝐂𝐘𝐁𝐄𝐑');

𝐂𝐘𝐁𝐄𝐑({
    pattern: "owner",
    alias: ["developer", "dev"],
    desc: "Displays the developer info",
    category: "owner",
    react: "👨‍💻",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, pushname
}) => {
    try {
        const name = pushname || "there";

        const caption = `
╭─⌈ *👨‍💻 𝐂𝐘𝐁𝐄𝐑-ˣᴅ ᴅᴇᴠᴇʟᴏᴘᴇʀ* ⌋─
│
│ 👋 Hello, *${name}*!
│
│ 🤖 I'm *Cyber Lord*, the creator and
│    maintainer of this smart WhatsApp bot.
│
│ 👨‍💻 *ᴏᴡɴᴇʀ ɪɴꜰᴏ:*
│ ──────────
│ 🧠 *Name:* Cyber Lord
│ 🎂 *Age:* +20
│ 📞 *Contact:* wa.me/2347061956740
│ 📺 *YouTube:* Cyber Lord Tech
│     https://youtube.com/@CyberLord-o7h
│
╰─────────

>⚡ ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐂𝐘𝐁𝐄𝐑-xᴅ
        `.trim();

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/vfv7n6.jpg' },
                caption: caption,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363402507750390@newsletter',
                        newsletterName: '🪀『 𝐂𝐘𝐁𝐄𝐑-𝚇𝙳 』🪀',
                        serverMessageId: 143
                    },
                    externalAdReply: {
                        title: "Cyber-XD Bot",
                        body: "Created with ❤️ by Cyber Lord",
                        thumbnailUrl: 'https://files.catbox.moe/vfv7n6.jpg',
                        mediaType: 1,
                        renderSmallerThumbnail: true,
                        showAdAttribution: true,
                        mediaUrl: "https://youtube.com/@CyberLord-o7h
",
                        sourceUrl: "https://youtube.com/@CyberLord-o7h
"
                    }
                }
            },
            { quoted: mek }
        );
    } catch (e) {
        console.error("Error in .dev command:", e);
        reply(`❌ Error: ${e.message}`);
    }
});
