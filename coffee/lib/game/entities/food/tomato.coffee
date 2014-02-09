EntityTomato = null

ig.module(
    'game.entities.food.tomato'
).requires(
    'game.entities.card'
).defines ->

  EntityTomato = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/tomato.png'
    value: "EntityTomato"
    soundFile: "media/voices/apple.ogg"
