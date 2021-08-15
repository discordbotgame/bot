import { MessageButton, MessageButtonStyleResolvable } from "discord.js";

const createMessageButton = (id: string, label: string, style: MessageButtonStyleResolvable) => {
    return new MessageButton()
        .setCustomId(id)
        .setLabel(label)
        .setStyle(style)
}

export { createMessageButton };