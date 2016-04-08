var SlackBot = require('slackbots')
var Phrases = require('./phrases')

// create the bot
var bot = new SlackBot({
	token: 'xoxb-33006979879-CNgRf5icgwZVf8PcKz1GP7Vy',
	name: 'Jim The Bot'
});

bot.on('start', function() {
	var params = {
		icon_emoji: ':dog:'
	};
});

bot.on('message', function(data) {
	if(data.type == "message" && data.username != "Jim The Bot")
	{
		console.log(data);
		console.log('----------');
		bot.postMessageToChannel('family-stuff', Phrases.getPhrase());
	}
});
