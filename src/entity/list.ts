import WoodenWall from '../entity/wall/wooden-wall';
import RecruitShell from '../entity/shell/recruit-shell';
import CommissarEnemy from '../entity/enemy/commissar-enemy';

const PlainEntitiesList = [
  WoodenWall,
  RecruitShell,
  CommissarEnemy
];

const KeyedEntitiesList = {};
PlainEntitiesList.forEach(e => KeyedEntitiesList[e.name] = e);



export { PlainEntitiesList, KeyedEntitiesList };