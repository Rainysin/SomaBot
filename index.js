﻿const fs = require("fs");
const config = require("./config.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No se encontraron comandos")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} Listo!`)
        bot.commands.set(props.help.name, props);
    })

})

bot.on("ready", async () => {
    console.log(`${bot.user.username} Esta Conectada!`);
    bot.user.setActivity("People Problems~", {type: "Listening"});
});
            
bot.on("message", async message => {
    let prefix = config.prefix; 
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;

    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot,message,args);
});

bot.login(config.token);