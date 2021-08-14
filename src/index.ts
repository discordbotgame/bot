import { Client } from 'discord.js';
import config from './config';

const client = new Client(config.client);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'ping') {
        await message.reply('pong!');
    }
});

client.login(config.bot.token);
