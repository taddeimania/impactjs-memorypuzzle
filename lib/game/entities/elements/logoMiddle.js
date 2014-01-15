ig.module(
    'game.entities.elements.logoMiddle'
).requires(
    'game.entities.elements.baseLogo'
).defines(function(){


EntityLogoMiddle = EntityBaseLogo.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logomid.png', 708, 132),
    size: {x: 708, y: 132},
    inEnd: 264,
    upEnd: 204,
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 3;
        this.parent(x, y, settings);
    }
});


});
