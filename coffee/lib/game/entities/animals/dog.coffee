EntityDog = null

ig.module(
    'game.entities.animals.dog'
).requires(
    'game.entities.card'
).defines ->
  EntityDog = EntityCard.extend
    underCard: new ig.Image 'media/cards/animals/dog.png'
    value: "EntityDog"
    soundFile: "media/voices/dog.ogg"
