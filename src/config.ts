import { ClientOptions, Intents } from 'discord.js';

export default {
    bot: {
        token: process.env.DISCORD_TOKEN,
        clientId: '876196560575266838',
        guildId: '876195973959913542'
    },
    client: {
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
    } as ClientOptions,
    commands: {
        signup: { name: 'signup' }
    },
    interactions: {
        buttons: {
            signupAccept: { id: 'signupAccept' }
        }
    }
    
}
