let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario} 𝐻𝐴𝑆 𝐶𝐴𝑀𝐵𝐼𝐴𝐷𝐿 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂 𝑃𝑂𝑅:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario} 𝐻𝐴𝑆 𝐶𝐴𝑀𝐵𝐼𝐴𝐷𝐿 𝐿𝐴 𝐹𝑂𝑇𝑂 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} 𝑁𝑈𝐸𝑉𝐴 𝐷𝐸𝑆𝐶𝑅𝐼𝑃𝑆𝐼𝑂́𝑁 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `𝐴𝐻𝑂𝑅𝐴 *${m.messageStubParameters[0] == 'on' ? '𝑆𝑂𝐿𝑂 𝐴𝐷𝑀𝐼𝑁𝑆' : '𝑇𝑂𝐷𝑂𝑆'}* 𝑃𝑈𝐸𝐷𝐸𝑁 𝐸𝐷𝐼𝑇𝐴𝑅 𝐿𝐴 𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂́𝑁 𝐷𝐸𝐿 𝐺𝑅𝑈𝑃𝑂`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `𝐸𝐿 𝐺𝑅𝑈𝑃𝑂 *${m.messageStubParameters[0] == 'on' ? '𝐸𝑆𝑇𝐴 𝐶𝐸𝑅𝑅𝐴𝐷𝑂 🔒' : '𝐸𝑆𝑇𝐴 𝐴𝐵𝐼𝐸𝑅𝑇𝑂 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? '𝑆𝑂𝐿𝑂 𝐿𝑂𝑆 𝐴𝐷𝑀𝐼𝑁𝑆 𝑃𝑈𝐸𝐷𝐸𝑁 𝐸𝑆𝐶𝑅𝐼𝐵𝐼𝑅' : '𝑌𝐴 𝑃𝑈𝐸𝐷𝐸𝑁 𝐸𝑆𝐶𝑅𝐼𝐵𝐼𝑅 𝑇𝑂𝐷𝑂𝑆'} 𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝐴𝐻𝑂𝑅𝐴 𝐸𝑆 𝐴𝐷𝑀𝐼𝑁 𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂\n\n😼🫵𝐴𝐶𝐶𝐼𝑂𝑁 𝑅𝐸𝐴𝐿𝐼𝑍𝐴𝐷𝐴: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝐷𝐸𝐽𝐴 𝐷𝐸 𝑆𝐸𝑅 𝐴𝐷𝑀𝐼𝑁 𝐸𝑁 𝐸𝑆𝑇𝐸 𝐺𝑅𝑈𝑃𝑂😿\n\n😼🫵𝐴𝐶𝐶𝐼𝑂𝑁 𝑅𝐸𝐴𝐿𝐼𝑍𝐴𝐷𝐴 𝑃𝑂𝑅: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} 𝐶𝐴𝑁𝐵𝐼𝑂 𝐿𝐴.𝐷𝑈𝑅𝐴𝐶𝐼𝑂𝑁 𝐷𝐸 𝐿𝑂𝑆 𝑀𝐸𝑁𝑆𝐴𝐽𝐸𝑆 𝑇𝐸𝑀𝑃𝑂𝑅𝐴𝐿𝐸𝑆 𝐴 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝑂 𝐿𝑂𝑆 𝑀𝐸𝑁𝑆𝐴𝐽𝐸𝑆 𝑇𝐸𝑀𝑃𝑂𝑅𝐴𝐿.`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}    
