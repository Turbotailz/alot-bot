// Load dependencies
const Discord = require('discord.js');
const latinize = require('latinize');

// Load config
const config = require('./config.json');

// Create alot bot
const client = new Discord.Client();

// Log to console when alot bot is ready
client.on('ready', () => {
	console.log('alot is ready and waiting');

	client.user.setActivity('your grammar', {type: 'WATCHING'});
});

client.on('message', (msg) => {
	// Check messages for certain ways "alot" is said
	if (
		(
		// latinize makes sure any diacritics are converted to regular latin characters
		latinize(msg.content).toLowerCase().includes('alot')
		// Knightman can't escape the bot
		|| (latinize(msg.content).toLowerCase().includes('a lot') && msg.author.id == config.knightmanId)
		// alot is self-aware (because otherwise it won't react to mention of its own name, stupid alot)
		|| msg.isMentioned(client.user)
		// don't forget the elusive capital I trick
		|| latinize(msg.content).toLowerCase().includes('aiot')
		// zeros look like O
		|| latinize(msg.content).toLowerCase().includes('al0t')
		// and just in case they get sneaky
		|| latinize(msg.content).toLowerCase().includes('ai0t')
		// regional indicators as well
		|| msg.content.includes('🇦 🇱 🇴 🇹')
		)
		// check if the channel is not in the list of ignored channels
		&& !config.ignoredChannels.includes(msg.channel.id.toString())
	) {
		// add the reaction
		msg.react(msg.guild.emojis.get(config.alotEmojiId))
		.then(() => {
			// log it to the console
			console.log(`Reacted: "${msg.content}" by ${msg.author.username}`);
		})
		.catch(console.error);
	}

	if (msg.content.toLowerCase() === 'good bot') {
		msg.channel.send('Thank you.')
		.then()
		.catch(console.error);
	}
});

// login boi
client.login(config.token);
