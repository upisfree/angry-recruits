import WoodenWall from '../entity/wall/wooden-wall';
import RecruitShell from '../entity/shell/recruit-shell';
import LawyerShell from '../entity/shell/lawyer-shell';
import GrannieEnemy from '../entity/enemy/grannie-enemy';
import CommissarEnemy from '../entity/enemy/commissar-enemy';

const PlainEntitiesList = [
  WoodenWall,
  RecruitShell,
  // LawyerShell,
  // GrannieEnemy,
  CommissarEnemy
];

const KeyedEntitiesList = {};
PlainEntitiesList.forEach(e => KeyedEntitiesList[e.name] = e);



export { PlainEntitiesList, KeyedEntitiesList };