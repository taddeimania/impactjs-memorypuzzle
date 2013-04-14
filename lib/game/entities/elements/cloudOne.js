ig.module(
    'game.entities.elements.cloudOne'
).requires(
    'impact.entity'
).defines(function(){

EntityCloudOne = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/cloud_1.png', 108, 48),
    size: {x: 108, y: 48},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 2;
        this.parent(x, y, settings);
        this.pos.x = -108;
        this.pos.y = 500;
        this.myTween = this.tween({pos: {x: 1025, y: 500}}, 80, {delay: 1, easing: ig.Tween.Easing.Linear.EaseNone});
        this.myTween.start();
    },
    update: function () {
        this.parent();
        if (this.pos.x > 1024){
            ig.game.spawnEntity('EntityCloudOne');
            this.kill();
            ig.game.sortEntitiesDeferred();
        }
    }
});


});
