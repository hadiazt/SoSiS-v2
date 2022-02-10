const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { SRC } = require('../data/config.json')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Information About Us'),

    async execute(interaction, client) {

        const SRC = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel('SOURCE')
                .setStyle('LINK')
                .setURL(SRC),
        )

        var about = new MessageEmbed()
            .setTitle('<:sosis_2:914467249157439488> About SoSiS:')
            .setThumbnail(client.user.displayAvatarURL({ size: 2048 }))
            .setDescription(`
<:space:874678195843125278>*[**SoSiS**](https://discord.gg/CWqTygXz4T) is a fun bot that it coded for __you__ to entertain*
*and have a good time In Discord.*

**SoSiS Team:**
<:space:874678195843125278><:right:874690882417360986> [零 hadi ZΞЯØ](https://github.com/hadiazt/)
<:space:874678195843125278><:right:874690882417360986> [VГΠIЖ#9993](https://github.com/Mani-Vernix)

Open Source LICENSE : [MIT] (https://github.com/hadiazt/SoSiS-v2/blob/main/LICENSE)
`)

        return interaction.reply({ embeds: [about], components: [SRC] })
    },
};