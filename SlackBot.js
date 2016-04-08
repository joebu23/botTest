var SlackBot = require('slackbots')
var Phrases = require('./phrases')

// create the bot
var bot = new SlackBot({
<<<<<<< HEAD
	token: '',
	name: 'Family-Bot'
=======
	token: '',
	name: 'Jim The Bot'
>>>>>>> 0730e8ebfb804b4610824beac807b47d1298cd50
});

bot.on('start', function() {
	var params = {
		icon_emoji: ':poop:'
	};
});

bot.on('message', function(data) {
	if(data.type == "message" && data.username != "Family-Bot")
	{
		if(data.text.split(':')[0] == "<@U0Z0^UTRV>")
		{
			bot.postMessageToChannel('family-stuff', "You never talk right to me", params);
		}
		console.log(data);
		console.log('----------');
		bot.postMessageToChannel('family-stuff', Phrases.getPhrase(), params);
	}
});
