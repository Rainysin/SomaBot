const Discord = require("discord.js")

const kill = [
    "Por Furro",
    "Porque le debia dinero",
    "Porque si",
    "Por puto",
    "Por multi-waifu",
    "Porque yolo"
]
const suicide = [
    "Porque lo dejo la waifu",
    "Porque si",
    "Porque la vida era muy tryhard",
    "Porque valia verga"
]

module.exports.run = async (bot, message, args) => {
    let tokill = message.mentions.members.first() 
    let RandomKill = kill[Math.floor(Math.random() * kill.length)];
    let RandomSuicide = suicide[Math.floor(Math.random() * suicide.length)]
    if(tokill) {
        message.channel.send(`${message.member.user} le a pegado un tiro a ${tokill} ${RandomKill}`)
    } else {
        message.channel.send(`${message.member.user} se a pegado un tiro ${RandomSuicide}`)
    }
};

module.exports.help = {
    name: "kill"
};