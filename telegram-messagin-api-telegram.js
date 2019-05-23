
//https://www.npmjs.com/package/messaging-api-telegram

const { TelegramClient } = require('messaging-api-telegram');
const client = TelegramClient.connect('863878594:AAE95kZdNGyn1CVzdETsj0Gt0dl37JdMCfI');
const CHAT_IDD = TelegramClient.connect('229336404');
const CHAT_ID = '229336404';

client.getWebhookInfo().catch(error => {
  console.log(error); //s formatted error message
  console.log(error.stack); // error stack trace
  console.log(error.config); // axios request config
  console.log(error.request); // HTTP request
  console.log(error.response); // HTTP response

});


//inicio da estrutura de saudação 


if(hora<14){
  client.sendMessage(CHAT_ID, 'Boa noite', {
    disable_web_page_preview: true,
    disable_notification: true,
    
  });
console.log('menor que 14 bom dia')
}


if(hora >= 14){
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


client.editMessageLiveLocation(
  {
    latitude: 30,
    longitude: 45,
  },
  {
    message_id: 5,
  }
);

//client
//  .getFile('UtAqweADGTo4Gz8cZAeR-ouu4XBx78EeqRkABPL_pM4A1UpI0koD65K2')
//  .then(file => {
//    console.log(file);
   
//  });



//client.sendVideo(CHAT_ID, 'https://youtu.be/7ZoNJ38HWp4', {
//  caption: 'gooooooodVideo',
//  disable_notification: true,
//});




//client.sendDocument(CHAT_ID, 'https://www.google.com.br/url?sa=i&source=images&cd=&ved=2ahUKEwiN9s7Sk63iAhU7GbkGHY5UAAwQjRx6BAgBEAU&url=https%3A%2F%2Fserede.com.br%2F&psig=AOvVaw0UMidlq95WTUQI98UiVFVk&ust=1558546324405911', {
//  caption: 'gooooooodDocument',
//  disable_notification: true,
//});


client
  .getUpdates({
    limit: 10,
  })
  .then(updates => {
    console.log(updates);

   });

  
 
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





