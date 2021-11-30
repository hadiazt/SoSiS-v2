const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eval')
        .setDescription('Run EveryThing')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Your Code ')
                .setRequired(true)
        ),
    async execute(interaction) {
        const { MessageEmbed } = require('discord.js');
        const { OWNER } = require('../data/config.json');

        const { Database } = require('beta.db')
        const afkdb = new Database('./data/afk.json')
        const lovedb = new Database("./data/love.json")

        var CODE = interaction.options.get('input').value;

        const { inspect } = require('util');


        if (interaction.user.id !== OWNER) return message.inlineReply('Opps !!! You Are Not The Bot Owner');
        let evaled;
        try {
            evaled = await eval(CODE);
            let evalend = new MessageEmbed()
                .setTitle('Eval Result : ')
                .setDescription('INPUT :\n```js\n' + CODE + '\n```\nOUTPUT :\n```js\n' + inspect(evaled) + '\n```')
                .setColor('#0fe694')
            interaction.reply({ embeds: [evalend] }).catch(e => { interaction.reply('```js\n' + e + '\n```'); });
        }
        catch (error) {
            let evalerr = new MessageEmbed()
                .setTitle('Thre Was An Error : ')
                .setDescription('```js\n' + error + '```')
                .setColor("#FF6347")
            interaction.reply({ embeds: [evalerr] })
        }


    },
};




