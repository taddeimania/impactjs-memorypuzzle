var EntityFoodScreen;

EntityFoodScreen = null;

ig.module('game.entities.screens.foodScreen').requires('impact.entity').defines(function() {
  return EntityFoodScreen = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/foodbg.png', 1024, 768),
    size: {
      x: 1024,
      y: 768
    },
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.currentAnim = this.anims.idle;
      return this.parent(x, y, settings);
    }
  });
});
