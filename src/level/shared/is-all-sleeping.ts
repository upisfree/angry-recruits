export default function(shells, enemies, slingshot) {
  // текущий снаряд подвешен и не может уснуть :(
  let isShellsSleeping  = shells.every(e => e.body.isSleeping || e === slingshot.currentShell);
  let isEnemiesSleeping = enemies.every(e => e.body.isSleeping);

  return isShellsSleeping && isEnemiesSleeping;
}