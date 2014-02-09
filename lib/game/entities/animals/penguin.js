var EntityPenguin;

EntityPenguin = null;

ig.module('game.entities.animals.penguin').requires('game.entities.card').defines(function() {
  return EntityPenguin = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/penguin.png'),
    value: "EntityPenguin",
    soundFile: "media/voices/penguin.ogg"
  });
});
