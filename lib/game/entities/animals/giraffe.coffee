EntityGiraffe = null

ig.module(
    'game.entities.animals.giraffe'
).requires(
    'game.entities.card'
).defines ->
  EntityGiraffe = EntityCard.extend
    underCard: new ig.Image 'media/cards/animals/giraffe.png'
    value: "EntityGiraffe"
    soundFile: "media/voices/giraffe.ogg"
