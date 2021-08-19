import { Client } from 'discord.js';
import config from './config';
import { signupCommand, signupCommandAccept } from './commands';
import { loadCommands } from './utils';

const client = new Client(config.client);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    loadCommands();
});

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand() && interaction.commandName === config.commands.signup.name) {
		signupCommand(interaction)
	}

    if (interaction.isButton() && interaction.customId === config.interactions.buttons.signupAccept.id) {
        signupCommandAccept(interaction);
    }
});

client.on('messageCreate', async message => {
    console.log(message.content);
});

client.login(config.bot.token);
