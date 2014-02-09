var EntitySpider;

EntitySpider = null;

ig.module('game.entities.animals.spider').requires('game.entities.card').defines(function() {
  return EntitySpider = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/spider.png'),
    value: "EntitySpider",
    soundFile: "media/voices/spider.ogg"
  });
});
