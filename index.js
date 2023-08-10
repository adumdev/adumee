const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require("ytdl-core")
const queue = new Map()

let botname = "Adumee bot"


bot.on("ready", async() => {
 console.log(`${bot.user.username} running!`)

  let státuszok = [
    "Prefix: -help"
  ]

   setInterval(function() {
    let status = státuszok[Math.floor(Math.random()* státuszok.length)]

    bot.user.setActivity(status, {type: "PLAYING"})
   }, 3000)   
})

bot.on("message", async message => {
  let MessageArray = message.content.split(" ");
  let cmd = MessageArray[0];
  let args = MessageArray.slice(1);
  let prefix = botconfig.prefix;
           
  if(cmd === `${prefix}invitelink`){
    message.channel.send("https://discord.gg/CT29euky8v")
  }
  
  if(cmd === `${prefix}insta`){
    message.channel.send("https://www.instagram.com/adumeebot/")
  }
  
  if(cmd === `${prefix}scpet`){
    message.channel.send("https://discord.gg/d6y77szKPT")
  }  


  if(cmd === `${prefix}szia`){
             message.channel.send("Heyyoo!")
           }

  if(cmd === `${prefix}wassup?`){
          message.channel.send("Im fineee! And you?")
        }

    if(cmd === `${prefix}help`){
      let HelpEmbed = new Discord.MessageEmbed()
     .setAuthor(message.author.username)
     .setTitle("Help")
     .addField("Commands:", "-szia\n -wassup?\n -help\n -invitelink\n -insta\n -scpet")
     .setImage(message.guild.iconURL())
     .setThumbnail(message.author.displayAvatarURL())
     .setDescription("**Itt mindent megtalálsz**")
     .setFooter(`${botname} | ${message.createdAt}`)
     .setColor("RANDOM")

     message.channel.send(HelpEmbed)
    }


  console.log(cmd)












})











bot.login(tokenfile.token);
