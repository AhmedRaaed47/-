const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("676053565969530883")
setInterval(function() {
channel.send(`credit`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
