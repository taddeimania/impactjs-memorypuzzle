var EntitySceneSelectButton;

EntitySceneSelectButton = null;

ig.module('game.entities.ui.sceneSelectButton').requires('game.entities.baseButton').defines(function() {
  return EntitySceneSelectButton = EntityBaseButton.extend({
    animSheet: new ig.AnimationSheet('media/sceneselectbutton.png', 116, 54),
    size: {
      x: 116,
      y: 54
    },
    update: function() {
      if (this.clickOnMe()) {
        if (ig.input.pressed('click')) {
          this.currentAnim = this.anims.clicked;
        } else if (ig.input.released('click')) {
          this.currentAnim = this.anims.idle;
          this.clearQueue();
          ig.system.setGame(SceneSelectScreen);
        }
      }
      return this.parent();
    },
    clearQueue: function() {
      MyGame.matchOne = void 0;
      return MyGame.matchTwo = void 0;
    }
  });
});
