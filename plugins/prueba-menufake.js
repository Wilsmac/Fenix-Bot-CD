import {performance} from 'perf_hooks';
const handler = async (m, {conn, text}) => {
    
const start = performance.now();    
const end = performance.now();
const executionTime = (end - start);
    
const ipParts = [];
for (let i = 0; i < 4; i++) {
ipParts.push(Math.floor(Math.random() * 256))};
const ipAddress = ipParts.join('.');
const fakeData = {
name_tag: '',
ip: `menu enviado con éxito`,
Fenix-Bot-CD
};
if (m.mentionedJid[0]) {
fakeData.name_tag = text //`@${m.mentionedJid[0].split('@')[0]}` //conn.getName(m.mentionedJid[0])
} else {
fakeData.name_tag = text    
}
    
const doxeo = `menu envíado con éxito  `;
    
async function loading() {
var hawemod = [
"Enviando menú espere un momento\n\n█▒▒▒▒▒▒▒▒▒▒▒10%",
" ████▒▒▒▒▒▒▒▒30%",
" ███████▒▒▒▒▒50%",
" ██████████▒▒80%",
" ████████████100%"
]
      let { key } = await conn.sendMessage(m.chat, {text: `*aquí el menu*`}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: doxeo, edit: key, mentions: conn.parseMention(doxeo)}, {quoted: m});         
 }
loading()    
};
handler.help = ['.menu'];
handler.tags = ['fun'];
handler.command = /^prueba|prueba|prueba1|prueba|pruebas/i;
export default handler;
