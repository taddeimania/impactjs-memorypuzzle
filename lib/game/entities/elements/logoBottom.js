ig.module(
    'game.entities.elements.logoBottom'
).requires(
    'game.entities.elements.baseLogo'
).defines(function(){


EntityLogoBottom = EntityBaseLogo.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logobottom.png', 708, 144),
    size: {x: 708, y: 144},
    inEnd: 324,
    upEnd: 204,
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 4;
        this.parent(x, y, settings);
    }
});


});
