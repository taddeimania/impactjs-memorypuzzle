EntityIcecream = null

ig.module(
    'game.entities.food.icecream'
).requires(
    'game.entities.card'
).defines ->

  EntityIcecream = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/icecream.png'
    value: "EntityIcecream"
    soundFile: "media/voices/apple.ogg"
