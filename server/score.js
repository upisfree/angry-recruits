const crypto = require('crypto');
const log = require('./log');
const CONFIG = require('./config');
const User = require('./user');

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
    let hashData = CONFIG.VK.APP_ID.toString() + json.userId.toString() + CONFIG.VK.SECRET_KEY;
    let hash = crypto.createHash('md5').update(hashData).digest('hex');

    if (json.hash === hash) {
      if (json.score < CONFIG.MAX_SCORE) {
        json.isCheater = false;
      } else {
        json.isCheater = true;

        console.log('user is cheater');
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
    }
  }
}

module.exports = score;