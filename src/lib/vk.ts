import CONFIG from '../config';

var VK = window['VK'];

export interface IUser {
  uid: number;
  first_name: string;
  last_name: string;
  photo: string;
  photo_rec: string;
  hash: string;
}

export function initVKWidget(scene) {
  VK.Widgets.Auth(CONFIG.VK_AUTH_DIV_ID, {
    onAuth: (user: IUser) => {
      let xhr = new XMLHttpRequest();

      xhr.open('POST', CONFIG.SCORE_URL, true);
      xhr.onreadystatechange = () => {
        alert('Результат сохранён :)');

        console.log(xhr.responseText);
      };

      xhr.send(JSON.stringify({
        userId: user.uid,
        firstName: user.first_name,
        lastName: user.last_name,
        photoUrl: user.photo_rec,
        hash: user.hash,
        score: scene.game.score
      }));
    }
  });
}

export default VK;