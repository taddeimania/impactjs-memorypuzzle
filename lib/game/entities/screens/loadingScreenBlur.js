ig.module(
    'game.entities.screens.loadingScreenBlur'
).requires(
    'impact.entity'
).defines(function(){

EntityLoadingScreenBlur = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/LoadingScreenblur.png', 1024, 768),
    size: {x: 1024, y: 768},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.parent(x, y, settings);
    }
});


});