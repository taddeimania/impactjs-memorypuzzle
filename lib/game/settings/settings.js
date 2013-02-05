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
    testGrid: [
        {x: 252, y: 176},{x: 456, y: 176}, {x: 660, y: 176},
        {x: 252, y: 416},{x: 456, y: 416}, {x: 660, y: 416}
    ],
    mediumGrid: [
        {x: 192, y: 96},  {x: 360, y: 96},   {x: 528, y: 96},  {x: 696, y: 96},
        {x: 192, y: 296}, {x: 360, y: 296},  {x: 528, y: 296}, {x: 696, y: 296},
        {x: 192, y: 496}, {x: 360, y: 496},  {x: 528, y: 496}, {x: 696, y: 496}
    ],
    hardGrid: [
        {x: 121, y: 20},  {x: 253, y: 20},  {x: 385, y: 20},  {x: 517, y: 20},  {x: 649, y: 20}, {x: 781, y: 20},
        {x: 121, y: 196}, {x: 253, y: 196}, {x: 385, y: 196}, {x: 517, y: 196}, {x: 649, y: 196},{x: 781, y: 196},
        {x: 121, y: 376}, {x: 253, y: 376}, {x: 385, y: 376}, {x: 517, y: 376}, {x: 649, y: 376},{x: 781, y: 376},
        {x: 121, y: 552}, {x: 253, y: 552}, {x: 385, y: 552}, {x: 517, y: 552}, {x: 649, y: 552},{x: 781, y: 552}
    ],
    // Define possible cards able to be used in the card sets
    animalCards: ['EntityBird','EntityCat','EntityCrab','EntityDog','EntityDuck','EntityFish','EntityGiraffe',
        'EntityLion','EntityPenguin','EntityPig','EntitySnake','EntitySpider','EntityTurtle'],
    testCards: ['EntityBird','EntityBird','EntityBird'],
    difficulty: {test: 3, easy: 3, medium: 6, hard: 12},
    init: function () {
        this.deckAssociation = {
            LevelKitchen: this.animalCards,
            LevelUnderthesea: this.animalCards,
            LevelTransportation: this.animalCards,
            LevelCamping: this.animalCards
        };
    }
});

});
