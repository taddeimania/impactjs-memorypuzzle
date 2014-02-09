EntityPear = null

ig.module(
    'game.entities.food.pear'
).requires(
    'game.entities.card'
).defines ->

  EntityPear = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/pear.png'
    value: "EntityPear"
    soundFile: "media/voices/apple.ogg"
