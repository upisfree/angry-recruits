// lib/phaser.ts
// тут я модифицирую некоторые методы фазера (стараясь попутно всё не сломать),
// иначе пиздец как больно делать элементарные вещи 

var Phaser = window['Phaser'];
var Constraint = Phaser.Physics.Matter.Matter.Constraint;

Phaser.Physics.Matter.Factory.prototype.constraint = function(bodyA, bodyB, length, stiffness, options) {
    if (stiffness === undefined) { stiffness = 1; }
    if (options === undefined) { options = {}; }
    if (bodyA) { options.bodyA = (bodyA.type === 'body') ? bodyA : bodyA.body; }
    if (bodyB) { options.bodyB = (bodyB.type === 'body') ? bodyB : bodyB.body; }
    if (length) { options.length = length; }
    if (stiffness) { options.stiffness = stiffness; }

    var constraint = Constraint.create(options);

    this.world.add(constraint);

    return constraint;
};

export default Phaser;