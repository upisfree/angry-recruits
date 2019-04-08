const crypto = require('crypto');
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

function score(body, callback) {
  let json;

  try {
    json = JSON.parse(body);
  } catch (e) { }

  if (json &&
      json.userId &&
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

          console.log(`user ${ json.userId } is cheater`);
        }

        User.findOneAndUpdate(
          {
            userId: json.userId
          },
          {
            userId: json.userId,
            firstName: json.firstName,
            lastName: json.lastName,
            photoUrl: json.photoUrl,
            isCheater: json.isCheater,
            hash: json.hash
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

              user.updateScoreAndSave(json.score, (updatedUser) => {
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