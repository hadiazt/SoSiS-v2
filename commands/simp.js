const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('simp')
        .setDescription('Your Simpnes'),
    async execute(interaction) {
        const { MessageEmbed } = require('discord.js');
        var { simp } = require('../data/links.json')
        var rating = Math.floor(Math.random() * 100) + 1;

        const simpnes = new MessageEmbed()
            .setTitle(`Your Simpnes Is ${rating}/100`)
            .setThumbnail(simp[Math.floor(Math.random() * simp.length)])
            .setColor('#0fe694')

        return interaction.reply({ embeds: [simpnes] });
    },
};