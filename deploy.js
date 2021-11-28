const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./data/config.json');
const chalk = require('chalk')

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log(chalk.red('Started refreshing application (/) commands.'));

		commands.forEach((command) => {
			console.log(chalk.green(command.name +' PUSHED'));
		})

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

		console.log(chalk.red('Successfully reloaded application (/) commands.'));
	} catch (error) {
		console.error(error);
	}
})();