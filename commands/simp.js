const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
var { simp } = require('../data/links.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('simp')
        .setDescription('Your Simpnes'),
    async execute(interaction) {
        var rating = Math.floor(Math.random() * 100) + 1;

        const simpnes = new MessageEmbed()
            .setTitle(`Your Simpnes Is ${rating}/100`)
            .setThumbnail(simp[Math.floor(Math.random() * simp.length)])
            .setColor('#0fe694')

        await interaction.reply({ embeds: [simpnes] });
    },
};