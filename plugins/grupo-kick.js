
let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw `𝐼𝑀𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂𝑁\n𝐸𝐿 𝐶𝑂𝑀𝐴𝑁𝐷𝑂 𝑅𝐸𝑆𝑇𝑅𝐼𝐶𝑇 𝐸𝑆𝑇𝐴 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝐴𝐷𝑂 𝑃𝑂𝑅 𝑀𝐼 𝑃𝑅𝑂𝑃𝐼𝐸𝑇𝐴𝑅𝐼𝑂(𝐴)\n𝑃𝐴𝑅𝐴 𝐴𝐶𝑇𝐼𝑉𝐴𝑅 𝑈𝑆𝐸 .enable restrict😉`
let kicktext = `*ETIQUTE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE ELIMINE*\n\n*EJEMPLO: ${usedPrefix + command} @${global.owner[0][0]}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(kick|echar|hechar|sacar|ban)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler


