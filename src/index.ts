import { Client, MessageButton, MessageActionRow, MessageEmbed, CommandInteraction } from 'discord.js';
import config from './config';
import { createMessageButton, createMessageActionRow } from './builders';

const client = new Client(config.client);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async interaction => {
    const button = createMessageButton('button1', 'deez', 'PRIMARY')
    const row = createMessageActionRow([button]);

    if (interaction.isCommand() && interaction.commandName === 'ping') {
		await interaction.reply({ content: 'Pong!', components: [row] });
	}

    if (interaction.isButton() && interaction.customId === 'button1') {
        interaction.reply({ content: 'Pong!', ephemeral: true, components: [row] }).catch(console.error);
    }
});

client.login(config.bot.token);
