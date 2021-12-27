const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { inv } = require('../data/config.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('SoSiS Invite Link'),
    async execute(interaction, client) {

        const invmsg = new MessageEmbed()
            .setTitle('Click The Button To Add SoSiS In To Your Server')
            .setColor('#0fe694')
            .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            
        const linkinv = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('INVITE')
                .setStyle('LINK')
                .setURL(inv),
        )

        await interaction.reply({ embeds: [invmsg], components: [linkinv] })
    }
}