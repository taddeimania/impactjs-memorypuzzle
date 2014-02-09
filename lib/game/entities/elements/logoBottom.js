var EntityLogoBottom;

EntityLogoBottom = null;

ig.module('game.entities.elements.logoBottom').requires('game.entities.elements.baseLogo').defines(function() {
  return EntityLogoBottom = EntityBaseLogo.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/newLogo.png', 708, 132),
    size: {
      x: 708,
      y: 132
    },
    inEnd: 324,
    upEnd: 204,
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.currentAnim = this.anims.idle;
      this.zIndex = 4;
      return this.parent(x, y, settings);
    }
  });
});
