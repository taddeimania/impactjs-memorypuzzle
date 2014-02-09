var EntityStrawberry;

EntityStrawberry = null;

ig.module('game.entities.food.strawberry').requires('game.entities.card').defines(function() {
  return EntityStrawberry = EntityCard.extend({
    underCard: new ig.Image('media/cards/food/strawberry.png'),
    value: "EntityStrawberry",
    soundFile: "media/voices/apple.ogg"
  });
});
