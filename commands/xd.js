const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let xdembed = new Discord.RichEmbed()
    .setImage(`https://i.imgur.com/7jEJSEo.jpg`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(xdembed)
};

module.exports.help = {
    name: "xd"
};