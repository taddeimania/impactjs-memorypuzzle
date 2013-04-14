ig.module(
    'game.entities.elements.logoTop'
).requires(
    'impact.entity'
).defines(function(){
// end loc: x: 156 y: 204

EntityLogoTop = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/logotop.png', 708, 144),
    size: {x: 708, y: 144},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 2;
        this.parent(x, y, settings);
    }
});


});
