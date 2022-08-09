 const oauthServer = 'https://www.poddin.io'  
 const config = {
  // Fill in your client ID and client secret that you obtained
  // while registering the application
  // dev.poddin.io
  clientID: '2',
  clientSecret: 'Ku9XBz3OncnmPAh3miC3Vu32P4xY3B5OEkIjY2al',
  clinetRedirectUri: 'http://localhost:8000/oauth/callback',

  // Claim authorize code from oauth server
  serverRedirectUri: `${oauthServer}/oauth/authorize`,
  // Claim token from oauth server
  oauthTokenUri: `${oauthServer}/oauth/token`,
  port: 8003
}

module.exports = config
