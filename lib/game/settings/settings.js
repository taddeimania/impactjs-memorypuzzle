ig.module(
    'game.settings.settings'
).requires(
).defines(function(){

Settings = ig.Class.extend({
    // Define safe locations for each difficulty grid
    easyGrid: [
        {x: 252, y: 176},{x: 456, y: 176}, {x: 660, y: 176},
        {x: 252, y: 416},{x: 456, y: 416}, {x: 660, y: 416}
    ],
    mediumGrid: [
        {x: 192, y: 96},  {x: 360, y: 96},   {x: 528, y: 96},  {x: 696, y: 96},
        {x: 192, y: 296}, {x: 360, y: 296},  {x: 528, y: 296}, {x: 696, y: 296},
        {x: 192, y: 496}, {x: 360, y: 496},  {x: 528, y: 496}, {x: 696, y: 496}
    ],
    hardGrid: [
        {x: 124, y: 20},  {x: 256, y: 20},  {x: 388, y: 20},  {x: 520, y: 20},  {x: 652, y: 20}, {x: 784, y: 20},
        {x: 124, y: 196}, {x: 256, y: 196}, {x: 388, y: 196}, {x: 520, y: 196}, {x: 652, y: 196},{x: 784, y: 196},
        {x: 124, y: 376}, {x: 256, y: 376}, {x: 388, y: 376}, {x: 520, y: 376}, {x: 652, y: 376},{x: 784, y: 376},
        {x: 124, y: 552}, {x: 256, y: 552}, {x: 388, y: 552}, {x: 520, y: 552}, {x: 652, y: 552},{x: 784, y: 552}
    ],
    // Define possible cards able to be used in the card sets
    animalCards: ['EntityBird','EntityCat','EntityCrab','EntityDog','EntityDuck','EntityFish','EntityGiraffe',
        'EntityLion','EntityPenguin','EntityPig','EntitySnake','EntitySpider','EntityTurtle'],
    difficulty: {easy: 3, medium: 6, hard: 12}
});

});