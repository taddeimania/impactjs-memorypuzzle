ig.module(
    'game.entities.elements.logoShadow'
).requires(
    'impact.entity'
).defines(function(){

EntityLogoShadow = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logoshadow.png', 756, 36),
    size: {x: 756, y: 36},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 4;
        this.parent(x, y, settings);
    }
});


});
