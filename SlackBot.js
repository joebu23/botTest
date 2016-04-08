var SlackBot = require('slackbots');
var Wit = require('node-wit');
var Phrases = require('./phrases');
var Sender = require('./sender');

// create the bot
var bot = new SlackBot({
	token: 'xoxb-33229263413-VxiQQNKGnr9zq6PESQNCohbO',
	name: 'good-cop'
});

var params;

bot.on('start', function() {
    params = {
		icon_emoji: ':poop:'
	};
});

bot.on('message', function(data) {
    console.log(data);
	console.log('----------');
           
	if(Sender.should_I_answer(data))
	{
		bot.postMessageToChannel('bot-testing', Phrases.getPhrase(), params);
	}
});
