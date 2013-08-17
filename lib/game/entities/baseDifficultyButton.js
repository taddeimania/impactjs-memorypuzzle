ig.module(
    'game.entities.baseDifficultyButton'
).requires(
    'game.entities.baseButton',
    'game.entities.elements.baseLogo'
).defines(function(){

EntityBaseDifficultyButton = EntityBaseButton.extend({
    animSheet: new ig.AnimationSheet('media/easybutton.png', 216, 72),
    size: {x: 216, y: 72},
    update: function () {
        if (this.clickOnMe()){
            if (ig.input.pressed('click')){
                this.currentAnim = this.anims.clicked;
            } else if (ig.input.released('click')){
                GAME_STATE.difficultySetting = this.difficultySetting;
                this.currentAnim = this.anims.idle;
                ig.game.spawnEntity('EntityHomeButton', 8, 708);
                ig.game.spawnEntity('EntityAnimals', 40, 400);
                ig.game.spawnEntity('EntityFood', 368, 400);
                ig.game.spawnEntity('EntityTransportation', 696, 400);
            }
        }
        this.parent();
    }
});


});
