EntityCrab = null

ig.module(
    'game.entities.animals.crab'
).requires(
    'game.entities.card'
).defines ->
  EntityCrab = EntityCard.extend
    underCard: new ig.Image 'media/cards/animals/crab.png'
    value: "EntityCrab"
    soundFile: "media/voices/crab.ogg"
