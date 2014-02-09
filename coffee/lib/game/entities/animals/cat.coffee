EntityCat = null

ig.module(
    'game.entities.animals.cat'
).requires(
    'game.entities.card'
).defines ->
  EntityCat = EntityCard.extend
    underCard: new ig.Image 'media/cards/animals/cat.png'
    value: "EntityCat"
    soundFile: "media/voices/cat.ogg"
