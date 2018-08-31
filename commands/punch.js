const Discord = require("discord.js");

var punch  = [
    "https://i.imgur.com/iwASWbN.gif",
    "https://i.imgur.com/yf30Jpf.gif",
    "https://i.imgur.com/PzD17Bl.gif",
    "https://i.imgur.com/KkN8JD7.gif",
    "https://i.imgur.com/rS2OT64.gif",
    "https://i.imgur.com/P3CHxOc.gif"
];

module.exports.run = async (bot, message, args) => {
    let toPunch = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("No te golpees solo, puede que seas tont@, pero no creo que para lastimarte a ti mism@ EwE")
    if (!toPunch) return message.channel.send("No te golpees solo, puede que seas tont@, pero no creo que para lastimarte a ti mism@ EwE")
    let randompunch = punch[Math.floor(Math.random() * punch.length)];
    let punchembed = new Discord.RichEmbed()
    .setDescription(`${message.author} ha golpeado a ${toPunch}`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    .setImage(`${randompunch}`);
    message.channel.send(punchembed)
};

module.exports.help = {
    name: "punch"
};