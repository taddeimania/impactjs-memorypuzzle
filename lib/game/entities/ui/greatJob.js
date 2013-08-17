ig.module(
    'game.entities.ui.greatJob'
).requires(
    'impact.entity'
).defines(function(){

EntityGreatJob = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/greatJob.png', 853, 164),
    size: {x: 853, y: 164},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.parent(x, y, settings);
    }
});


});
