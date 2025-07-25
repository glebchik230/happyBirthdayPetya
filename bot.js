import { Telegraf, Markup } from 'telegraf';

const bot = new Telegraf('8284500060:AAHGYqRlCj6HLtt6zBmyVN-oskWjNFZjOgo');

bot.start((ctx) => {
  ctx.reply(
    `🎉 Привет, ${ctx.from.first_name}! 
С днём рождения! 🎂  С днём рождения, уважаемый Петр! Желаем тебе крепкого здоровья, неиссякаемой энергии и новых свершений. Пусть каждый день будет наполнен яркими событиями, интересными встречами и приятными сюрпризами. Будь счастлив и окружён заботой близких!
Жми на кнопку ниже, чтобы открыть игру!`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('🚀 Открыть игру', 'https://glebchik230.github.io/happyBirthdayPetya/')]
    ])
  );
});

bot.launch();
