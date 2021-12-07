const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('SoSiS Help Menu'),
    async execute(interaction, client) {
        const { MessageEmbed } = require('discord.js')
        const { PREFIX } = require('../data/config.json')
        const helpmsg = new MessageEmbed()
            .setTitle('SoSiS`s Bot Help Panel :')
            .setColor('#0fe694')
            .setDescription(`
**<:bell_emoji:914129896958205982> General Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/love' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/jazab' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/dn' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/afk' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/simp' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/roll' + '`' + `

**<:gamedie_emoji:914129417087885314> Game Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/game' + '`' + `
__Options :__
` + '`Q&A`' + ` / ` + '`TRUTH`' + ` / ` + '`DARE`' + `

**<:camera_emoji:914130630609080360> Gif/Image Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/gif' + '`' + `
__Options :__
` + '`SLAP`' + ` / ` + '`KISS`' + ` / ` + '`BITE`' + ` / ` + '`KILL`' + ` / ` + '`TICKLE`' + ` 
` + '`LICK`' + ` / ` + '`PUNCH`' + ` / ` + '`PAT`' + ` / ` + '`HUG`' + ` / ` + '`SPANK`' + `

**:crayon: Effect Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/effect' + '`' + `
__Options :__
` + '`BLUR 2 To 5`' + ` / ` + '`BRIGHTNESS 3 To 6`' + ` / ` + '`CIRCLE`' + ` / ` + '`FISHEYE`' + ` / ` + '`FLIP X To Y Or Y To X`' + ` 
` + '`ROTATE 30,60,90,180`' + ` / ` + '`Normalize`' + ` / ` + '`INVERT`' + ` / ` + '`GREYSCALE`' + `

<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/nsfw' + '`' + `
__Options :__
` + '`HENTAI`' + ` / ` + '`NEKO`' + ` / ` + '`LESBIAN`' + ` / ` + '`CUMSLUTS`' + `
` + '`BOOBS`' + ` / ` + '`ANAL`' + ` / ` + '`TITS`' + ` / ` + '`TRAP`' + ` 
` + '`GIRL SOLO`' + ` / ` + '`FEET`' + ` / ` + '`EROFEET`' + ` / ` + '`FEETGIF`' + ` / ` + '`BLOWJOB`' + `

<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/profile' + '`' + ` 
__Options :__
` + '`BOY`' + ` / ` + '`Girl`' + ` / ` + '`E-BOY`' + `/` + '`E-GIRL`' + ` / ` + '`COUPLE`' + `
` + '`LANDSCAPE`' + ` / ` + '`ANIME`' + ` / ` + '`ANIMAL`' + ` / ` + '`RANDOM`' + `

**<:information_emoji:914129757195620402> Other Help :**
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/about' + '`' + `
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/support' + '`' + ` 
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/invite' + '`' + ` 
<:space:874678195843125278><:right:874690882417360986>`+ '`' + '/stats' + '`' + ` 
`)

        return interaction.reply({ embeds: [helpmsg] });
    },
};