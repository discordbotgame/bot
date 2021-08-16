import { ClientOptions, Intents } from 'discord.js';

export default {
    bot: {
        token: 'ODc2MTk2NTYwNTc1MjY2ODM4.YRgjog.yV-_O3VTIXpHkrrF66P7BumwZfk',
        id: '876196560575266838'
    },
    client: {
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
    } as ClientOptions
}
