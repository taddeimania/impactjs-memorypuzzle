EntityBanana = null

ig.module(
    'game.entities.food.banana'
).requires(
    'game.entities.card'
).defines ->

  EntityBanana = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/banana.png'
    value: "EntityBanana"
    soundFile: "media/voices/apple.ogg"
