const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sorpresaembed = new Discord.RichEmbed()
    .addField("¿Alguien dijo", "SORPRESA?")
    .setImage("https://i.imgur.com/LTxnOmT.jpg")
    .setColor("#fffb44")
    message.channel.send(sorpresaembed) 
};

module.exports.help = {
    name: "sorpresa"
};