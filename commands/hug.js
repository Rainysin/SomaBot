const Discord = require("discord.js");

var hug = [ // done
    "https://i.imgur.com/rpj8PF0.gif",
    "https://i.imgur.com/qnnGQYs.gif",
    "https://i.imgur.com/sa51XHS.gif",
    "https://i.imgur.com/IJSLW4r.gif",
    "https://i.imgur.com/yuCj0tP.gif",
    "https://i.imgur.com/Vw80yww.gif",
    "https://i.imgur.com/QK1zaGV.gif",
    "https://i.imgur.com/FPilpae.gif",
    "https://i.imgur.com/AdM6Emh.gif",
    "https://i.imgur.com/Y93nKyA.gif",
    "https://i.imgur.com/YGbqzS1.gif",
    "https://i.imgur.com/S6JMdk1.gif",
    "https://i.imgur.com/d6gsUbJ.gif"
];

module.exports.run = async (bot, message, args) => {
    let toHug = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("Tagea a alguien, los abrazos no se dan solos uwu");
    if (!toHug) return message.channel.send("Tagea a alguien, los abrazos no se dan solos uwu");
    let randomhug = hug[Math.floor(Math.random() * hug.length)];
    let hugembed = new Discord.RichEmbed()
    .setDescription(`${message.author} ha abrazado a ${toHug} :blue_heart:`)
    .setImage(`${randomhug}`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(hugembed);
};

module.exports.help = {
    name: "hug"
};