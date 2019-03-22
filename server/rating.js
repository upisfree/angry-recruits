const log = require('./log');
const User = require('./user');

function rating(callback) {
  User.find().sort({ score: -1 }).exec((err, users) => {
    if (err) {
      console.error(err);
    } else {
      let html = '<table>';

      for (var i = 0; i < users.length; i++) {
        let u = users[i];

        if (!u.isCheater) {
          html += `
          <tr>
            <td><img src="${ u.photoUrl }" width="32" height="32"></td>
            <td><a href="https://vk.com/id${ u.userId }" target="_blank">${ u.firstName } ${ u.lastName }</a></td>
            <td><b>${ u.score }</b></td>
          </tr>`;
        }
      }

      html += '</table>';

      log(`render rating table with ${ users.length } users`);

      callback(html);
    }
  });
}

module.exports = rating;