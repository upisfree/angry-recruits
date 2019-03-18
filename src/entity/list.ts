import WoodenWall from '../entity/wall/wooden-wall';
import ConcreteWall from '../entity/wall/concrete-wall';
import RecruitShell from '../entity/shell/recruit-shell';
import CommissarEnemy from '../entity/enemy/commissar-enemy';

const PlainEntitiesList = [
  WoodenWall,
  ConcreteWall,
  RecruitShell,
  CommissarEnemy
];

const KeyedEntitiesList = {};
PlainEntitiesList.forEach(e => KeyedEntitiesList[e.name] = e);



export { PlainEntitiesList, KeyedEntitiesList };