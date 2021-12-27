const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const Canvas = require('canvas');
Canvas.registerFont('./data/font/OpenSans-ExtraBoldItalic.ttf', { family: 'OpenSans-Regular' })
const { Database } = require('beta.db')
const lovedb = new Database("./data/love.json")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('love')
        .setDescription('Calculats Your Love To Mentioned User')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Mention The User')
                .setRequired(true)),

    async execute(interaction, client) {



        var user = interaction.options.getUser('user')

        if (user.bot === true) interaction.reply('Bots Are Not Allowed');
        if (user.id === interaction.user.id) interaction.reply('Please Mention Some One Else');




        if (lovedb.has(interaction.user.id + '.' + user.id)) {

            var lovenum = lovedb.get(interaction.user.id + '.' + user.id)

            const canvas = Canvas.createCanvas(792, 448);
            const context = canvas.getContext('2d');

            context.font = '40px OpenSans-Regular';
            context.fillStyle = '#ffffff';
            context.fillText(interaction.user.username, 100, 100, 200, 250);
            context.fillText(user.username, 500, 100, 200, 250);


            context.font = '100px OpenSans-Regular';
            context.fillStyle = '#FF00FF';
            context.fillText(lovenum + '%', canvas.width / 2.80, canvas.height / 1.1);

            context.beginPath();
            context.arc(660, 280, 120, 0, 2 * Math.PI);
            context.arc(130, 280, 120, 0, 2 * Math.PI);
            context.clip();

            const user1 = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg', size: 2048 }));
            const user2 = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg', size: 2048 }));

            context.drawImage(user1, 10, 150, 250, 250);
            context.drawImage(user2, 530, 150, 250, 250);

            const loveattachment = new MessageAttachment(canvas.toBuffer(), 'love.png');

            interaction.reply({ content: `<@${interaction.user.id}> Loves <@${user.id}> ${lovenum}%`, files: [loveattachment] })

        } else {

            var lovegen = Math.floor(Math.random() * 100) + 1;

            const canvas = Canvas.createCanvas(792, 448);
            const context = canvas.getContext('2d');

            context.font = '40px OpenSans-Regular';
            context.fillStyle = '#ffffff';
            context.fillText(interaction.user.username, 100, 100, 200, 250);
            context.fillText(user.username, 500, 100, 200, 250);


            context.font = '100px OpenSans-Regular';
            context.fillStyle = '#FF00FF';
            context.fillText(lovegen + '%', canvas.width / 2.80, canvas.height / 1.1);

            context.beginPath();
            context.arc(660, 280, 120, 0, 2 * Math.PI);
            context.arc(130, 280, 120, 0, 2 * Math.PI);
            context.clip()

            const user1 = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg', size: 2048 }));
            const user2 = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg', size: 2048 }));

            context.drawImage(user1, 10, 150, 250, 250);
            context.drawImage(user2, 530, 150, 250, 250);

            lovedb.set(interaction.user.id + '.' + user.id, lovegen);

            const loveattachment = new MessageAttachment(canvas.toBuffer(), 'love.png');

            interaction.reply({ content: `<@${interaction.user.id}> Loves <@${user.id}> ${lovegen}%`, files: [loveattachment] })

        }

    },
};

