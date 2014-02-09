EntityPineapple = null

ig.module(
    'game.entities.food.pineapple'
).requires(
    'game.entities.card'
).defines ->

  EntityPineapple = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/pineapple.png'
    value: "EntityPineapple"
    soundFile: "media/voices/apple.ogg"
