const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let wutembed = new Discord.RichEmbed()
    .setImage(`https://i.imgur.com/sSUUtvN.gif`)
    .setColor("#fffb44")
    message.channel.send(wutembed)
};

module.exports.help = {
    name: "wut"
};