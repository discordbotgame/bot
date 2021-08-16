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
    if (interaction.isCommand() && interaction.commandName === 'signup') {
		signupCommand(interaction)
	}

    if (interaction.isButton() && interaction.customId === 'signupCommand') {
        signupCommandAccept(interaction);
    }
});

client.login(config.bot.token);
