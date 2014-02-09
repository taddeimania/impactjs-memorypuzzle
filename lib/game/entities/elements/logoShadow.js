var EntityLogoShadow;

EntityLogoShadow = null;

ig.module('game.entities.elements.logoShadow').requires('impact.entity').defines(function() {
  return EntityLogoShadow = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logoshadow.png', 756, 36),
    size: {
      x: 756,
      y: 36
    },
    end: 624,
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.currentAnim = this.anims.idle;
      this.zIndex = 4;
      return this.parent(x, y, settings);
    },
    tweenIn: function() {
      return this.tween({
        pos: {
          x: 136,
          y: this.end
        }
      }, 0.4).start();
    }
  });
});
