var EntityGreatJob;

EntityGreatJob = null;

ig.module('game.entities.ui.greatJob').requires('impact.entity').defines(function() {
  return EntityGreatJob = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/greatJob.png', 980, 85),
    size: {
      x: 980,
      y: 85
    },
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.currentAnim = this.anims.idle;
      return this.parent(x, y, settings);
    }
  });
});
