
//https://www.npmjs.com/package/messaging-api-telegram
var fs = require('fs');
//buscando data
var date = new Date(); 
var dia = date.getDate();
var mes = date.getMonth();
var ano = date.getYear();
var hora = date.getHours();


console.log(hora)

const { TelegramClient } = require('messaging-api-telegram');
const client = TelegramClient.connect('863878594:AAE95kZdNGyn1CVzdETsj0Gt0dl37JdMCfI');
const CHAT_IDD = TelegramClient.connect('229336404');
const CHAT_ID = '229336404';
const USER_ID = '@magdielpaulo';
const token = '863878594:AAE95kZdNGyn1CVzdETsj0Gt0dl37JdMCfI';

client.getWebhookInfo().catch(error => {
  console.log(error); //s formatted error message
  console.log(error.stack); // error stack trace
  console.log(error.config); // axios request config
  console.log(error.request); // HTTP request
  console.log(error.response); // HTTP response

});


//inicio da estrutura de saudação 


if(hora<12){
  client.sendMessage(CHAT_ID, 'Boa noite', {
    disable_web_page_preview: true,
    disable_notification: true,
    
  });
console.log('menor que 14 bom dia')
}


if(hora >= 12){
  client.sendMessage(CHAT_ID, 'Boa tarde', {
    disable_web_page_preview: true,
    disable_notification: true,
    
  });
console.log('maior ou igual a 14 boa tarde')
}


if(hora>18){
  client.sendMessage(CHAT_ID, 'Boa noite', {
    disable_web_page_preview: true,
    disable_notification: true,
    
  });
console.log('maior que 18 boa noite')
}

//else{
//  client.sendMessage(CHAT_ID, 'verificar', {
//  disable_web_page_preview: true,
//  disable_notification: true,
 
//  });
//   console.log('verificar')
//}


//fim da estrutura de saudação

client.getChatMembersCount(CHAT_ID).then(count => {
  console.log(count); // '6'
});



 
  // send file
  client.sendDocument(CHAT_ID, 'http://www.executivaipb.com.br/arquivos/confissao_de_westminster.pdf')
  client.sendDocument(CHAT_ID, 'https://www.opendrive.com/wp-content/uploads/guides/OpenDrive_API_guide.pdf')

  //client.sendMediaGroup(CHAT_ID, media)
  //client.sendPhoto(CHAT_ID, 'cats.png')

  

  fs.appendFile('file.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

   //client
  //.getFile('UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2')
  //.then(file => {
  //  console.log(file);
   
  //});

 
//client
//  .getUpdates({
//    limit: 10,
//  })
//  .then(updates => {
//    console.log(updates);

//   });

 


 //client.sendDocument(CHAT_ID, 'https://example.com/doc.gif', {
 // caption: 'gooooooodDocument',
 // disable_notification: true,
//});




 //client.replyWithDocument({ source: 'C:\\Users\\tr642633\\Music\\epicas\\audio.mp3' })



//Telegram.sendAudio(CHAT_ID, 'C:\\Users\\tr642633\\Music\\epicas\\audio.mp3',{
//  console.log('enviando audio');
//});




//client.sendPhoto(CHAT_ID, 'https://serede.com.br/static/media/logo_serede.e2168082.svg', {
//  caption: 'gooooooodPhoto',
//  disable_notification: true,
//});







//client.getChatMember(CHAT_ID, USER_ID).then(member => {
//  console.log(member);
  
//});



//client.sendGame(CHAT_ID, 'Mario Bros.', {
//  disable_notification: true,
//});




//client.editMessageLiveLocation(
//  {
//    latitude: 30,
//    longitude: 45,
//  },
//  {
//    message_id: 5,
//  }
//);

//client
//  .getFile('UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2')
//  .then(file => {
//    console.log(file);
   
//  });



//client.sendVideo(CHAT_ID, 'https://youtu.be/7ZoNJ38HWp4', {
//  caption: 'gooooooodVideo',
//  disable_notification: true,
//});




//client.sendDocument(CHAT_ID, '1558546324405911', {
//  caption: 'gooooooodDocument',
//  disable_notification: true,
//});


//client
//  .getUpdates({
//    limit: 10,
//  })
//  .then(updates => {
//    console.log(updates);

//   });

  
 
  //client.getMe().then(result => {
  //console.log(result);
  
  //});

  //client.sendContact(
  //CHAT_ID,
  //{
  //  phone_number: '886123456789',
  //  first_name: 'first',
  //},
  //{ last_name: 'last' }
  //);

  //client.sendChatAction(CHAT_ID, 'typing');

//console.log('chat id: '+CHAT_ID);
//  client.getChat(CHAT_ID).then(chat => {
//  console.log(chat);
  
//  });





