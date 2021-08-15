import { ClientOptions, Intents } from 'discord.js';

export default {
    bot: {
        token: process.env.DISCORD_TOKEN,
    },
    client: {
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
    } as ClientOptions
}
