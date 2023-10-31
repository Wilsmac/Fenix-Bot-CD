const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
var handler = async(m, { conn, text, usedPrefix, command }) => {
 
conn.relayMessage(m.chat, {
  scheduledCallCreationMessage: {
    callvideoType: 'AUDIO',
    scheduledTimestampMs: 1698430542887,
    title: `jola`
  }
}, {})
                                                                                                                                                                                                        
    }}, { quoted: m }) 
conn.relayMessage(m.chat, msg.message, {})
}
handler.command = /^((llamar|bug2|zzzz))$/i
handler.owner = true

export default handler
