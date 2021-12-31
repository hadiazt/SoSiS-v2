const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jazab')
        .setDescription('Your Attractiveness'),
    async execute(interaction) {
        var rating = Math.floor(Math.random() * 100) + 1;

        const Attractiveness = new MessageEmbed()
            .setTitle(`Your Attractiveness Percentage ${rating}/100`)
            .setColor('#0fe694')

        return interaction.reply({ embeds: [Attractiveness] });
    },
};