import { Client, MessageButton, MessageActionRow, MessageEmbed, CommandInteraction } from 'discord.js';
import config from './config';

const client = new Client(config.client);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand() && interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);
		await interaction.reply({ content: 'Pong!', components: [row] });
	}
    if (interaction.isButton()) {
        console.log('test');
    }
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
});

client.login(config.bot.token);
