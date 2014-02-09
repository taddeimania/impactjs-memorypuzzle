var EntityKiwi;

EntityKiwi = null;

ig.module('game.entities.food.kiwi').requires('game.entities.card').defines(function() {
  return EntityKiwi = EntityCard.extend({
    underCard: new ig.Image('media/cards/food/kiwi.png'),
    value: "EntityKiwi",
    soundFile: "media/voices/apple.ogg"
  });
});
