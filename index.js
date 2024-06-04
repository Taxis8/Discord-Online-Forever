const Eris = require("eris");
window.onerror = stoperror;
const keep_alive = require('./keep_alive.js')
window.onerror = stoperror;

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);
window.onerror = stoperror;

bot.on("error", (err) => {
  window.onerror = stoperror;
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
window.onerror = stoperror;

function stoperror() {
   return true;
}
