 const oauthServer = 'https://www.poddin.io'  
 const config = {
  // Fill in your client ID and client secret that you obtained
  // while registering the application
  // dev.poddin.io
  clientID: '3',
  clientSecret: 'cswridAHjGKvzXhS1uebM3BtU2Em8DYxFbTqztgz',
  clinetRedirectUri: 'http://demo.poddin.io/oauth/callback',

  // Claim authorize code from oauth server
  serverRedirectUri: `${oauthServer}/oauth/authorize`,
  // Claim token from oauth server
  oauthTokenUri: `${oauthServer}/oauth/token`,
  port: 8003
}

module.exports = config
