//CÓDIGO CREADO GRACIAS A https://github.com/Azami19 & https://github.com/GataNina-Li
//Puedes editar el país,enlaces, los números se editan desde el config.js
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
try{
let contact, number, ofc, nombre, description, correo, lugar, enlace, biog
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let biografiaBot = await conn.fetchStatus(conn.user.jid.split('@')[0] + '@s.whatsapp.net').catch(_ => 'undefined')
let bioBot = biografiaBot.status?.toString() || `${desc2 == '' ? 'hola' : desc2}`

let contacts = global.official.filter(c => c[2] === 1)
let lista = []
for (let i = 0; i < contacts.length; i++) {
contact = contacts[i]
number = String(contact[0])
ofc = await conn.getName(number + '@s.whatsapp.net') //String(contact[1])
let biografia = await conn.fetchStatus(number +'@s.whatsapp.net').catch(_ => 'undefined')
let bio = biografia.status?.toString() || `${desc2 == '' ? 'hola' : desc2}`
  
nombre = official[0][0] == String(contact[0]) ? official[0][1] : official[1][0] == String(contact[0]) ? official[1][1] : official[2][0] == String(contact[0]) ? official[2][1] : official[3][0] == String(contact[0]) ? official[3][1] :  'Contactame'
description = official[0][0] == String(contact[0]) ? 'Solo temas de Fenix-Bot-CD' : official[1][0] == String(contact[0]) ? 'Contacto oficial de Fenix-Bot-CD' : official[2][0] == String(contact[0]) ? 'Contacto oficial de Fenix-Bot-CD' : official[3][0] == String(contact[0]) ? 'Contacto ofical de Fenix-Bot-CD' : desc === '' ? 'Te puedo ayudar en algo?' : desc
correo = official[0][0] == String(contact[0]) ? 'socialplus.gata@gamil.com' : official[1][0] == String(contact[0]) ? 'thelolibotm@gmail.com' : official[2][0] == String(contact[0]) ? 'alexismaldonado90700@gmail.com' : mail === '' ? 'Owner' : mail
lugar = official[0][0] == String(contact[0]) ? '🇪🇨 Ecuador' : official[1][0] == String(contact[0]) ? '🇦🇷 Argentina' : official[2][0] == String(contact[0]) ? '🇲🇽 México' : official[3][0] == String(contact[0]) ? '🇧🇷 Brazil' : country === '' ? 'Global' : country
enlace = official[0][0] == String(contact[0]) ? 'https://github.com/GataNina-Li' : official[1][0] == String(contact[0]) ? 'https://github.com/elrebelde21' : official[2][0] == String(contact[0]) ? 'https://github.com/Azami19' : official[3][0] == String(contact[0]) ? 'https://github.com/Abiguelreyes75' : md 
   
lista.push([number, ofc, nombre, description, official[3][0] == String(contact[0]) ? null : correo, lugar, enlace, bio, official[1][0] == String(contact[0]) ? 'https://www.youtube.com/@TheLoliBot-MD' : null]) }  
lista.push([conn.user.jid.split('@')[0], await conn.getName(conn.user.jid), 'packname, esta cuenta es bot', mail === '' ? 'centergatabot@gmail.com' : mail, 'Global', md, bioBot, yt, ig, fb, paypal, nna])
await conn.sendContactArray(m.chat, lista, null, { quoted: fkontak })
  
} catch (e) {
await m.reply('eror'  + '\n*' + 'Error algo salio mal' + '*\n*' + usedPrefix + `'es' == 'es' ? 'reporte' : 'report'}` + '* ' + `'Error'} ` + usedPrefix + command)
console.log(`❗❗ error algo salio mal' ${usedPrefix + command} ❗❗`)
console.log(e)}} 
handler.command = /^(contactos?|contacts?)$/i //['contacto', 'contact']  

export default handler


/*function handler(m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
const data = global.owner.filter(([id, isCreator]) => id && isCreator) 
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true }}})
}

handler.command = ['contacto', 'contact']  
export default handler*/
