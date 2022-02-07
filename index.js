// @AkenoHimejimaChatBot
// Authored by https://github.com/Ryukaizen
/* This is an entry-point file */

const { Telegraf } = require('telegraf')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)


bot.start((ctx) => {
    let message = `API response received!`
    ctx.reply(message)
})


bot.command('/akeno', async (ctx) => {

        ctx.reply('Test reply')
        
        }
);


bot.launch()


