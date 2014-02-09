EntityOrange = null

ig.module(
    'game.entities.food.orange'
).requires(
    'game.entities.card'
).defines ->

  EntityOrange = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/orange.png'
    value: "EntityOrange"
    soundFile: "media/voices/apple.ogg"
