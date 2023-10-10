 //AVISOS DE MENSAJE
const smsAvisoRG = () => { return `╰⊱✅⊱ *RESULTADO* ⊱✅⊱╮\n\n` } 
const smsAvisoAG = () => { return `╰⊱⚠️⊱ *ADVERTENCIA* ⊱⚠️⊱╮\n\n` }
const smsAvisoIIG = () => { return `╰⊱❕⊱ *INFORMACIÓN* ⊱❕⊱╮\n\n` }
const smsAvisoFG = () => { return `╰⊱❌⊱ *ERROR* ⊱❌⊱╮\n\n` }
const smsAvisoMG = () => { return `╰⊱❗️⊱ *ACCIÓN MAL USADA* ⊱❗️⊱╮\n\n` }
const smsAvisoEEG = () => { return `╰⊱📩⊱ *REPORTE* ⊱📩⊱╮\n\n` }
const smsAvisoEG = () => { return `╰⊱💚⊱ *ÉXITO* ⊱💚⊱╮\n\n` }

//Error2
const smsMensError1 = () => { return `❕ REPORTAR COMANDO ❕`} 
const smsMensError2 = () => { return `Está Fallando el siguiente comando`} 

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE. INTENTE DE NUEVO.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}*ETIQUETE A LA PERSONA O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE ELIMINAR*\n\n*EJEMPLO: `}
const smskick2 = () => { return `ELIMINADO(A) 😼🫵`}
const smskick3 = () => { return `NO PUEDO ELIMINAR AL CREADOR DEL GRUPO 😆🫵`}
const smskick4 = () => { return `NO ESTÁ EN ESTE GRUPO 👻`}
