const log = require('./log');
const User = require('./user');

const htmlBegin = `
<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <title>Рейтинг компьютерной игры «Злой Призывник»</title>

    <link rel="shortcut icon" href="https://priziva.net/game/angry/assets/enemy/commissar-2.png">
    <link href="https://fonts.googleapis.com/css?family=Charm|Press+Start+2P&amp;subset=cyrillic" rel="stylesheet">

    <style>
body {
  color: #fff;
  background: #000;
  font-family: 'Press Start 2P', sans-serif;
  text-align: center;
  margin-top: 6%;
}

h1 {
  letter-spacing: 32pt;
  font-size: 64pt;
}

table {
  text-align: center;
  width: 90%;
  display: inline-table;
  border-collapse: collapse;
}

tr {
  height: 50px;
}

tr:hover {
  background: grey;
  cursor: pointer;
}

td {
  border: none;
  padding: 0;
}

img {
  width: 50px;
  height: 50px;
}

@media only screen and (min-device-width: 320px) 
                   and (max-device-width: 736px) {
  body {
    margin-top: 10%;
  }

  h1 {
    font-size: 20pt;
    letter-spacing: 10pt;
  }

  td {
    font-size: 8pt;
  }
}
    </style>
  </head>

  <body>
    <h1>РЕЙТИНГ</h1>

    <table>
`;

const htmlEnd = `
    </table>
  </body>
</html>
`;

function rating(callback) {
  User.find().sort({ score: -1 }).exec((err, users) => {
    if (err) {
      console.error(err);
    } else {
      let html = htmlBegin;

      for (let i = 0; i < users.length; i++) {
        let u = users[i];

        if (!u.isCheater) {
          html += `
          <tr>
            <td>${ i + 1 }</td>
            <td>${ u.firstName } ${ u.lastName }</td>
            <td><b>${ u.score }</b></td>
          </tr>`;

          // <td><img src="${ u.photoUrl }" width="32" height="32"></td>
        }
      }

      html += htmlEnd;

      log(`render rating table with ${ users.length } users`);

      callback(html);
    }
  });
}

module.exports = rating;