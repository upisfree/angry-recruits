import Entity from '../../entity/entity';
import { KeyedEntitiesList } from '../../entity/entities-list';

export default function(levelData, level): Array<Entity>  {
  let entities: Array<Entity> = [];

  levelData.forEach((e) => {
    let entity = new KeyedEntitiesList[e.type](level, e.x, e.y);

    // потому что SlingshotEntity — это обёртка для того
    // чтобы можно было рогатку выставить в редакторе, а не настоящая сущность
    if (e.type !== 'SlingshotEntity') {
      entity.sprite
        .setScale(e.scaleX, e.scaleY)
        .setRotation(e.rotation);

      entities.push(entity);      
    }
  });

  return entities;
};