const http = require('http');
const mongoose = require('mongoose');
const score = require('./score');
const rating = require('./rating');
const CONFIG = require('./config');
const log = require('./log');

var server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Origin', `https://priziva.net`);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    switch (req.url) {
      case '/score':
        score(body, () => {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('очки сохранились');
        });

        break;

      case '/rating':
        rating((html) => {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(html);
        });

        break;
    }
  });
});

mongoose.connect(
  `mongodb://${ CONFIG.DATABASE.ADDRESS }:${ CONFIG.DATABASE.PORT }/${ CONFIG.DATABASE.NAME }`,
  {},
  (err) => {
    if (err) {
      console.error(err);
    }

    log(`connected to database (${ CONFIG.DATABASE.ADDRESS }:${ CONFIG.DATABASE.PORT }/${ CONFIG.DATABASE.NAME })`);

    server.listen(CONFIG.HTTP_SERVER.PORT);
  }
);

log('server created');