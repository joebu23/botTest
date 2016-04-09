var SlackBot = require('slackbots');
var Phrases = require('./phrases');
var Sender = require('./sender');
var Decipher = require('./decipher');

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
           
	if(Sender.should_I_answer(data)) // to determine if it is a message that should be answered
	{
		bot.postMessageToChannel('bot-testing', Phrases.getResponse(Decipher.read(data.text)), params);
	}
});
