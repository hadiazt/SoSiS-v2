const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('aboutus')
        .setDescription('Information About Us'),
    async execute(interaction) {
        const { MessageEmbed } = require('discord.js');

    },
};