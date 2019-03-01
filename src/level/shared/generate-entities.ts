import { KeyedEntitiesList } from '../../entity/list';

export default function(levelData, level) {
  levelData.forEach((e) => {
    new KeyedEntitiesList[e.type](level, e.x, e.y).sprite
      .setRotation(e.rotation)
      .setScale(e.scaleX, e.scaleY);
  });
};