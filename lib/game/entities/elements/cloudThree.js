var EntityCloudThree;

EntityCloudThree = null;

ig.module('game.entities.elements.cloudThree').requires('impact.entity').defines(function() {
  return EntityCloudThree = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/cloud_3.png', 360, 120),
    size: {
      x: 360,
      y: 120
    },
    init: function(x, y, settings) {
      var myTween;
      this.addAnim('idle', 1, [0]);
      this.currentAnim = this.anims.idle;
      this.zIndex = 4;
      this.parent(x, y, settings);
      this.pos.x = -360;
      this.pos.y = 224;
      myTween = this.tween({
        pos: {
          x: 1025,
          y: 224
        }
      }, 336, {
        delay: 2,
        easing: ig.Tween.Easing.Linear.EaseNone
      });
      return myTween.start();
    },
    update: function() {
      this.parent();
      if (this.pos.x > 1024) {
        ig.game.spawnEntity('EntityCloudThree');
        this.kill();
        return ig.game.sortEntitiesDeferred();
      }
    }
  });
});
