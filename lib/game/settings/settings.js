ig.module(
    'game.settings.settings'
).requires(
).defines(function(){

baseEasyX = 352;
baseEasyY = 176;
baseMediumX = 292;
baseMediumY = 96;
baseHardX = 221;
baseHardY = 20;

Settings = ig.Class.extend({
    // Define safe locations for each difficulty grid
    easyGrid: [
        {x: baseEasyX, y: baseEasyY},{x: baseEasyX+204, y: baseEasyY}, {x: baseEasyX+(204*2), y: baseEasyY},
        {x: baseEasyX, y: baseEasyY+240},{x: baseEasyX+204, y: baseEasyY+240}, {x: baseEasyX+(204*2), y: baseEasyY+240}
    ],
    mediumGrid: [
        {x: baseMediumX, y: baseMediumY},  {x: baseMediumX+168, y: baseMediumY}, {x: baseMediumX+(168*2), y: baseMediumY},  {x: baseMediumX+(168*3), y: baseMediumY},
        {x: baseMediumX, y: baseMediumY+200}, {x: baseMediumX+168, y: baseMediumY+200},  {x: baseMediumX+(168*2), y: baseMediumY+200}, {x: baseMediumX+(168*3), y: baseMediumY+200},
        {x: baseMediumX, y: baseMediumY+(200*2)}, {x: baseMediumX+168, y: baseMediumY+(200*2)},  {x: baseMediumX+(168*2), y: baseMediumY+(200*2)}, {x: baseMediumX+(168*3), y: baseMediumY+(200*2)}
    ],
    hardGrid: [
        {x: baseHardX, y: baseHardY},  {x: baseHardX+132, y: baseHardY},  {x: baseHardX+(132*2), y: baseHardY},  {x: baseHardX+(132*3), y: baseHardY},  {x: baseHardX+(132*4), y: baseHardY}, {x: baseHardX+(132*5), y: baseHardY},
        {x: baseHardX, y: baseHardY+176}, {x: baseHardX+132, y: baseHardY+176}, {x: baseHardX+(132*2), y: baseHardY+176}, {x: baseHardX+(132*3), y: baseHardY+176}, {x: baseHardX+(132*4), y: baseHardY+176},{x: baseHardX+(132*5), y: baseHardY+176},
        {x: baseHardX, y: baseHardY+(176*2)}, {x: baseHardX+132, y: baseHardY+(176*2)}, {x: baseHardX+(132*2), y: baseHardY+(176*2)}, {x: baseHardX+(132*3), y: baseHardY+(176*2)}, {x: baseHardX+(132*4), y: baseHardY+(176*2)},{x: baseHardX+(132*5), y: baseHardY+(176*2)},
        {x: baseHardX, y: baseHardY+(176*3)}, {x: baseHardX+132, y: baseHardY+(176*3)}, {x: baseHardX+(132*2), y: baseHardY+(176*3)}, {x: baseHardX+(132*3), y: baseHardY+(176*3)}, {x: baseHardX+(132*4), y: baseHardY+(176*3)}, {x: baseHardX+(132*5), y: baseHardY+(176*3)}
    ],
    // Define possible cards able to be used in the card sets
    animalCards: ['EntityBird','EntityCat','EntityCrab','EntityDog','EntityDuck','EntityFish','EntityGiraffe',
        'EntityLion','EntityPenguin','EntityPig','EntitySnake','EntitySpider','EntityTurtle'],
    difficulty: {easy: 3, medium: 6, hard: 12},
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
