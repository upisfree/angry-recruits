const crypto = require('crypto');
const sanitize = require('mongo-sanitize');
const sanitizeHtml = require('sanitize-html');
const log = require('./log');
const CONFIG = require('./config');
const User = require('./user');
const { OAuth2Client } = require('google-auth-library');
const oAuthClient = new OAuth2Client(CONFIG.GOOGLE.APP_ID);

async function verifyToken(hash) {
  const ticket = await oAuthClient.verifyIdToken({
    idToken: hash,
    audience: CONFIG.GOOGLE.APP_ID 
  });

  const payload = ticket.getPayload();
  const userId = payload['sub'];
}

function removeHtml(str) {
  return sanitizeHtml(str, {
    allowedTags: [],
    allowedAttributes: {}
  });
}

function score(body, callback) {
  let json;

  try {
    json = JSON.parse(body);
  } catch (e) { }

  if (json &&
      json.userId &&
      json.email &&
      json.firstName &&
      json.lastName &&
      json.photoUrl &&
      json.hash &&
      json.score) {
    verifyToken(json.hash)
      .then(() => {
        if (json.score < CONFIG.MAX_SCORE) {
          json.isCheater = false;
        } else {
          json.isCheater = true;

          console.log(`user ${ sanitize(json.userId) } is cheater`);
        }

        User.findOneAndUpdate(
          {
            userId: sanitize(json.userId)
          },
          {
            userId: removeHtml(sanitize(json.userId)),
            email: removeHtml(sanitize(json.email)).substring(0, 256),
            firstName: removeHtml(sanitize(json.firstName)).substring(0, 256),
            lastName: removeHtml(sanitize(json.lastName)).substring(0, 256),
            photoUrl: removeHtml(sanitize(json.photoUrl)).substring(0, 2048),
            isCheater: json.isCheater,
            hash: removeHtml(sanitize(json.hash))
          },
          {
            new: true,
            upsert: true
          },
          (err1, user) => {
            if (!err1) {
              // если юзера нет, создаём
              if (!user) {
                user = new User(json);
              }

              user.updateScoreAndSave(sanitize(json.score), (updatedUser) => {
                callback(updatedUser);
              });
            }
          }
        );
      })
      .catch((authErr) => {
        console.log(authErr);
      });
  }
}

module.exports = score;