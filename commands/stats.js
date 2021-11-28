const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Bot Stats'),
    async execute(interaction, client) {

        const { MessageEmbed } = require('discord.js')
        const { VER } = require('../data/config.json')
        var MemberCount = 0;
        client.guilds.cache.forEach(Member => {
            MemberCount += Member.memberCount
        })

        const supportmsg = new MessageEmbed()
            .setTitle('Bot Stats')
            .setColor('#0fe694')
            .setDescription(`
<:servers:875071118107619339> Guild Count : `+ '`' + client.guilds.cache.size + '`' + `

<:users:875070999660490812> Members Count : `+ '`' + MemberCount + '`' + `

<:channels:875071030908055633> Channels Count : `+ '`' + client.channels.cache.size + '`' + `

<:status:875071081088704543> Status : `+ '`' + client.user.presence.status + '`' + `

<:ping:875071055520231485> Ping : `+ '`' + Math.round(client.ws.ping) + ' ms`' + `

<:version:875070975560003595> Version : `+ '`' + VER + '`'+`
`)

        return interaction.reply({ embeds: [supportmsg] })
    }
}