const Eris = require("eris");
Eris.onerror = stoperror;
const keep_alive = require('./keep_alive.js')
keep_alive.onerror = stoperror;

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
bot.onerror = stoperror;

bot.on("error", (err) => {
  bot.onerror = stoperror;
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
bot.onerror = stoperror;

function stoperror() {
   return true;
}
