const Discord = require("discord.js");

var pat  = [
    "https://i.imgur.com/6qK7Gvx.gif",
    "https://i.imgur.com/yGFLhjk.gif",
    "https://i.imgur.com/oiwvCvF.gif",
    "https://i.imgur.com/NY6kCTY.gif",
    "https://i.imgur.com/IXHf2Y2.gif",
    "https://i.imgur.com/a5fCdjd.gif",
    "https://i.imgur.com/bBEEoF9.gif"
];

module.exports.run = async (bot, message, args) => {
    let toPat = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("Puede que se te haga comodo a ti solo, pero tagea a alguien uwu")
    if (!toPat) return message.channel.send("Puede que se te haga comodo a ti solo, pero tagea a alguien uwu")
    let randompat = pat[Math.floor(Math.random() * pat.length)];
    let patembed = new Discord.RichEmbed()
    .setDescription(`${message.author} ha acariciado a ${toPat} :heart:`)
    .setColor("#fffb44")
    .setImage(`${randompat}`)
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(patembed)
};

module.exports.help = {
    name: "pat"
};