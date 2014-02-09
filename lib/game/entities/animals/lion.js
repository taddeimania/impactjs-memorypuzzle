var EntityLion;

EntityLion = null;

ig.module('game.entities.animals.lion').requires('game.entities.card').defines(function() {
  return EntityLion = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/lion.png'),
    value: "EntityLion",
    soundFile: "media/voices/lion.ogg"
  });
});
