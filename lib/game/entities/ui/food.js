var EntityFood;

EntityFood = null;

ig.module('game.entities.ui.food').requires('game.entities.baseSceneButton').defines(function() {
  return EntityFood = EntityBaseSceneButton.extend({
    animSheet: new ig.AnimationSheet('media/food.png', 288, 288),
    size: {
      x: 288,
      y: 288
    },
    init: function(x, y, settings) {
      if (!ig.global.wm) {
        this.scene = LevelFood;
      }
      this.sceneName = 'LevelFood';
      return this.parent(x, y, settings);
    }
  });
});
