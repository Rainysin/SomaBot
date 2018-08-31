const Discord = require("discord.js");

var slap  = [
    "https://i.imgur.com/JHIDsrG.gif",
    "https://i.imgur.com/zxzkDy3.gif",
    "https://i.imgur.com/qS1yOry.gif",
    "https://i.imgur.com/i4MYgby.gif",
    "https://i.imgur.com/dVAJfoY.gif",
    "https://i.imgur.com/SMZ88lT.gif"
];

module.exports.run = async (bot, message, args) => {
    let toSlap = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("Puede que darte cachetadas te mantenga despierto pero no lo hagas qwq, mejor pegale cachetadas a alguien mas hehe~~")
    if (!toSlap) return message.channel.send("Puede que darte cachetadas te mantenga despierto pero no lo hagas qwq, mejor pegale cachetadas a alguien mas hehe~~")
    let slaprandom = slap[Math.floor(Math.random() * slap.length)];
    let slapembed = new Discord.RichEmbed()
    .setDescription(`${message.author} ha cacheteado a ${toSlap}`)
    .setColor("#fffb44")
    .setImage(`${slaprandom}`)
    message.channel.send(slapembed)
};

module.exports.help = {
    name: "slap"
};