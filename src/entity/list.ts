import WoodenWall from '../entity/wall/wooden-wall';
import ConcreteWall from '../entity/wall/concrete-wall';
import RecruitShell from '../entity/shell/recruit-shell';
import FatShell from '../entity/shell/fat-shell';
import ExplosionShell from '../entity/shell/explosion-shell';
import CommissarEnemy from '../entity/enemy/commissar-enemy';
import { SlingshotEntity } from '../entity/slingshot';

const PlainEntitiesList = [
  SlingshotEntity,
  WoodenWall,
  ConcreteWall,
  RecruitShell,
  FatShell,
  ExplosionShell,
  CommissarEnemy
];

const KeyedEntitiesList = {};
PlainEntitiesList.forEach(e => KeyedEntitiesList[e.name] = e);



export { PlainEntitiesList, KeyedEntitiesList };