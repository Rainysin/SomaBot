const Discord = require("discord.js");

var kiss = [ // done
    "https://i.imgur.com/okvBO70.gif",
    "https://i.imgur.com/9PaHFvD.gif",
    "https://i.imgur.com/6ttz8EW.gif",
    "https://i.imgur.com/WErfaeo.gif",
    "https://i.imgur.com/aeyUGAt.gif",
    "https://i.imgur.com/7yVUXEd.gif",
    "https://i.imgur.com/m7lbQP1.gif",
    "https://i.imgur.com/LDNEWr6.gif",
    "https://i.imgur.com/EMtqclz.gif",
    "https://i.imgur.com/tCylzfJ.gif",
    "https://i.imgur.com/9Lzwip1.gif",
    "https://i.imgur.com/lxHQcKc.gif",
    "https://i.imgur.com/c5ZcaUr.gif"
];

module.exports.run = async (bot, message, args) => {
    let toKiss = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("Tagea a alguien, Besarte a ti mismo se ve muy raro uwu")
    if (!toKiss) return message.channel.send("Tagea a alguien, Besarte a ti mismo se ve muy raro uwu")
    let randomkiss = kiss[Math.floor(Math.random() * kiss.length)];
    let kissembed = new Discord.RichEmbed()
    .setDescription(`${message.author} ha besado a ${toKiss} //u//`)
    .setColor("#fffb44")
    .setImage(`${randomkiss}`)
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(kissembed);
};

module.exports.help = {
    name: "kiss"
};