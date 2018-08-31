const Discord = require("discord.js");

var fortuna = [ // done
    "Sí",
    "No",
    "Tal vez",
    "Quizas",
    "Podria ser",
    "Para nada",
    "Si te hace feliz",
    "Pregunta despues",
    "No me convence",
    "Estoy cansada, pregunta mas tarde",
    "Que va"
];

module.exports.run = async (bot, message, args) => {
    message.channel.send(fortuna[Math.floor(Math.random() * fortuna.length)]);
};

module.exports.help = {
    name: "luck"
};