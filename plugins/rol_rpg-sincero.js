let handler = async (m, { conn, usedPrefix }) => { // @${global.db.data.users[m.sender].pasangan.split('@')[0]}
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let usuario = conn.getName(who)
let persona = global.db.data.users[m.sender].pasangan

    if (global.db.data.users[m.sender].pasangan == "") return await conn.reply(m.chat, `*${usuario}* holi${wm}`, fkontak,  m)

  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return await conn.reply(m.chat, `*${usuario}* si lees esto eres gay *${await conn.getName(persona)}* 😆🫵🏻`, fkontak, m, {contextInfo: { mentionedJid: [ m.sender, who ] }})

  await conn.reply(m.chat, `🤨 parece que *${await conn.getName(persona)}*el yuri es muy bueno \n\n*_Vista la situación se anulará este pendiente_*\n\n${wm}`, fkontak, m, {contextInfo: { mentionedJid: [ persona, m.sender ] }})

global.db.data.users[m.sender].pasangan = ""
}
handler.command = /^(sinceridad|mipareja|miamor|minovio|minovia|mylove)$/i
handler.group = true
export default handler
