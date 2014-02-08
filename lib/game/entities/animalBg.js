var EntityAnimalBg;

EntityAnimalBg = null;

ig.module('game.entities.animalBg').requires('impact.entity').defines(function() {
  return EntityAnimalBg = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/animalbg.png', 1024, 768),
    size: {
      x: 1024,
      y: 768
    },
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.zIndex = -10;
      this.addAnim('idle', 1, [0]);
      return this.currentAnim = this.anims.idle;
    }
  });
});
