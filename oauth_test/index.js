const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const axios = require('axios');
const queryString = require('query-string');
const app = new Koa();
const main = serve(path.join(__dirname + '/public'));
const config = require('./config');

const redirect = async ctx => {
  const query = {
    'client_id' : config.clientID,
    'redirect_uri': config.clinetRedirectUri,
    'response_type' : 'code',
    'scope' : '',
  }

  const querystr = queryString.stringify(query);
  ctx.redirect(config.serverRedirectUri + '?' + querystr);
};


const callback = async ctx => {
  const requestToken = ctx.request.query.code;
  const body = {
    grant_type: 'authorization_code',
    client_id: config.clientID,
    client_secret: config.clientSecret,
    redirect_uri: config.clinetRedirectUri,
    code: requestToken,
  }
  const tokenResponse = await axios({
    method: 'post',
    timeout: 2000000,
    url: config.oauthTokenUri,
    data: queryString.stringify(body),
    headers: {
      contentType: 'application/x-www-form-urlencoded'
    }
  })
  ctx.redirect(`/token.html?token=${JSON.stringify(tokenResponse.data)}`);
};

app.use(main);
app.use(route.get('/oauth/callback', callback));
app.use(route.get('/oauth/redirect', redirect));
app.use(route.get('/oauth/refreshToken', async ctx => {
  const body = {
    grant_type: 'refresh_token',
    client_id: config.clientID,
    client_secret: config.clientSecret,
    refresh_token: app.token.refresh_token,
  }
  const tokenResponse = await axios({
    method: 'post',
    timeout: 2000000,
    url: config.oauthTokenUri,
    data: queryString.stringify(body),
    headers: {
      contentType: 'application/x-www-form-urlencoded'
    }
  }).catch(e => {
    console.error(e)
  })
  app.token = tokenResponse.data;
  ctx.body = tokenResponse.data;
}))

app.listen(config.port, function() {
  console.log(`server start, url: http://localhost:${config.port}`)
});