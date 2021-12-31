const { Client, Intents, MessageEmbed, Collection, Options } = require('discord.js');
const client = new Client({
	makeCache: Options.cacheWithLimits({
		ApplicationCommandManager: Infinity,
		ChannelManager: Infinity,
		GuildManager: Infinity,
		GuildMemberManager: Infinity,
		UserManager: Infinity,
	}),
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const { readdirSync } = require("fs");
const chalk = require('chalk')

const config = require('./data/config.json')
const { Database } = require('beta.db')
const db = new Database('./data/config.json')

client.login(config.token);

// --------------------------------------------
client.commands = new Collection();
const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));
console.log(chalk.red('------------- LOADING COMMANDS -------------'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
	console.log(chalk.blue(command.data.name + ' LOADED'));
}
console.log(chalk.red('-------------- LOADING EVENTS --------------'));
const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
	console.log(chalk.blue(event.name + ' LOADED'));
}
console.log(chalk.red('--------------------------------------------'));
client.on('guildCreate', async guild => {
	let JoinEmbed = new MessageEmbed()
		.setDescription('**<:space:874678195843125278><:right:874690882417360986> A New Guild Has Been Submited**')
		.setAuthor({ name: guild.name, iconURL: guild.iconURL({ dynamic: true }) })
		.setColor('#0fe694')
	client.channels.cache.get(config.BOT_LOG).send({ embeds: [JoinEmbed] });
});
// --------------------------------------------
client.on('guildDelete', async guild => {
	let LeftEmbed = new MessageEmbed()
		.setDescription('**<:space:874678195843125278><:right:874690882417360986> A Guild Has Been Removed **')
		.setAuthor({ name: guild.name, iconURL: guild.iconURL({ dynamic: true }) })
		.setColor('#ff0000')
	client.channels.cache.get(config.BOT_LOG).send({ embeds: [LeftEmbed] });
});
// --------------------------------------------
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, client);
		db.add('USAGE', 1)
		client.channels.cache.get(config.ACTION_LOG).send('```\n' + `${interaction.commandName} Triggerd In ${interaction.guild.name} | ${interaction.channel.name} By ${interaction.user.tag}` + '\n```')
	} catch (error) {
		console.error(error);
        client.channels.cache.get(CONFIG.ERROR).send('```\n' + error + '\n```')
		return interaction.reply({ content: `There was an error while executing this command!\nAsk Developers In : ${config.supportserver}`, ephemeral: true });
	}
});

// --------------------------------------------

process.on('unhandledRejection', err => {

    var errembed = new MessageEmbed()
        .setTitle(':warning: New Error')
        .setColor('YELLOW')
        .addFields(
            { name: ':pushpin: Type: ', value: `\`\`\`${err.name + "".split("", 150).join("") || "N/A"}\`\`\`` },
            {
                name: ':page_with_curl: Reason: ',
                value: `\`\`\`${err.message + "".split("", 150).join("") || "N/A"}\`\`\``
            },
        )
        .setTimestamp()
    client.channels.cache.get(config.ERROR).send({ embeds: [errembed] })
});