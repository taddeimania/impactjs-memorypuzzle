EntitySpider = null

ig.module(
    'game.entities.animals.spider'
).requires(
    'game.entities.card'
).defines ->
  EntitySpider = EntityCard.extend
    underCard: new ig.Image 'media/cards/animals/spider.png'
    value: "EntitySpider"
    soundFile: "media/voices/spider.ogg"
