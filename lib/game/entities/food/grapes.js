var EntityGrapes;

EntityGrapes = null;

ig.module('game.entities.food.grapes').requires('game.entities.card').defines(function() {
  return EntityGrapes = EntityCard.extend({
    underCard: new ig.Image('media/cards/food/grapes.png'),
    value: "EntityGrapes",
    soundFile: "media/voices/apple.ogg"
  });
});
