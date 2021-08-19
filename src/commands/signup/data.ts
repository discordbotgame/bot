const { SlashCommandBuilder } = require('@discordjs/builders');
import config from '../../config';

const signupCommandData = new SlashCommandBuilder()
	.setName(config.commands.signup.name)
	.setDescription('Command for creating an account!')

export { signupCommandData };
