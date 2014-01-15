ig.module(
    'game.entities.elements.logoTop'
).requires(
    'game.entities.elements.baseLogo'
).defines(function(){
// end loc: x: 156 y: 204

EntityLogoTop = EntityBaseLogo.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logotop.png', 708, 132),
    size: {x: 708, y: 132},
    inEnd: 204,
    upEnd: 204,
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 2;
        this.parent(x, y, settings);
    }
});


});
