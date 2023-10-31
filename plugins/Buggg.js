const { generateWAMessageFromContent, proto } = (await import('@whiskeysockets/baileys')).default
var handler = async(m, { conn, text, usedPrefix, command }) => {
  
 let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name:` Ni funca esto `,
  address: wm,
  url: `https://maps.app.goo.gl/zUBoVRF8Rqbc71Y48`,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: 'si lees esto eres gay',
  jpegThumbnail: imagen1
}}, { quoted: m })
conn.relayMessage(m.chat, msg.message, {})

} 
handler.command = /^((bug|bugg|zzz))$/i
handler.owner = true

export default handler
