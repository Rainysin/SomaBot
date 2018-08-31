const Discord = require("discord.js");
var trigger = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
module.exports.run = async (bot, message, args) => {
    let randomtrigger = trigger[Math.floor(Math.random() * trigger.length)]
    if(randomtrigger == 0) {
        message.channel.send("Haz Cosechado una :banana:!")
    };
    if(randomtrigger == 1) {
        message.channel.send("Haz Cosechado una :apple:!")
    };
    if(randomtrigger == 2) {
        message.channel.send("Haz Conseguido una :green_apple:!")
    };
    if(randomtrigger == 3) {
        message.channel.send("Haz Cosechado muchas cosas así que hiciste una ensalada! :salad:")
    };
    if(randomtrigger == 4) {
        message.channel.send("Parece que Empezo a llover :cloud_rain:!")
    };
    if(randomtrigger == 5) {
        message.channel.send("Parece que se acerca una Tormenta, Hay que preparar los cultivos! :thunder_cloud_rain: :thunder_cloud_rain:")
    };
    if(randomtrigger == 6) {
        message.channel.send("Oh no!, :cloud_tornado: :cloud_tornado: :cloud_tornado: Un tornado se ha llevado tu cosecha!")
    };
    if(randomtrigger == 7) {
        message.channel.send("Haz Cosechado una :pear:!")
    };
    if(randomtrigger == 8) {
        message.channel.send("Regando~~ :sweat_drops: :sweat_drops: :sweat_drops:")
    };
    if(randomtrigger == 9) {
        message.channel.send("Parece que tus cultivos no estan listos, Vuelve mas tarde! :deciduous_tree:")
    };
    if(randomtrigger == 10) {
        message.channel.send("Haz Cosechado un gran :melon:!")
    };
    if(randomtrigger == 11) {
        message.channel.send("Haz Cosechado un gran :melon:!, Es tan grande que puedes vivir incluso en el!")
    };
    if(randomtrigger == 12) {
        var potatos = [
            "Haz Cosechado tantas :potato: que decidiste hacer :fries:!",
            "Haz Cosechado unos cuantos :tomato:!"
        ];
        let randompotatos = potatos[Math.floor(Math.random() * potatos.length)];
        let potatoembed = new Discord.RichEmbed()
        .setDescription(`${message.author} ${randompotatos}`)
        .setColor("#fffb44")
        .setImage("https://i.imgur.com/wnqHoth.gif")
        message.channel.send(`${potatoembed}`)
    };
    if(randomtrigger == 13) {
        message.channel.send("Haz Cosehachado unos cuantos :hot_pepper:!, Cuidado que pueden estar muy picantes!")
    };
    if(randomtrigger == 14) {
        message.channel.send("Haz Cosechado un :watermelon:!, Cuidado no te comas las semillas!")
    };
    if(randomtrigger == 15) {
        message.channel.send("Haz Cosechado unas :cherries:!")
    };
    if(randomtrigger == 16) {
        message.channel.send("Haz Cosechado unas cuantas :grapes:!")
    };
    if(randomtrigger == 17) {
        message.channel.send("Haz Cosechado un :eggplant:!")
    };
    if(randomtrigger == 18) {
        message.channel.send("Haz Cosechado unos cuantos :corn:!")
    };
    if(randomtrigger == 19) {
        message.channel.send("Haz Cosechado una :pineapple:!")
    };
    if(randomtrigger == 20) {
        message.channel.send("Haz Cosechado tanto trigo que hiciste :bread:!")
    };
    if(randomtrigger == 21) {
        message.channel.send("Al Parecer tenias muchas gallinas en tu corral así que hiciste unas cuantas :poultry_leg:!")
    };
    if(randomtrigger == 22) {
        message.channel.send("Al Parecer una vaca de tu ganado estaba lista para convertirse en :meat_on_bone:!")
    };
    if(randomtrigger == 23) {
        message.channel.send("Hace tanto sol que no se puede cultivar! :sunny:")
    };
    if(randomtrigger==24) {
        var gifsfarmrazuto = [
            "https://i.imgur.com/UanH7pQ.gif",
            "https://i.imgur.com/EuDN3vd.gif",
            "https://i.imgur.com/T86ahk8.gif",
            "https://i.imgur.com/tJxYBOm.gif"
        ];
        let randomgiffarm = gifsfarmrazuto[Math.floor(Math.random() * gifsfarm.length)]
        let farmembed = new Discord.RichEmbed()
        .setDescription(`${message.author} Parece que tienes muchas cosas que cultivar! así que <@!251100769711947787> te ha decidido ayudar`)
        .setColor("#fffb44")
        .setImage(`${randomgiffarm}`)
        message.channel.send(farmembed)
    }
};

module.exports.help = {
    name: "farmtest"
};