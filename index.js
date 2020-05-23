const TelegramBot = require('node-telegram-bot-api')
const Variables = require('./variables'); 

const TOKEN = Variables.token; 
const bot = new TelegramBot( TOKEN, { polling: true } )
