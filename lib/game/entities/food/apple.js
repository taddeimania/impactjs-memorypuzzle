var EntityApple;

EntityApple = null;

ig.module('game.entities.food.apple').requires('game.entities.card').defines(function() {
  return EntityApple = EntityCard.extend({
    underCard: new ig.Image('media/cards/food/apple.png'),
    value: "EntityApple",
    soundFile: "media/voices/apple.ogg"
  });
});
