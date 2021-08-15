import { Client, MessageButton, MessageActionRow, MessageEmbed, CommandInteraction } from 'discord.js';
import config from './config';

const client = new Client(config.client);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('interactionCreate', async interaction => {
    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('button1')
                .setLabel('deez')
                .setStyle('PRIMARY'),
        );

    if (interaction.isCommand() && interaction.commandName === 'ping') {
		await interaction.reply({ content: 'Pong!', components: [row] });
	}

    if (interaction.isButton() && interaction.customId === 'button1') {
        interaction.reply({ content: 'Pong!', ephemeral: true, components: [row] }).catch(console.error);
    }
});

client.login(config.bot.token);
