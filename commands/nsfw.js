const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const gif = require('nekos.life');
const nekos = new gif();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nsfw')
        .setDescription('Sends a random NSFW Content')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Type Of NSFW Content')
                .setRequired(true)
                .addChoice('HENTAI', 'hentai',)
                .addChoice('NEKO', 'neko')
                .addChoice('LESBIAN', 'les')
                .addChoice('CUMSLUTS', 'cum')
                .addChoice('BOOBS', 'boobs')
                .addChoice('ANAL', 'anal')
                .addChoice('TITS', 'tits')
                .addChoice('TRAP', 'trap')
                .addChoice('GIRL SOLO', 'gs')
                .addChoice('FEET', 'feet')
                .addChoice('EROFEET', 'erofeet')
                .addChoice('FEETGIF', 'feetgif')
                .addChoice('BLOWJOB', 'blowjob')),

    async execute(interaction) {


        var type = interaction.options.get('type').value

        if (interaction.channel.nsfw === true) {

            if (type === 'hentai') {
                async function hentai() {
                    var x = await nekos.nsfw.hentai()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`HENTAI`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                hentai()
            }

            if (type === 'neko') {
                async function neko() {
                    var x = await nekos.nsfw.neko()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`NEKO`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                neko()
            }

            if (type === 'les') {
                async function lesbian() {
                    var x = await nekos.nsfw.lesbian()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`LESBIAN`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                lesbian()
            }

            if (type === 'cum') {
                async function cumsluts() {
                    var x = await nekos.nsfw.cumsluts()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`BOOBS`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                cumsluts()
            }

            if (type === 'boobs') {
                async function boobs() {
                    var x = await nekos.nsfw.boobs()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`ANAL`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                boobs()
            }

            if (type === 'anal') {
                async function anal() {
                    var x = await nekos.nsfw.anal()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`TITS`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                anal()
            }

            if (type === 'tits') {
                async function tits() {
                    var x = await nekos.nsfw.tits()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`TRAP`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                tits()
            }

            if (type === 'trap') {
                async function trap() {
                    var x = await nekos.nsfw.trap()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`GIRL SOLO`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                trap()
            }

            if (type === 'gs') {
                async function girlSolo() {
                    var x = await nekos.nsfw.girlSolo()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`FEET`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                girlSolo()
            }

            if (type === 'feet') {
                async function feet() {
                    var x = await nekos.nsfw.feet()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`EROFEET`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                feet()
            }

            if (type === 'erofeet') {
                async function eroFeet() {
                    var x = await nekos.nsfw.eroFeet()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`FEETGIF`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                eroFeet()
            }

            if (type === 'feetgif') {
                async function feetGif() {
                    var x = await nekos.nsfw.feetGif()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`HENTAI`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                feetGif()
            }

            if (type === 'blowjob') {
                async function blowJob() {
                    var x = await nekos.nsfw.blowJob()

                    var nsfwmsg = new MessageEmbed()
                        .setTitle('Here is Your Request')
                        .setDescription("**<:nooneundereighteen_emoji:914443920547643413> Nsfw Type:**\n<:space:874678195843125278><:right:874690882417360986>`BLOWJOB`")
                        .setColor('#0fe694')
                        .setImage(x.url)
                    interaction.reply({ embeds: [nsfwmsg] });
                }
                blowJob()
            }


        } else {
            interaction.reply('This Command Works Only In **NSFW** Channels');
        }

    },
};