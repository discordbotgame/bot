import { Client } from 'discord.js';
import config from './config';
import { signupCommand, signupCommandAccept } from './commands';
import { loadCommands } from './utils';
const fetch = require("node-fetch");

const client = new Client(config.client);

const getItem = async (): Promise<any> => {
    return fetch('http://127.0.0.1:3000/items', {
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
    }).then((response) => response.json())
  }
  

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
    let item = await getItem();
});

client.login(config.bot.token);
