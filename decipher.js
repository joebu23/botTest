module.exports = {
  read: function (message) {
      // read the message and look for certain characteristics
      var response = [];

      response.message = message;
      if(message.toLowerCase().indexOf('cw setting') > -1) { response.connectwise_settings = true; }
      
      if(message.toLowerCase().indexOf('ticket') > -1 || message.toLowerCase().indexOf('connectwise') > -1) { 
          response.connectwise = true;
          if(message.toLowerCase().indexOf('get') > -1) {
              response.connectwise.method = "GET";
          } else if(message.toLowerCase().indexOf('post') > -1) {
              response.connectwise.method = "POST";
          }
      }
      
      return response;
  }
}