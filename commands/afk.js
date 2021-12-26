const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('afk')
    .setDescription('Set Your Self As AFK')
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('Your Reason')
        .setRequired(true)
    ),
  async execute(interaction) {
    const { Database } = require('beta.db')
    const afkdb = new Database('./data/afk.json')


    var r = interaction.options.get('reason').value;
    
    afkdb.set(interaction.user.id + '.afk', 'true');
    afkdb.set(interaction.user.id + '.messageafk', `${r}`);

    return interaction.reply(`You Are Now AFK In DB\nReason : ${r}`);

  },
};
