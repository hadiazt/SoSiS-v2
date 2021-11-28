const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('love')
        .setDescription('Calculats Your Love To Mentioned User')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Mention The User')
                .setRequired(true)),

    async execute(interaction, client) {
        const { MessageAttachment } = require('discord.js');
        const Canvas = require('canvas');
        Canvas.registerFont('../data/font/OpenSans-ExtraBoldItalic.ttf', { family: 'OpenSans-Regular' })
        const { Database } = require('beta.db')
        const lovedb = new Database('../data/love.json')


        var user = interaction.options.getUser('user')

        if (user.bot === true) return interaction.reply('Bots Are Not Allowed');
        if (user.id === interaction.user.id) return interaction.reply('Please Mention Some One Else');


        if (lovedb.has(interaction.user.id + '.' + user.id)) {

            var lovenum = lovedb.get(interaction.user.id + '.' + user.id)

            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');

            context.font = '30px OpenSans-Regular';
            context.fillStyle = '#ffffff';
            context.fillText(interaction.user.username, 100, 45, 200, 250);
            context.fillText(user.username, 400, 45, 200, 250);


            context.font = '100px OpenSans-Regular';
            context.fillStyle = '#FF00FF';
            if (lovenum === '100') {
                context.fillText(lovenum + '%', canvas.width / 3.3, canvas.height / 1.3);

            } else {
                context.fillText(lovenum + '%', canvas.width / 2.80, canvas.height / 1.3);

            }
            const user1 = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg', size: '2048' }));
            const user2 = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg', size: '2048' }));

            context.drawImage(user1, 0, 60, 200, 250);
            context.drawImage(user2, 500, 60, 200, 250);

            const loveattachment = new MessageAttachment(canvas.toBuffer(), 'love.png');



            interaction.reply({ content: `<@${interaction.user.id}> Loves <@${user.id}> ${lovenum}`, files: [{ attachment: loveattachment }] })
        } else {

            var lovegen = Math.floor(Math.random() * 100) + 1;

            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');

            context.font = '30px OpenSans-Regular';
            context.fillStyle = '#ffffff';
            context.fillText(interaction.user.username, 100, 45, 200, 250);
            context.fillText(user.username, 400, 45, 200, 250);


            context.font = '100px OpenSans-Regular';
            context.fillStyle = '#FF00FF';
            if (lovegen === '100') {
                context.fillText(lovegen + '%', canvas.width / 3.3, canvas.height / 1.3);

            } else {
                context.fillText(lovegen + '%', canvas.width / 2.80, canvas.height / 1.3);

            }
            const user1 = await Canvas.loadImage(interaction.user.displayAvatarURL({ format: 'jpg', size: '2048' }));
            const user2 = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg', size: '2048' }));

            context.drawImage(user1, 0, 60, 200, 250);
            context.drawImage(user2, 500, 60, 200, 250);

            lovedb.set(interaction.user.id + '.' + user.id, lovegen);

            const loveattachment = new MessageAttachment(canvas.toBuffer(), 'love.png');



            interaction.reply({ content: `<@${interaction.user.id}> Loves <@${user.id}> ${lovenum}`, files: [{ attachment: loveattachment }] })
        }

    },
};

