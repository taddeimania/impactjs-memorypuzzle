var EntityHardButton;

EntityHardButton = null;

ig.module('game.entities.ui.hardButton').requires('game.entities.baseDifficultyButton').defines(function() {
  return EntityHardButton = EntityBaseDifficultyButton.extend({
    animSheet: new ig.AnimationSheet('media/hardbutton.png', 216, 72),
    difficultySetting: 'hard'
  });
});
