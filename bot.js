const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By lina");





client.on("ready", () => {
let channel =     client.channels.get("529176448406388736")
setInterval(function() {
channel.send(`لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا    لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  لينا لينا لينا لينا لينا لينا لينا لينا  لينا لينا  لينا لينا  `);
}, 25)
})
















        var prefix = "l";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "i") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('by lina');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });













 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
