const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Information About Us'),
    async execute(interaction, client) {

        var about = new MessageEmbed()
            .setTitle('<:sosis_2:914467249157439488> About SoSiS:')
            .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            .setDescription(`
<:space:874678195843125278>*[**SoSiS**](https://discord.gg/CWqTygXz4T) is a fun bot that it coded for __you__ to entertain*
*and have a good time In Discord.*

**SoSiS Team:**
<:space:874678195843125278><:right:874690882417360986> [零 hadi ZΞЯØ](https://github.com/hadiazt/)
<:space:874678195843125278><:right:874690882417360986> [◣ vernix ZΞTA](https://github.com/Mani-Vernix)
`)

        return interaction.reply({ embeds: [about] })
    },
};