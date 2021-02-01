const { Composer, session } = require('telegraf')

const bot = new Composer()

bot.use(session())

bot.start((ctx) => ctx.reply('Welcome message'))
bot.help((ctx) => ctx.reply('Help message'))
bot.settings((ctx) => ctx.reply('Bot settings'))

bot.command('date', (ctx) => ctx.reply(`Server time: ${Date()}`))

module.exports = bot
