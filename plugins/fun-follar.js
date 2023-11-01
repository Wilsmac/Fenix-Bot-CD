let handler = async (m, { conn, text, usedPrefix, command }) => { 
let cometido
cometido = `@${m.sender.split('@')[0]}`

if(!text && !m.quoted) return conn.reply(m.chat, 
`𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴𝐿.𝑀𝐸𝑁𝑆𝐴𝐽𝐸 𝑂𝐻 𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐸́ 𝑈𝑆𝐴𝑁𝐷𝑂  ${usedPrefix + command}*`, m)
if (text.length >= 1) {
} else if (m.quoted && m.quoted.sender) {
text = `@${m.quoted.sender.split('@')[0].replace('@', '')}`
} else if (m.quoted && m.quoted.fromMe) {
text = `${m.mentionedJid.map((user)=>(user === m.sender) ? text.replace('@', '') : `${user.split('@')[0].replace('@', '')}`).join(', ')}`
}
if (/[a-zA-Z]/.test(text) && !text.includes('@')) return conn.reply(m.chat, `𝐸𝑇𝐼𝑄𝑈𝐸𝑇𝐸 𝐴 𝑈𝑁𝐴 𝑃𝐸𝑅𝑆𝑂𝑁𝐴 𝑂𝐻 𝑅𝐸𝑆𝑃𝑂𝑁𝐷𝐴 𝐴𝐿 𝑀𝐸𝑁𝑆𝑆𝐽𝐸 𝑄𝑈𝐸 𝑁𝑂 𝑆𝑂𝑌 𝐴𝐷𝐼𝑉𝐼𝑁𝑂🤬`, m)
text = text.match(/[\d@]+/g).join('')
  
let coger = 
  `🥵 *𝑇𝐸 𝐴𝐶𝐴𝐵𝐴𝑁.𝐷𝐸 𝐶𝑂𝐺𝐸𝑅  ${text}* 🥵 

*${text} ¡𝑇𝐸 𝐿𝐴 𝐴𝑁 𝑀𝐸𝑇𝐼𝐷𝑂 𝐸𝑁𝑇𝐸𝑅𝐴 😩

*${cometido}*
●
█▄
█ ▄█▀█● *${text}*
*𝑇𝐸 𝐴𝐻 𝐶𝑂𝐷𝐼𝐺𝑂 𝐵𝐼𝐸𝑁 𝑅𝐼𝐶𝑂* 🥵`.trim()

await conn.reply(m.chat, coger, m, { mentions: [m.sender, text.replace('@', '') + '@s.whatsapp.net'] })
}

handler.command = /^(coger|follar)$/i
export default handler
