EntityCake = null

ig.module(
    'game.entities.food.cake'
).requires(
    'game.entities.card'
).defines ->

  EntityCake = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/cake.png'
    value: "EntityCake"
    soundFile: "media/voices/cake.ogg"
