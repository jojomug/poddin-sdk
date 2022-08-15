const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const axios = require('axios');
const queryString = require('query-string');
const app = new Koa();
const main = serve(path.join(__dirname + '/public'));
const config = require('./config');

app.use(main);

// const callback = async ctx => {
//   const requestToken = ctx.request.query.code;
//   const body = {
//     grant_type: 'authorization_code',
//     client_id: config.clientID,
//     client_secret: config.clientSecret,
//     redirect_uri: config.clinetRedirectUri,
//     code: requestToken,
//   }
//   const tokenResponse = await axios({
//     method: 'post',
//     timeout: 2000000,
//     url: config.oauthTokenUri,
//     data: queryString.stringify(body),
//     headers: {
//       contentType: 'application/x-www-form-urlencoded'
//     }
//   })
//   ctx.redirect(`/token.html?token=${JSON.stringify(tokenResponse.data)}`);
// };

// app.use(route.get('/oauth/callback', callback));

app.listen(config.port, function() {
  console.log(`server start, url: http://localhost:${config.port}`)
});