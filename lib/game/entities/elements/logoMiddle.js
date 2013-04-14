ig.module(
    'game.entities.elements.logoMiddle'
).requires(
    'impact.entity'
).defines(function(){
// end loc: x: 156 y: 264
EntityLogoMiddle = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logomid.png', 708, 144),
    size: {x: 708, y: 144},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 3;
        this.parent(x, y, settings);
    }
});


});
