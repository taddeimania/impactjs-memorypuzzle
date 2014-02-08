var EntityBaseButton;

EntityBaseButton = null;

ig.module('game.entities.baseButton').requires('impact.entity').defines(function() {
  return EntityBaseButton = ig.Entity.extend({
    clickOnMe: function() {
      return (ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && (ig.input.mouse.x > this.pos.x && ig.input.mouse.x < this.pos.x + this.size.x);
    },
    init: function(x, y, settings) {
      this.addAnim('idle', 1, [0]);
      this.addAnim('clicked', 1, [1], true);
      this.currentAnim = this.anims.idle;
      return this.parent(x, y, settings);
    }
  });
});
