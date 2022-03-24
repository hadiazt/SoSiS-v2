const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const { SRC } = require('../data/config.json')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('Information About Us'),

    async execute(interaction, client) {

        const SRCBTN = new MessageActionRow().addComponents(
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
<:space:874678195843125278><:right:874690882417360986> [Hadi.Az](https://github.com/hadiazt/)
<:space:874678195843125278><:right:874690882417360986> [im-vernix](https://github.com/Mani-Vernix)

Open Source LICENSE : [MIT](https://github.com/hadiazt/SoSiS-v2/blob/main/LICENSE)

‌By using the bot you are accepting our [Terms of Service](https://github.com/hadiazt/SoSiS-v2/blob/main/extra/Terms%20of%20Service.md) and [Privacy Policy](https://github.com/hadiazt/SoSiS-v2/blob/main/extra/Privacy%20Policy.md)

`)

        return interaction.reply({ embeds: [about], components: [SRCBTN] })
    },
};
