const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('effect')
        .setDescription('Set Effect To Image')
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Type Of Effect')
                .setRequired(true)
                .addChoice('BLUR 2', 'blur2')
                .addChoice('BLUR 3', 'blur3')
                .addChoice('BLUR 4', 'blur4')
                .addChoice('BLUR 5', 'blur5')
                .addChoice('BRIGHTNESS 3', 'brightness3')
                .addChoice('BRIGHTNESS 4', 'brightness4')
                .addChoice('BRIGHTNESS 5', 'brightness5')
                .addChoice('BRIGHTNESS 6', 'brightness6')
                .addChoice('CIRCLE', 'circle')
                .addChoice('FISHEYE', 'fisheye')
                .addChoice('FLIP', 'flipx')
                .addChoice('GREYSCALE', 'greyscale')
                .addChoice('INVERT', 'invert')
                .addChoice('Normalize', 'normalize')
                .addChoice('ROTATE 30', 'rotate30')
                .addChoice('ROTATE 60', 'rotate60')
                .addChoice('ROTATE 90', 'rotate90')
                .addChoice('ROTATE 180', 'rotate180')
        )
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Mention The User')
                .setRequired(true)
        ),

    async execute(interaction) {
        const { MessageEmbed } = require('discord.js');
        const effect = require('effects-image.js');

        var type = interaction.options.get('type').value

        var user = interaction.options.getUser('user').displayAvatarURL({ format: 'png', size: 2048 })


        if (type === 'blur2') {
            new effect.Blur()
                .setImage(user)
                .setLevel(2)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BLUR 2`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'blur3') {
            new effect.Blur()
                .setImage(user)
                .setLevel(3)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BLUR 3`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'blur4') {
            new effect.Blur()
                .setImage(user)
                .setLevel(4)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BLUR 4`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'blur5') {
            new effect.Blur()
                .setImage(user)
                .setLevel(5)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BLUR 5`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'brightness3') {
            new effect.Brightness()
                .setImage(user)
                .setBrightness(3)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BRIGHTNESS 3`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'brightness4') {
            new effect.Brightness()
                .setImage(user)
                .setBrightness(4)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BRIGHTNESS 4`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'brightness5') {
            new effect.Brightness()
                .setImage(user)
                .setBrightness(5)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BRIGHTNESS 5`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'brightness6') {
            new effect.Brightness()
                .setImage(user)
                .setBrightness(6)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`BRIGHTNESS 6`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'circle') {
            new effect.Circle()
                .setImage(user)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`CIRCLE`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'fisheye') {
            new effect.Fisheye()
                .setImage(user)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`FISHEYE`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'flipx') {
            new effect.Flip()
                .setImage(user)
                .setFlipOption(true, false)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`FLIP X To Y`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'greyscale') {
            new effect.Greyscale()
                .setImage(user)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`GREYSCALE`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'invert') {
            new effect.Invert()
                .setImage(user)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`INVERT`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'normalize') {
            new effect.Normalize()
                .setImage(user)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`NORMALIZE`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'rotate30') {
            new effect.Rotate()
                .setImage(user)
                .setRotate(30)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`ROTATE 30`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'rotate60') {
            new effect.Rotate()
                .setImage(user)
                .setRotate(60)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`ROTATE 60`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'rotate90') {
            new effect.Rotate()
                .setImage(user)
                .setRotate(90)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`ROTATE 90`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }
        if (type === 'rotate180') {
            new effect.Rotate()
                .setImage(user)
                .setRotate(180)
                .build().then(res => {
                    interaction.reply({
                        content: '**Here is Your Request : **\n**:crayon: Effect Type:**\n<:space:874678195843125278><:right:874690882417360986>`ROTATE 180`\n*Wanna Find More ? Visit __[EFFETCS-IMAGE.JS](https://www.npmjs.com/package/effects-image.js)__*', files: [
                            { attachment: res }
                        ]
                    })
                })
        }

    },
};
