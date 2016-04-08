module.exports = {
  should_I_answer: function (data) {
      if(data.type == "message" && typeof(data.bot_id) == 'undefined' && data.subtype != 'me_message') {
          return true;
      }
  }
}