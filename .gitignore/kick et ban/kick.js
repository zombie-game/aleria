const prefix  = ('.');

module.exports = class kick {
    static match (message) {
      return message.content.startsWith('.kick')
    }
            
    static action (message) {
      const args = message.content.slice(prefix.length).split(/ +/);
      const command = args.shift().toLowerCase();
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('tu n\'est pas modo . ');
          const member = message.mentions.members.first();
        if (!member) return message.reply('Commande Invalide, il faut mettre `.Kick @User#1234`');
          member.kick({
            days: args[1] || null,
            reason: `Kicker par ${message.author.tag}`
          });
      }
    //}
}