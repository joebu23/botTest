module.exports = {
  read: function (message) {
      // read the message and look for certain characteristics
      var response = [];

      
      if(message.indexOf('?') > -1) { response.question = true; }
      if(message.indexOf('movie') > -1) { response.movie_related = true; }
      
      return response;
  }
}