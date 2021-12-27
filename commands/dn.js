const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageAttachment } = require('discord.js')
const ScrapeYt = require("scrape-yt");
const YTDL = require("discord-ytdl-core");
const { createWriteStream } = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dn')
        .setDescription('Download MP3 From YouTube')
        .addStringOption(option =>
            option.setName('link')
                .setDescription('Link Of Video')
                .setRequired(true)
        ),
    async execute(interaction) {


        let videolink = interaction.options.get('link').value

        interaction.reply('UPDATING . . .')

        // if (videolink.startsWith('https')) {
        //     let infos;
        //     let stream;

        //     try {
        //         stream = YTDL(videolink, { encoderArgs: ['-af', 'dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false });
        //         infos = await ScrapeYt.search(videolink);
        //         interaction.reply('Scraping . . .')
        //     } catch (e) {
        //         return interaction.editReply('<a:cross:853953928269660180> | 404 Not Found\nError: ' + e)
        //     }

        //     try {
        //         interaction.reply('<a:load:878160361302401034> | Downloading Video');
        //         stream.pipe(createWriteStream(`./download/${infos[0].id}.mp3`)).on('finish', () => {
        //             try {
        //                 // message.inlineReply(`<a:tick:853953922426470400> | آهنگ درخواستی شما ${infos[0].title} `, new Discord.MessageAttachment(__dirname + `/download/${infos[0].id}.mp3`, `${infos[0].id}.mp3`))
        //                 interaction.editReply(`<a:tick:853953922426470400> | آهنگ درخواستی شما ${infos[0].title} `)
        //             } catch (e) {
        //                 return interaction.editReply('<:erorr:878139495764090880> | Error In Sending File : ' + n);
        //             }

        //         })
        //     } catch (e) {
        //         return interaction.editReply('<a:cross:853953928269660180> | 404 Not Found\nError: ' + e)
        //     }
        // } else {
        //     await interaction.reply('<a:cross:853953928269660180> | Please Enter A YT Video Link');
        // }
        
    }
}


// if (message.content.startsWith(config.PREFIX + "dn")) {

//     let args = message.content.split(' ').slice(1);
  
//     if (!args[0]) return message.inlineReply('<a:cross:853953928269660180> | لطفا لینک یوتیوب را وارد کنید');
//     if (!args[0].startsWith('https://www.youtube.com/watch')) return message.inlineReply('<a:cross:853953928269660180> | لطفا لینک یوتیوب را وارد کنید')
  
//     let infos;
//     let stream;
  
//     try {
//       stream = YTDL(args.join(" "), { encoderArgs: ['-af', 'dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false });
//       infos = await ScrapeYt.search(args.join(" "));
//     } catch (e) {
//       return message.inlineReply('<a:cross:853953928269660180> | چیزی برای لینک وارد شده یافت نشد')
//     }
  
//     try {
//       message.inlineReply('<a:load:878160361302401034> | پس از اتمام دانلود فایل مورد نظر ارسال میشود\nدر نظر داشته باشید فایل موردنظر زیر 8 مگ باشد');
  
//       stream.pipe(createWriteStream(__dirname + `/download/${infos[0].id}.mp3`)).on('finish', () => {
  
//         try {
//           message.inlineReply(`<a:tick:853953922426470400> | آهنگ درخواستی شما ${infos[0].title} `, new Discord.MessageAttachment(__dirname + `/download/${infos[0].id}.mp3`, `${infos[0].id}.mp3`))
//         } catch (e) {
//           return message.inlineReply('<:erorr:878139495764090880> | به دو دلیل ارسال فایل امکان پذیر نیست\n1) حجم فایل بیش از 8 مگابایت است \n2) ربات دسترسی ارسال محتوا را در چنل/سرور ندارد');
//         }
  
//       })
//     } catch (e) {
//       return message.inlineReply('<a:cross:853953928269660180> | چیزی برای لینک وارد شده یافت نشد')
//     }
//     client.channels.cache.get(config.ACTION_LOG).send('```\n' + 'yt dn triggerd in ' + message.guild.name + ' server | by ' + message.author.username + ' | in ' + message.channel.name + '\n```');
//   }