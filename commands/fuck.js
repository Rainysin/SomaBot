const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Yourself")
};

module.exports.help = {
    name: "fuck"
};