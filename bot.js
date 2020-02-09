const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("676067175307411491")
setInterval(function() {
channel.send(`^nitro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
