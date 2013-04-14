ig.module(
    'game.entities.elements.cloudTwo'
).requires(
    'impact.entity'
).defines(function(){

EntityCloudTwo = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/cloud_2.png', 168, 72),
    size: {x: 168, y: 72},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.zIndex = 2;
        this.parent(x, y, settings);
        this.pos.x = 1024;
        this.pos.y = 420;
        myTween = this.tween({pos: {x: -169, y: 420}}, 132, {easing: ig.Tween.Easing.Linear.EaseNone}).start();
    },
    update: function () {
        this.parent();
        if (this.pos.x < -168){
            ig.game.spawnEntity('EntityCloudTwo');
            this.kill();
            ig.game.sortEntitiesDeferred();
        }
    }
});


});
