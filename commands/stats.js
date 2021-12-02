const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Bot Stats'),
    async execute(interaction, client) {

        const { MessageEmbed } = require('discord.js')
        const { VER, USAGE } = require('../data/config.json')
        var MemberCount = 0;
        client.guilds.cache.forEach(Member => {
            MemberCount += Member.memberCount
        })

        const supportmsg = new MessageEmbed()
            .setTitle('Bot Stats')
            .setColor('#0fe694')
            .setDescription(`
<:space:874678195843125278><:airplane_emoji:914500272087236628> *Guilds Count : `+ '`' + client.guilds.cache.size + '`' + `*

<:space:874678195843125278><:bustsinsilhouette_emoji:914504068020437012> *Members Count : `+ '`' + MemberCount + '`' + `*

<:space:874678195843125278><:keycapnumbersign_emoji:914500272422789161> *Channels Count : `+ '`' + client.channels.cache.size + '`' + `*

<:space:874678195843125278><:counter_emoji:915916802855407656> *Commands Usage : `+ '`' + USAGE + '`' + `*

<:space:874678195843125278><:horizontaltrafficlight_emoji:914504404818874389> *Status : `+ '`' + client.user.presence.status + '`' + `*

<:space:874678195843125278><:antennabars_emoji:914500272255025193> *Ping : `+ '`' + Math.round(client.ws.ping) + 'ms`' + `*

<:space:874678195843125278><:triangularflag_emoji:914500272779296789>*Version :  `+ '`' + VER + '`' + `*
`)

        return interaction.reply({ embeds: [supportmsg] })
    }
}