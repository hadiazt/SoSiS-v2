const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Information About Us'),
    async execute(interaction, client) {
        const { MessageEmbed } = require('discord.js');
        var hadi = client.users.cache.get('490519932292038659')
        var mani = client.users.cache.get('744431935316688916')

        var about = new MessageEmbed()
            .setTitle('<:sosis_2:914467249157439488> About SoSiS:')
            .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            .setDescription(`
<:space:874678195843125278>*[**SoSiS**](https://discord.gg/CWqTygXz4T) is a fun bot that it coded for __you__ to entertain*
*and have a good time In Discord.*

**SoSiS Team:**
<:space:874678195843125278><:right:874690882417360986> [${hadi.username}](https://github.com/hadiazt/)
<:space:874678195843125278><:right:874690882417360986> [${mani.username}](https://github.com/Mani-Vernix)
`)

        interaction.reply({ embeds: [about] })
    },
};