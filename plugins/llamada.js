const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
var handler = async(m, { conn, text, usedPrefix, command }) => {
 
conn.relayMessage(m.chat, {
  degreesLatitude: 0,
  degreesLongitude: 0,
 scheduledCallCreationMessage: {
    callvideoType: 'AUDIO',
    scheduledTimestampMs: 1698430542887,
    title: `jola`,
    isLive: true, 
     url: `wa.me/517171`
  
  }
}, {})
}                                                                                                                                                                                               
handler.command = /^((llamar|bug2|zzzz))$/i
handler.owner = true

export default handler
