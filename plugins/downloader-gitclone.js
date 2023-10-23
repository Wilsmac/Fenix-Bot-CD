import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*[INFORMACIÓN] 𝐼𝑁𝐺𝑅𝐸𝑆𝐸 𝑈𝑁 𝐸𝑁𝐿𝐴𝐶𝐸 𝐷𝐸 𝐺𝐼𝑇𝐻𝑈𝐵, 𝐸𝐽𝐸𝑀𝑃𝐿𝑂: ${usedPrefix + command} https://github.com/Wilsmac/Fenix-Bot-CD*`;
  if (!regex.test(args[0])) throw '*[INFORMACIÓN] 𝐿𝐼𝑁𝐾 𝐼𝑁𝐶𝑂𝑅𝑅𝐸𝐶𝑇𝑂*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*[INFORMACIÓN] 𝐸𝑆𝑃𝐸𝑅𝐸 𝑈𝑁 𝑀𝑂𝑀𝐸𝑁𝑇𝑂 𝐸𝑁 𝐿𝑂 𝑄𝑈𝐸 𝐸𝑁𝑉𝐼𝑂 𝑆𝑈 𝐴𝑅𝐶𝐻𝐼𝑉𝑂, 𝑆𝐼 𝐸𝑆𝑇𝐸 𝑁𝑂 𝐸𝑆 𝐸𝑁𝑉𝐼𝐴𝐷𝑂 𝑃𝑈𝐸𝐷𝐸 𝐷𝐸𝐵𝐸𝑅𝑆𝐸 𝐴 𝑄𝑈𝐸 𝐸𝐿 𝑅𝐸𝑃𝑂𝑆𝐼𝑇𝑂𝑅𝐼𝑂 𝐸𝑆 𝑀𝑈𝑌 𝑃𝐸𝑆𝐴𝐷𝑂♡*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
