const fs = require('fs');

// copia documentos fechados
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\guarda doc\\ACOMPANHAMENTO - RM.DM_PR.xlsm", "Z:\\ALMOXARIFADO\\web\\web-teste\\baixar\\ACOMPANHAMENTO - RM.DM_PR.xlsm", (err) => {
  if (err) throw err;
  console.log('copiou documentos fechados');
});
//copia tarefas
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\tarefas\\tarefas.xlsm", "Z:\\ALMOXARIFADO\\web\\web-teste\\baixar\\tarefas.xlsm", (err) => {
  if (err) throw err;
  console.log('copiou tarefas');
});

//copia documentos abertos
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\tarefas\\docs_aberto\\RM-DM X BAIXA ANIEL.xlsm", "Z:\\ALMOXARIFADO\\web\\web-teste\\baixar\\RM-DM X BAIXA ANIEL.xlsm", (err) => {
  if (err) throw err;
  console.log('copiou documentos abertos');
});

//copia PVR4K
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\balanceamento\\balanceamento PVR4K.xlsm", "Z:\\ALMOXARIFADO\\web\\web-teste\\baixar\\balanceamento PVR4K.xlsm", (err) => {
  if (err) throw err;
  console.log('copiou pvr 4k');
});

//copia DELAYFORNECEDOR
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\delay_fornecedor\\delay_fornecedor.xlsm", "Z:\\ALMOXARIFADO\\web\\web-teste\\baixar\\delay_fornecedor.xlsm", (err) => {
  if (err) throw err;
  console.log('copiou delay fornecedor');
});