import CONFIG from '../../config';
import { default as VK, IUser } from '../../lib/vk';

export default function(scene) {
  VK.Widgets.Auth(CONFIG.VK_AUTH_DIV_ID, {
    onAuth: (user: IUser) => {
      console.log(user);

      let xhr = new XMLHttpRequest();

      xhr.open('POST', CONFIG.SCORE_URL, true);
      xhr.onreadystatechange = () => {
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