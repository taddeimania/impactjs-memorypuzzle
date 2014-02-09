var EntityCherries;

EntityCherries = null;

ig.module('game.entities.food.cherries').requires('game.entities.card').defines(function() {
  return EntityCherries = EntityCard.extend({
    underCard: new ig.Image('media/cards/food/cherries.png'),
    value: "EntityCherries",
    soundFile: "media/voices/apple.ogg"
  });
});
