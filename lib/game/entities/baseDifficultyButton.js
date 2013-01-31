ig.module(
    'game.entities.baseDifficultyButton'
).requires(
    'impact.entity'
).defines(function(){

EntityBaseDifficultyButton = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/easybutton.png', 216, 72),
    size: {x: 216, y: 72},
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
                GAME_STATE.difficultySetting = this.difficultySetting;
                this.currentAnim = this.anims.idle;
                ig.system.setGame(SceneSelectScreen);
            }
        }
        this.parent();
    }
});


});