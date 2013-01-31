ig.module(
    'game.entities.ui.homeButton'
).requires(
    'impact.entity'
).defines(function(){

EntityHomeButton = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/home.png', 116, 54),
    size: {x: 108, y: 54},
    scene: '',
    clickOnMe: function () {
        return (ig.input.mouse.y > this.pos.y
            && ig.input.mouse.y < this.pos.y + this.size.y)
            && (ig.input.mouse.x > this.pos.x
            && ig.input.mouse.x < this.pos.x + this.size.x);
    },
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.addAnim('clicked', 1, [1], true);
        this.currentAnim = this.anims.idle;
        this.parent(x, y, settings);
    },
    update: function () {
        if (this.clickOnMe()){
            if (ig.input.pressed('click')){
                this.currentAnim = this.anims.clicked;
            } else if (ig.input.released('click')){
                this.currentAnim = this.anims.idle;
                this.clearQueue();
                ig.system.setGame(StartScreen);
            }
        }
        this.parent();
    },
    clearQueue: function () {
        MyGame.matchOne = undefined;
        MyGame.matchTwo = undefined;
    }
});


});