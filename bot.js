const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527990368936001538")
setInterval(function() {
channel.send(`wadee wadee wadee wadee wadee`);
}, 30)
})

client.login(process.env.BOT_TOKEN);