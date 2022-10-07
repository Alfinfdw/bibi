let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donate 」
│ • 
│ • 
│ •
│ • 
╰────
╭─「 *NOTE* 」
│ > Want to donate? Wa.me/94726083178
│ _The proceeds from the donation will be used for rent_
│ _or buy *RDP/VPS* so bots can run_
│ _24 hours without problems_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
