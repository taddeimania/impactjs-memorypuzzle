var EntityDuck;

EntityDuck = null;

ig.module('game.entities.animals.duck').requires('game.entities.card').defines(function() {
  return EntityDuck = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/duck.png'),
    value: "EntityDuck",
    soundFile: "media/voices/duck.ogg"
  });
});
