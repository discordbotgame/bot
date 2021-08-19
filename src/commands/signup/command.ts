import { ButtonInteraction, CommandInteraction } from 'discord.js';
import { createMessageButton, createMessageActionRow } from '../../builders';
import config from '../../config';

const signupCommand = (interaction: CommandInteraction) => {
    const button = createMessageButton(config.interactions.buttons.signupAccept.id, 'accept', 'PRIMARY')
    const row = createMessageActionRow([button]);
    interaction.reply({ content: 'Create an account', ephemeral: true, components: [row] }).catch(console.error);
}

const signupCommandAccept = (interaction: ButtonInteraction) => {
    const button = createMessageButton('signupCommandAccept', 'epic', 'PRIMARY')
    const row = createMessageActionRow([button]);
    interaction.reply({ content: 'Pong!', ephemeral: true, components: [row] }).catch(console.error);
}

export { signupCommand, signupCommandAccept }
