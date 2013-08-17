ig.module(
    'game.entities.ui.dither'
).requires(
    'impact.entity'
).defines(function(){

EntityDither = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/dither.png', 1024, 768),
    size: {x: 1024, y: 768},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.currentAnim.alpha = 0.3;
        this.parent(x, y, settings);
    }
});


});
