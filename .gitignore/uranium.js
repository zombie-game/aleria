const Discord = require('discord.js')
var  bot = new Discord.Client()
var prefix = (".")

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: '[.help] | Dev par le Staff', type: 0}})
    console.log("Bot Ready")
})

bot.login('NTQ3Nzc2OTg0MzAyNzQ3NjQ4.D07xEw.TS4O_IbQS2kJhRJivRYzpAhue5Q')

bot.on('message', message => {
	if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#F6FE01")
        .setTitle("Voici la page d'aide")
        .setDescription("Toutes les commandes disponible sur le bot!")
        .addField(".mod", "Pour les Modérateurs!")
        .setFooter("Menu d'aide")
        message.channel.send(help_embed);
        console.log(".help")
    }
	
	if(message.content === prefix + "mod"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FE0000")
        .setTitle("Voici la page d'aide pour mod")
        .addField(".ban", "Pour ban quelqu'un !")
		.addField(".kick", "Pour kick quelqu'un !")
        .setFooter("Menu d'aide pour mod")
        message.channel.send(help_embed);
        console.log(".mod")
    }
})

const ban = require('./kick et ban/ban');
const kick = require('./kick et ban/kick');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
	if (kick.match(message)){
        return kick.action(message)
    }
})