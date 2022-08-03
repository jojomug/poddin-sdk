 const oauthServer = 'https://www.poddin.io'  
 const config = {
  // Fill in your client ID and client secret that you obtained
  // while registering the application
  // dev.poddin.io
  clientID: '1',
  clientSecret: '',
  clinetRedirectUri: '',

  // Claim authorize code from oauth server
  serverRedirectUri: `${oauthServer}/oauth/authorize`,
  // Claim token from oauth server
  oauthTokenUri: `${oauthServer}/oauth/token`,
  port: 8000
}

module.exports = config
