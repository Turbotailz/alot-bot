const Discord = require('discord.js');
const latinize = require('latinize');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log('alot is ready and waiting');
});

client.on('message', (msg) => {
	if (latinize(msg.content).toLowerCase().includes('alot') || (latinize(msg.content).toLowerCase().includes('a lot') && msg.author.id == config.knightmanId) || msg.isMentioned(client.user)) {
		try  {
			msg.react(msg.guild.emojis.get(config.alotEmojiId));
			console.log(`Reacted: "${msg.content}" by ${msg.author.username}`);
		} catch (error) {
			console.error('alot failed');
		}
	}
});

client.login(config.token);
