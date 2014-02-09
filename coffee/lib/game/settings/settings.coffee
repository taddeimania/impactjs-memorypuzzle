baseEasyX = 352
baseEasyY = 176
baseMediumX = 292
baseMediumY = 96
baseHardX = 221
baseHardY = 20
baseButtonX = '' # baseDifficultyX / 2 + (button width / 2)

Settings = null

ig.module(
    'game.settings.settings'
).requires(
    'game.entities.animals.bird',
    'game.entities.animals.cat',
    'game.entities.animals.crab',
    'game.entities.animals.dog',
    'game.entities.animals.duck',
    'game.entities.animals.fish',
    'game.entities.animals.giraffe',
    'game.entities.animals.lion',
    'game.entities.animals.penguin',
    'game.entities.animals.pig',
    'game.entities.animals.snake',
    'game.entities.animals.spider',
    'game.entities.animals.turtle',
    'game.entities.food.banana',
    'game.entities.food.cherries',
    'game.entities.food.grapes',
    'game.entities.food.icecream',
    'game.entities.food.kiwi',
    'game.entities.food.lollipop',
    'game.entities.food.orange',
    'game.entities.food.pear',
    'game.entities.food.pineapple',
    'game.entities.food.strawberry',
    'game.entities.food.tomato',
    'game.entities.food.watermelon',
    'game.entities.food.apple'
).defines ->

  Settings = ig.Class.extend
    # Define safe locations for each difficulty grid
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
    # Define possible cards able to be used in the card sets
    animalCards: ['EntityBird','EntityCat','EntityCrab','EntityDog','EntityDuck','EntityFish','EntityGiraffe',
      'EntityLion','EntityPenguin','EntityPig','EntitySnake','EntitySpider','EntityTurtle'],
    foodCards: ['EntityBanana','EntityCherries','EntityGrapes','EntityApple','EntityIcecream','EntityKiwi','EntityLollipop',
      'EntityOrange','EntityPear','EntityPineapple','EntityTomato','EntityWatermelon','EntityStrawberry'],
    difficulty:
      easy: 3
      medium: 6
      hard: 12

    init: ->
      @deckAssociation =
        LevelKitchen: this.animalCards,
        LevelFood: this.foodCards,
        LevelTransportation: this.animalCards,
        LevelAnimals: this.animalCards

  return
