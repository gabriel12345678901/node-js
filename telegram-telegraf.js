//https://telegraf.js.org/#/?id=sendaudio
const CHAT_ID = '229336404';
//const USER_ID = '@magdielpaulo';
const token = '863878594:AAE95kZdNGyn1CVzdETsj0Gt0dl37JdMCfI';

const Telegram = require('telegraf/telegram')
const telegram = new Telegram(token)


const Telegraf = require('telegraf')
const bot = new Telegraf(token)


bot.on('text', (ctx) => {
  ctx.replyWithVideo({ source: 'C:\\Users\\tr642633\\Documents\\desenvolvimento\\node\\video.mp4' })
});

bot.launch()


telegram.sendDocument(CHAT_ID, 'http://www.executivaipb.com.br/arquivos/confissao_de_westminster.pdf')