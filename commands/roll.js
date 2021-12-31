const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll From 1 To 100'),
	async execute(interaction) {
		var rating = Math.floor(Math.random() * 100) + 1;
		return interaction.reply(String(rating));
	},
};