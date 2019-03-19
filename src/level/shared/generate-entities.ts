import Entity from '../../entity/entity';
import { KeyedEntitiesList } from '../../entity/list';

export default function(levelData, level): Array<Entity>  {
  let entities: Array<Entity> = [];

  levelData.forEach((e) => {
    let entity = new KeyedEntitiesList[e.type](level, e.x, e.y).sprite
      .setScale(e.scaleX, e.scaleY)
      .setRotation(e.rotation);

    entities.push(entity);
  });

  return entities;
};