const { SlashCommandBuilder } = require('@discordjs/builders');

const signupCommandData = new SlashCommandBuilder()
	.setName('signup')
	.setDescription('Command for creating an account!')

export { signupCommandData };
