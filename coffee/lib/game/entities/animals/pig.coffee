EntityPig = null

ig.module(
    'game.entities.animals.pig'
).requires(
    'game.entities.card'
).defines ->
  EntityPig = EntityCard.extend
    underCard: new ig.Image 'media/cards/animals/pig.png'
    value: "EntityPig"
    soundFile: "media/voices/pig.ogg"
