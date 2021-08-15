import { MessageActionRow, MessageActionRowComponentResolvable } from "discord.js";

const createMessageActionRow = (components: MessageActionRowComponentResolvable[]) => {
    return new MessageActionRow().addComponents(components);
}

export { createMessageActionRow }