EntityCarrot = null

ig.module(
    'game.entities.food.carrot'
).requires(
    'game.entities.card'
).defines ->

  EntityCarrot = EntityCard.extend
    underCard: new ig.Image 'media/cards/food/carrot.png'
    value: "EntityCarrot"
    soundFile: "media/voices/carrot.ogg"
