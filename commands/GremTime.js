const Discord = require("discord.js");

const numdepreguntas = [
    "0",
    "1",
    "2",
    "3",
    "4"
]

module.exports.run = async (bot, message, args) => {
    let Rnumdepreguntas = numdepreguntas[Math.floor(Math.random() * numdepreguntas.length)];
    if(Rnumdepreguntas == 0) {
        message.channel.send("vale verga 1")
    };
    if(Rnumdepreguntas == 1) {
        message.channel.send("vale verga 2")
    };
    if(Rnumdepreguntas == 2) {
        message.channel.send("vale verga 3")
    };
    if(Rnumdepreguntas == 3) {
        message.channel.send("vale verga 4")
    };
    if(Rnumdepreguntas == 4) {
        message.channel.send("vale verga 5")
    };
};

module.exports.help = {
    name: "gremtime"
};
