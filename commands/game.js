const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { chistan, TRUTH, DARE } = require('../data/game.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('game')
        .setDescription('Starts An Game')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Type Of Game')
                .setRequired(true)
                .addChoice('Q&A', 'q&a',)
                .addChoice('TRUTH', 'truth')
                .addChoice('DARE', 'dare')),
    async execute(interaction) {


        var type = interaction.options.get('type').value


        if (type === 'q&a') {
            var soalq = chistan[Math.floor(Math.random() * chistan.length)];
            let embed = new MessageEmbed()
                .setTitle(' 🤔 ' + soalq.soal + ' 🤔 ')
                .setColor('#0fe694')
                .setDescription('👇 Click To See Awnser 👇 \n**||' + soalq.javab + '||**')
            interaction.reply({ embeds: [embed] })
        }

        if (type === 'truth') {
            const truth = TRUTH[Math.floor(Math.random() * TRUTH.length)];
            let embed = new MessageEmbed()
                .setTitle(' 🟢 ' + truth + ' 🟢 ')
                .setColor('#0fe694')
            interaction.reply({ embeds: [embed] })
        }

        if (type === 'dare') {
            const dare = DARE[Math.floor(Math.random() * DARE.length)];
            let embed = new MessageEmbed()
                .setTitle(' 🔴 ' + dare + ' 🔴 ')
                .setColor('#0fe694')
            interaction.reply({ embeds: [embed] })
        }

    },
};
