const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const rga = require("random-gif-api")
const gif = require('nekos.life');
const nekos = new gif();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Starts An Gif')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Type Of Gif')
                .setRequired(true)
                .addChoice('SLAP', 'slap',)
                .addChoice('KISS', 'kiss')
                .addChoice('BITE', 'bite')
                .addChoice('KILL', 'kill')
                .addChoice('TICKLE', 'tickle')
                .addChoice('LICK', 'lick')
                .addChoice('PUNCH', 'punch')
                .addChoice('PAT', 'pat')
                .addChoice('HUG', 'hug')
                .addChoice('SPANK', 'spank')
        )
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Mention The User')
                .setRequired(true)
        ),

    async execute(interaction, client) {

        var type = interaction.options.get('type').value

        var user = interaction.options.getUser('user')

        if (user.bot === true) interaction.reply('Bots Are Not Allowed');
        if (user.id === interaction.user.id) interaction.reply('Please Mention Some One Else');

        if (type === 'slap') {
            async function slapgwork() {
                let slapg = await nekos.sfw.slap();
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Slapped ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(slapg.url)
                interaction.reply({ embeds: [embed] });
            }
            slapgwork();
        }

        if (type === 'kiss') {
            async function kisswork() {
                let slapg = await nekos.sfw.kiss();
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Kissed ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(slapg.url)
                interaction.reply({ embeds: [embed] });
            }
            kisswork();
        }

        if (type === 'bite') {
            rga.bite().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Bitted ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'kill') {
            rga.kill().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Killed ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'tickle') {
            rga.tickle().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Tickled ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'lick') {
            rga.lick().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Licked ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'punch') {
            rga.punch().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Punched ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'pat') {
            rga.pat().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Patted ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'hug') {
            rga.cuddle().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Huged ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

        if (type === 'spank') {
            rga.spank().then((data) => {
                var embed = new MessageEmbed()
                    .setTitle(`${interaction.user.tag} Spanked ${user.tag}`)
                    .setColor('#0fe694')
                    .setImage(data)
                interaction.reply({ embeds: [embed] });
            })
        }

    },
};
