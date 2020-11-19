// firstly install these 1)https://code.visualstudio.com/ 2)https://nodejs.org/en/
// make a folder for your bot example fivem bot
// after installing these apps open command prompt(cmd) and go to your folder for example cd Desktop/fivem bot
// write npm init and then press enter to all(including the yes in the end)
// then you have to install the packages that we need to use 
// run npm i discord.js
// after installing the package go to visual studio code and paste the code from here
// open this site (https://discord.com/developers/applications) and make a new application and make it as a bot
// if you want to add the bot in your server just go here (https://discordapi.com/permissions.html) select the administrator button and put in the client id your bots id
// then copy the link and select your server 
// Video: https://www.youtube.com/watch?v=j_sD9udZnCk

const {Client,MessageEmbed} = require("discord.js"); //npm i discord.js
const bot = new Client({partials: ["CHANNEL","GUILD_MEMBER","MESSAGE","REACTION","USER"]});

bot.on("ready", async function(){
console.log(`${bot.user.tag} is now online`)
});
bot.on("message", async (message){
if(message.author.bot) return;

if(message.channel.id === "channel_id"){ //put the dark chat logs channel id here
message.channel.send(message.content, message.attachments.first())
message.delete({ timeout: 1000})
});
bot.on("token here") // you will find it at (https://discord.com/developers/applications)
