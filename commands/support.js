const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { supportserver } = require('../data/config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Bot Support Server'),
    async execute(interaction, client) {

        const supportmsg = new MessageEmbed()
            .setTitle('Click The Button To Join Support Server')
            .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            .setColor('#0fe694')

        const link = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('SUPPORT')
                .setStyle('LINK')
                .setURL(supportserver),
        )

        await interaction.reply({ embeds: [supportmsg], components: [link] })
    }
}