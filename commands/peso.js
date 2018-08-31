const Discord = require("discord.js");

var sinko = [
    "https://i.imgur.com/oIc9gtn.png",
    "https://i.imgur.com/VzQ4CtT.png",
    "https://i.imgur.com/fGHffKz.png",
    "https://i.imgur.com/iUZzQIy.png",
    "https://i.imgur.com/w8qEub6.jpg",
    "https://i.imgur.com/Dp6zuFG.jpg",
    "https://i.imgur.com/SCwq3Wm.jpg",
    "https://i.imgur.com/6B0l2zU.png",
    "https://i.imgur.com/4LdLFQD.jpg",
    "https://i.imgur.com/dnFgcA1.jpg",
    "https://i.imgur.com/wOqqyJQ.jpg",
    "https://i.imgur.com/RsR12P3.jpg",
    "https://i.imgur.com/aPvA2FS.jpg",
    "https://i.imgur.com/fNSNkwK.jpg",
    "https://i.imgur.com/lSeKn04.jpg",
    "https://i.imgur.com/iNsrVVe.jpg",
    "https://i.imgur.com/Ppo71Jo.jpg",
    "https://i.imgur.com/tB0ino0.jpg",
    "https://i.imgur.com/vVp4BFH.jpg",
    "https://i.imgur.com/KKVMTXH.jpg"
]

module.exports.run = async (bot, message, args) => {
    let randomsinko = sinko[Math.floor(Math.random() * sinko.length)]
    let tosinko = message.mentions.members.first() || message.guild.members.get(args[0]);
    let sinkoembed = new Discord.RichEmbed()
    .setDescription(`${message.author} ha encontrado~~`)
    .setImage(`${randomsinko}`)
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    .setColor("#fffb44");
    let sinkoembedto = new Discord.RichEmbed()
    .setDescription(`${message.author} ha encontrado algo y se lo dio a ${tosinko}~~`)
    .setImage(`${randomsinko}`)
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    .setColor("#fffb44");
    if (tosinko) {
        message.channel.send(sinkoembedto)
    } else {
        message.channel.send(sinkoembed)
    };
};

module.exports.help = {
    name: "peso"
}