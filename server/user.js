var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  userId: {
    type: Number,
    unique: true
  },
  email: String,
  firstName: String,
  lastName: String,
  photoUrl: String,
  hash: String,
  score: Number,
  isCheater: Boolean,
  // actions: Object
});

userSchema.methods.updateScoreAndSave = function(newScore, callback) {
  if (!this.score || this.score < newScore) {
    this.score = newScore;
  }

  this.save((err, user) => {
    if (err) {
      console.error(err);
    } else {
      callback(user);
    }
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;