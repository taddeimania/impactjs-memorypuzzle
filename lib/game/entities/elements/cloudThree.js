ig.module(
    'game.entities.elements.cloudThree'
).requires(
    'impact.entity'
).defines(function(){

EntityCloudThree = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/cloud_3.png', 180, 60),
    size: {x: 180, y: 60},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 4;
        this.parent(x, y, settings);
        this.pos.x = -180;
        this.pos.y = 224;
        myTween = this.tween({pos: {x: 1025, y: 224}}, 336, {delay: 2, easing: ig.Tween.Easing.Linear.EaseNone}).start();
    },
    update: function () {
        this.parent();
        if (this.pos.x > 1024){
            ig.game.spawnEntity('EntityCloudThree');
            this.kill();
            ig.game.sortEntitiesDeferred();
        }
    }
});


});
