import { KeyedEntitiesList } from '../../entity/list';

export default function(levelData, level) {
  levelData.forEach((e) => {
    new KeyedEntitiesList[e.type](level, e.x, e.y).sprite
      .setScale(e.scaleX, e.scaleY)
      .setRotation(e.rotation);
  });
};