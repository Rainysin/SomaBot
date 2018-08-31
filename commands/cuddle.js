const Discord = require("discord.js");

var cuddle = [ // done
    "https://i.imgur.com/G6BWiKM.gif",
    "https://i.imgur.com/2HQxYmi.gif",
    "https://i.imgur.com/zEIv1co.gif",
    "https://i.imgur.com/ZP5AHDb.gif",
    "https://i.imgur.com/a6sJvZh.gif",
    "https://i.imgur.com/aCTLVmZ.gif",
    "https://i.imgur.com/zoXYh6o.gif",
    "https://i.imgur.com/pIwtBDJ.gif"
];

module.exports.run = async (bot, message, args) => {
    let toCuddle = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("Tagea a alguien, No te acurruques solo. :eyes:");
    if (!toCuddle) return message.channel.send("Tagea a alguien, No te acurruques solo. :eyes:");
    let randomcuddle = cuddle[Math.floor(Math.random() * cuddle.length)];
    let cuddleembed = new Discord.RichEmbed()
    .setDescription(`${message.author} se ha acurrucado con ${args[0]}`)
    .setImage(`${randomcuddle}`)
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp();
    message.channel.send(cuddleembed);
    console.log(args[0]);
};

module.exports.help = {
    name: "cuddle"
}