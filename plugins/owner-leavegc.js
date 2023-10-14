const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, `*${packname} SE DESPIDE DEL GRUPO FUE GENIAL ESTAR AQUÍ HASTA PRONTO✨*`);
  await conn.groupLeave(id);
};
handler.command = /^(salir|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
