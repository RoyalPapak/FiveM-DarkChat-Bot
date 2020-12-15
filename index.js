// firstly install these 1)https://code.visualstudio.com/ 2)https://nodejs.org/en/
// make a folder for your bot example fivem bot
// after installing these apps open command prompt(cmd) and go to your folder for example cd Desktop/fivem bot
// write npm init and then press enter to all(including the yes in the end)
// then you have to install the packages that we need to use 
// run npm i discord.js
// after installing the package go to visual studio code open the fivem bot folder create a file named index.js and paste the code from here
// open this site (https://discord.com/developers/applications) and make a new application and make it as a bot
// if you want to add the bot in your server just go here (https://discordapi.com/permissions.html) select the administrator button and put in the client id your bots id
// then copy the link and select your server 
// Video: https://www.youtube.com/watch?v=j_sD9udZnCk
// Join here for help: https://discord.gg/VTdeXwUQKX || https://discord.gg/7seSqGm6mC
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () => console.log(`${bot.user.tag} is online!`))

bot.on('message', async message => {
    if(message.author.bot) return;
  
  if(message.channel.id === "755402797549224046"){ //dark chat channelid
message.channel.send(message.content, message.attachments.first())
message.delete({ timeout: 3000 })
}
if(message.channel.id === "755402797549224046"){ //dark chat channelid
  let channel = message.guild.channels.cache.get("744605031957004370") //dark chat logs channelid
  if(!message.attachments.first()){ 
    let embed = new MessageEmbed()
    .setTitle("Dark Logs")
    .addField("Egrapse o:", `${message.author.tag}`)
  .addField("Mhnuma:", `${message.content}`)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Dark Chat System Made By Papak#9999")
  channel.send(embed)
  }
  
  if(!message.content){
    let channel2 = message.guild.channels.cache.get("744605031957004370") //dark chat logs channelid
    let embed2 = new MessageEmbed()
    .setTitle("Dark Logs")
  .addField("Egrapse o:", `${message.author.tag}`)
  .addField("Mhnuma:", `Den egrapse tipota.Apla esteile eikona.`)
  .setImage(message.attachments.first().proxyURL)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Dark Chat System Made By Papak#9999")
    channel2.send(embed2)
  }
  else if(message.content, message.attachments.first()){
    let channel3 = message.guild.channels.cache.get("744605031957004370") //dark chat logs channelid
    let embed3 = new MessageEmbed()
    .setTitle("Dark Logs")
  .addField("Egrapse o:", `${message.author.tag}`)
  .addField("Mhnuma:", `${message.content}`)
  .setImage(message.attachments.first().proxyURL)
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter("Dark Chat System Made By Papak#9999")
    channel3.send(embed3)
  }
} 
    });
bot.login("token here") // you will find it at (https://discord.com/developers/applications)
