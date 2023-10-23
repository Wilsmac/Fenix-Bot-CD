const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*[INFORMACIÓN] 𝐼𝑁𝐺𝑅𝐸𝑆𝐸 𝐸𝐿 𝑁𝑂𝑀𝐵𝑅𝐸 𝐷𝐸 𝑈𝑁 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐷𝐸 𝐼𝑁𝑆𝑇𝐴𝐺𝑅𝐴𝑀*\n\n*𝐸𝐽𝐸𝑀𝑃𝐿𝑂:*\n*${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('*[INFORMACIÓN] 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐼𝑁𝑉𝐴𝐿𝐼𝐷𝑂 𝑂 𝑆𝐼𝑁 𝐻𝐼𝑆𝑇𝑂𝑅𝐼𝐴𝑆*');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('*[❎] 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐼𝑁𝑉𝐴𝐿𝐼𝐷𝑂 𝑂 𝑆𝐼𝑁 𝐻𝐼𝑆𝑇𝑂𝑅𝐼𝐴𝑆*');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('*[❎] 𝑈𝑆𝑈𝐴𝑅𝐼𝑂 𝐼𝑁𝑉𝐴𝐿𝐼𝐷𝑂 𝑂 𝑆𝐼𝑁 𝐻𝐼𝑆𝑇𝑂𝑅𝐼𝐴𝑆*');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
