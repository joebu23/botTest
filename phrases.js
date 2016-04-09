module.exports = {
  getPhrase: function () {
	var phrases = [
		"Ain't no jive on that, fella",
		"I heard that!",
		"That's too bad",
		"I have no idea",
		"Awesome",
		":)",
		"You're the best",
		"Sometimes I have to fart really bad",
		"I like candy",
		"I like the Wizard of Oz",
		"What?",
		"Who farted?",
		"That's fantastic",
		"That's quacktastic",
		"Ain't no party like a Scranton party 'cause a Scranton party don't stop",
		"Stop that!",
		"What's shakin?",
		"That's dumb",
		"I'd rather be golfing",
		"Stop talking to me",
		"Oh my!",
		"Incredible!",
		"I doubt it",
		"The future doesn't look too good",
		"I don't know, I guess",
		"you smell bad",
		"I think I'm about to have diarhea",
		"You're a psycho",
		"Well, that's just great"
  ]

  var number = Math.floor((Math.random() * 29) + 1);
  return phrases[number];
  },
  
  getResponse: function(deciphered) {
      if(deciphered.question && deciphered.movie_related) {
          return "movie question";
      } else {
          return "I have no idea what you're talking about";
      }
  }
}
