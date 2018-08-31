const Discord = require("discord.js");

var blush = [ // done
    "https://i.imgur.com/XziGLVP.gif",
    "https://i.imgur.com/wtsqVnL.gif",
    "https://i.imgur.com/4sO2zvy.gif",
    "https://i.imgur.com/Gzw2iYR.gif",
    "https://i.imgur.com/izQT4Ri.gif",
    "https://i.imgur.com/7YkErwp.gif",
    "https://i.imgur.com/RUnrohm.gif",
    "https://i.imgur.com/H3Ane0s.gif",
    "https://i.imgur.com/uUayE32.gif",
    "https://i.imgur.com/1mnjbfW.gif"
];

module.exports.run = async (bot, message, args) => {
    let toBlush = blush[Math.floor(Math.random() * blush.length)];
    let blushEmbed = new Discord.RichEmbed()
    .setDescription(`Parece que ${message.author}`, "Esta Sonrojad@ /u/")
    .setImage(`${toBlush}`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(blushEmbed)
};

module.exports.help = {
    name: "blush"
} 