let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

if (global.db.data.users[m.sender].pasangan == "") return await conn.reply(m.chat, `*${usuario}* Hola sin vida social\n\n*_Si quiere tener una pues busca pdj 😆🫵🏻\n\ntoda duda contacta a mi creador\n\nwa.me/50258115623._*\n\n${wm}`, fkontak,  m)

  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.reply(m.chat, `*${usuario}* si lees esto eres gay *${await conn.getName(persona)}* 😆🫵🏻`, fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

  await conn.reply(m.chat, `🤨 parece que *${await conn.getName(persona)}*el yuri es muy bueno \n\n*_Vista la situación se anulará este pendiente_*\n\n${wm}`, fkontak, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})

global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler
