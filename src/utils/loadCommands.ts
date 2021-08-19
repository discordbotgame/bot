const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
import {signupCommandData} from '../commands';
import config from '../config';

const loadCommands = () => {
    let commands = [];

    commands.push(signupCommandData);

    const rest = new REST({ version: '9' }).setToken(config.bot.token);

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(
                Routes.applicationGuildCommands(config.bot.clientId, config.bot.guildId),
                { body: commands },
            );

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
};

export { loadCommands }
