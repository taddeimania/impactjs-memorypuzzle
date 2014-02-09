EntityWatermelon = null

ig.module(
    'game.entities.food.watermelon'
).requires(
    'game.entities.card'
).defines ->

  EntityWatermelon = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/watermelon.png'
    value: "EntityWatermelon"
    soundFile: "media/voices/apple.ogg"
