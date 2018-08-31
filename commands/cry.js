const Discord = require("discord.js");

var cry = [ // done
    "https://i.imgur.com/C7Z7RkH.gif",
    "https://i.imgur.com/BMhKPQq.gif",
    "https://i.imgur.com/7BDJKnW.gif"
];

module.exports.run = async (bot, message, args) => {
    let toCry = cry[Math.floor(Math.random() * cry.length)];
    let cryEmbed = new Discord.RichEmbed()
    .setDescription(`Parece que Alguien ha hecho llorar a ${message.author} qwq`)
    .setImage(`${toCry}`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(cryEmbed)
};

module.exports.help = {
    name: "cry"
}