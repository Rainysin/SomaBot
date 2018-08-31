const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let choose = message.content.substring(8).split('/');
  let choice = (choose[Math.floor(Math.random() * choose.length)]);
  let chooseEmbed = new Discord.RichEmbed()
  .setColor("#fffb44")
  .setDescription(`Hey ${message.author.username}!, Deberias escoger **${choice}**, ok?`)
  .setFooter('O puedes ignorarme unu');
  
  if (choose.length < 2) {
    message.channel.send('Debes agregar más opciones owo');
  } else {
    message.channel.send({embed: chooseEmbed});
  }

}

module.exports.help = {
  name: "choose"
}