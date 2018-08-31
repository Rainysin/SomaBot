const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sorpresaembed = new Discord.RichEmbed()
    .addField("You~~", "My son...")
    .setImage("https://i.imgur.com/UIztUzQ.gif")
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(sorpresaembed)
};

module.exports.help = {
    name: "youare"
}