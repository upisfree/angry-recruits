import CommissarEnemy from '../entity/enemy/commissar-enemy';
import ExplosionShell from '../entity/shell/explosion-shell';
import FatShell from '../entity/shell/fat-shell';
import RecruitShell from '../entity/shell/recruit-shell';
import ConcreteWall from '../entity/wall/concrete-wall';
import SolidConcreteWall from '../entity/wall/solid-concrete-wall';
import WoodenWall from '../entity/wall/wooden-wall';
import { SlingshotEntity } from '../entity/slingshot';

const PlainEntitiesList = [
  SlingshotEntity,
  WoodenWall,
  ConcreteWall,
  SolidConcreteWall,
  RecruitShell,
  FatShell,
  ExplosionShell,
  CommissarEnemy
];

const KeyedEntitiesList = {};
PlainEntitiesList.forEach(e => KeyedEntitiesList[e.name] = e);

export { PlainEntitiesList, KeyedEntitiesList };
