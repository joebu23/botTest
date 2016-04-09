var SlackBot = require('slackbots');
var Client = require('node-rest-client').Client;
var Phrases = require('./phrases');
var Sender = require('./sender');
var Decipher = require('./decipher');
var ConnectWise = require('./connectwise');

var Credentials = [];
Credentials.company = "";
Credentials.public = "";
Credentials.private = "";

// setup the rest client
var client = new Client();
var options;

// create the bot
var bot = new SlackBot({
	token: 'xoxb-33229263413-VxiQQNKGnr9zq6PESQNCohbO',
	name: 'good-cop'
});

var params;
var users = [];

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
        var messageCheck = Decipher.read(data.text);
        if(messageCheck.connectwise_settings) {
            
            var user_credentials = ConnectWise.setCredentials(Credentials, data.text);
            options = {
	        user: user_credentials.company + "+" + user_credentials.public, // basic http auth username if required 
	        password: user_credentials.private // basic http auth password if required 
            };
            users.push(new Array(data.user, user_credentials));
        }
        
        if(messageCheck.connectwise) {
            client.options = options;
            client.get("https://api-na.myconnectwise.net/v4_6_release/apis/3.0/service/tickets/307", function (data, response) {
	            console.log(data);
                bot.postMessageToChannel('bot-testing', data.summary, params);
                });
        }
	}
});
