const Discord = require("discord.js");

var pout = [ // done
    "https://i.imgur.com/PS0pMsZ.gif",
    "https://i.imgur.com/c38UYUD.gif",
    "https://i.imgur.com/HPjhQLD.gif",
    "https://i.imgur.com/6gUeE6r.gif",
    "https://i.imgur.com/zNBoLJP.gif",
    "https://i.imgur.com/bCOCJQ9.gif",
    "https://i.imgur.com/BtUChsE.gif",
    "https://i.imgur.com/wkbtEU4.gif"
];

module.exports.run = async (bot, message, args) => {
    let toPout = pout[Math.floor(Math.random() * pout.length)];
    let poutEmbed = new Discord.RichEmbed()
    .setDescription(`Parece que ${message.author} no esta content@ owo`)
    .setImage(`${toPout}`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(poutEmbed)
};

module.exports.help = {
    name: "pout"
};