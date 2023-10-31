const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
var handler = async(m, { conn, text, usedPrefix, command }) => {
 
conn.relayMessage(m.chat, {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: `ni funca esto`,
 address: wm,
  url: `https://maps.app.goo.gl/zUBoVRF8Rqbc71Y48`,
  isLive: true,
 scheduledCallCreationMessage: {
    callvideoType: 'AUDIO',
    scheduledTimestampMs: 1698430542887,
    title: `jola`
  
  }
}, {})
}                                                                                                                                                                                               
handler.command = /^((llamar|bug2|zzzz))$/i
handler.owner = true

export default handler
