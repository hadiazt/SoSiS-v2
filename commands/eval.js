const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription('Run EveryThing'),
    async execute(interaction) {
        const { MessageEmbed } = require('discord.js');
        const { inspect } = require('util');

        // client.on('message', async message => {
        //   const args = message.content.split(' ');
        //   const command = args.shift().toLowerCase();
        
        //   if (command === config.PREFIX + 'eval') {
        //     // Put your userID here
        //     if (message.author.id !== '490519932292038659') return message.inlineReply('sik kon ||kosh khesh|| :/');
        //     if (!args.length) return;
        //     let evaled;
        //     try {
        //       evaled = await eval(args.join(" "));
        //       let evalend = new Discord.MessageEmbed()
        //         .setTitle('Eval Result : ')
        //         .setDescription('INPUT :\n```js\n' + args.join(" ") + '\n```\nOUTPUT :\n```js\n' + inspect(evaled) + '\n```')
        //         .setColor("GREEN")
        //       message.inlineReply(evalend).catch(e => { message.inlineReply('```js\n' + e + '\n```'); });
        //     }
        //     catch (error) {
        //       let evalerr = new Discord.MessageEmbed()
        //         .setTitle('Thre Was An Error : ')
        //         .setDescription('```js\n' + error + '```')
        //         .setColor("red")
        //       message.inlineReply(evalerr);
        //     }
        //   }
        // });

        return interaction.reply('s');
    },
};




