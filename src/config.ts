import { ClientOptions, Intents } from 'discord.js';

export default {
    bot: {
        token: "ODc2MTk2NTYwNTc1MjY2ODM4.YRgjog._RLl57clWpD9reyr6zIxtMnBqjs",
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
