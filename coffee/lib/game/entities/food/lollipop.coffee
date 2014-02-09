EntityLollipop = null

ig.module(
    'game.entities.food.lollipop'
).requires(
    'game.entities.card'
).defines ->

  EntityLollipop = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/lollipop.png'
    value: "EntityLollipop"
    soundFile: "media/voices/apple.ogg"
