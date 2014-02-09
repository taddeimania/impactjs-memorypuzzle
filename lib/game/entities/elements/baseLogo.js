var EntityBaseLogo;

EntityBaseLogo = null;

ig.module('game.entities.elements.baseLogo').requires('impact.entity').defines(function() {
  return EntityBaseLogo = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logotop.png', 708, 144),
    size: {
      x: 708,
      y: 144
    },
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.currentAnim = this.anims.idle;
      this.zIndex = 2;
      return this.parent(x, y, settings);
    },
    tweenIn: function() {
      return this.tween({
        pos: {
          x: 156,
          y: this.inEnd
        }
      }, 0.4).start();
    },
    tweenUp: function() {
      return this.tween({
        pos: {
          x: 156,
          y: this.upEnd
        }
      }, 0.4).start();
    }
  });
});
