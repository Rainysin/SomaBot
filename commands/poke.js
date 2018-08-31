const Discord = require("discord.js");

var poke = [
    "https://i.imgur.com/klfv8yj.gif",
    "https://i.imgur.com/Aq8keLF.gif",
    "https://i.imgur.com/6gj55CL.gif",
    "https://i.imgur.com/oQAAO6J.gif",
    "https://i.imgur.com/FjNa0IT.gif",
    "https://i.imgur.com/ZaalfHW.gif",
    "https://i.imgur.com/fe7dnZ3.gif",
    "https://i.imgur.com/gKipzDF.gif",
    "https://i.imgur.com/rSKTN3q.gif",
    "https://i.imgur.com/6tunKV8.gif",
    "https://i.imgur.com/JcH5JfC.gif",
    "https://i.imgur.com/bLWCwtu.gif",
    "https://i.imgur.com/kDUth9R.gif",
    "https://i.imgur.com/YXLRiG6.gif",
    "https://i.imgur.com/ik4H4tl.gif",
    "https://i.imgur.com/OTe00x3.gif"
];

module.exports.run = async (bot, message, args) => {
    let toPoke = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.mentions.users.first() == message.author) return message.channel.send("Tagea a alguien, no te hagas toques solo, se ve raro OwO")
    if (!toPoke) return message.channel.send("Tagea a alguien, no te hagas toques solo, se ve raro OwO")
    let randompoke = poke[Math.floor(Math.random() * poke.length)];
    let pokeembed = new Discord.RichEmbed()
    .setDescription(`${message.author} le ha dado un toque a ${toPoke}`)
    .setColor("#fffb44")
    .setImage(`${randompoke}`)
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(pokeembed);
};

module.exports.help = {
    name: "poke"
};