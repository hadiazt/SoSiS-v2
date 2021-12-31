const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const pic = require('random-pic.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Sends a random Profiles')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Type Of Profile')
                .setRequired(true)
                .addChoice('BOY', 'boy',)
                .addChoice('GIRL', 'girl')
                .addChoice('E-GIRL', 'e_girl')
                .addChoice('E-BOY', 'e_boy')
                .addChoice('COUPLE', 'couple')
                .addChoice('LANDSCAPE', 'landscape')
                .addChoice('ANIME', 'anime')
                .addChoice('ANIMAL', 'animal')
                .addChoice('RANDOM', 'random')),
    async execute(interaction) {

        var type = interaction.options.get('type').value

        if (type === 'boy') {
            pic.boy().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`BOY`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'girl') {
            pic.girl().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`GIRL`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'e_boy') {
            pic.eboy().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`E-BOY`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'e_girl') {
            pic.egirl().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`E-GIRL`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'couple') {
            pic.couple().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`COUPLE`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'landscape') {
            pic.landscape().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`LANDSCAPE`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'anime') {
            pic.anime().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`ANIME`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'animal') {
            pic.animal().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`ANIMAL`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

        if (type === 'random') {
            pic.random().then( async (response) => {
                var profilemsg = new MessageEmbed()
                    .setTitle('Here is Your Request')
                    .setDescription("**<:camera_emoji:914130630609080360> Profile Type:**\n<:space:874678195843125278><:right:874690882417360986>`RANDOM`\n*Wanna Find More ? Visit __[RP.JS](https://random-picjs.herokuapp.com/)__*")
                    .setImage(response)
                    .setColor('#0fe694')
                return interaction.reply({ embeds: [profilemsg] });
            })
        }

    },
};