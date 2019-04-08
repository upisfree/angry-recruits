import CONFIG from '../config';

export default function(game) {
  window['onGoogleSignIn'] = function(user) {
    if (!game.isGameOver) {
      return;
    };

    let userProfile = user.getBasicProfile();

    let xhr = new XMLHttpRequest();

    xhr.open('POST', CONFIG.SCORE_URL, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return;
      }

      alert('Результат сохранён :)');

      console.log(xhr.responseText);
    };

    xhr.send(JSON.stringify({
      userId: userProfile.getId(),
      firstName: userProfile.getGivenName(),
      lastName: userProfile.getFamilyName(),
      photoUrl: userProfile.getImageUrl(),
      hash: user.getAuthResponse().id_token,
      score: game.score
    }));
  }.bind(this);
};