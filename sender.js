module.exports = {
  should_I_answer: function (data) {
      if(data.type == "message") {
        if(typeof(data.bot_id) != 'undefined') {
            return false;
        } else {
            return true;
        }
      } else {
          return false;
      }
      
  }
}