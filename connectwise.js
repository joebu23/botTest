module.exports = {
    setCredentials: function(Credentials, message) {
        var creds = message.split(':')[1];
        Credentials.company = creds.split(",")[0].trim();
        Credentials.public = creds.split(",")[1].trim();
        Credentials.private = creds.split(",")[2].trim();
        
        return Credentials;
    },
  
    checkCredentials: function(Credentials) {
        console.log(Credentials);
    },
    
    getConnectWise: function(deciphered) {
    
    },
    
    postConnectWise: function(deciphered) {
        
    }
}
