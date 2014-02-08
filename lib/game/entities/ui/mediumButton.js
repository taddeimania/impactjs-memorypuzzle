var EntityMediumButton;

EntityMediumButton = null;

ig.module('game.entities.ui.mediumButton').requires('game.entities.baseDifficultyButton').defines(function() {
  return EntityMediumButton = EntityBaseDifficultyButton.extend({
    animSheet: new ig.AnimationSheet('media/mediumbutton.png', 216, 72),
    difficultySetting: "medium"
  });
});
