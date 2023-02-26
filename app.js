/** initialize .env file */
require("dotenv").config();

/** import telegraf */
const {Telegraf} = require("telegraf");

/** get data from env */
const {TOKEN} = process.env;

/** create the bot */
const bot = new Telegraf(TOKEN);

bot.start(ctx => {
    ctx.reply("welcome to telegraf bot")
});

bot.help(ctx => {
    ctx.reply("hah, seems like you wasn't smart enough after all. you poor dog");
});

bot.hears("salam", ctx => {
    ctx.reply("what you want?")
});

bot.on('text', ctx => {
    ctx.reply('this is a replay to a text message')
});

bot.on('voice', ctx => {
    console.log(ctx)
    ctx.reply('So, you found out that you could send voices?? good for you, YOU NOOB')
});

bot.on('sticker', ctx => {
    ctx.reply('👍')
});

bot.command('/first_command', ctx => {
    ctx.reply('this is a replay to your first command');
});

/** launch the bot */
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));