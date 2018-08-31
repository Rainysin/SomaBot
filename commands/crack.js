const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let crackembed = new Discord.RichEmbed()
    .addField("Eres un", "Grande Genio Figura Crack Mastodonte Ídolo Champion Monstro Referente Maquina Artista Elemento Jefe Fiera Maestro Socio Golfo Héroe Tanque Fenómeno Gacela Tigre Bestia Titán Animal Gigante Prenda Semental Coloso Hacha Mostrenco Campeón Killer Ciclón Pieza Brontosaurio Vikingo Vividor")
    .setColor("#fffb44")
    .setFooter("Soma Bot Is Powered By memes")
    .setTimestamp()
    message.channel.send(crackembed) 
};

module.exports.help = {
    name: "crack"
};