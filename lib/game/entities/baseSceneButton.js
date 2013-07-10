ig.module(
    'game.entities.baseSceneButton'
).requires(
    'game.entities.baseButton'
).defines(function(){

EntityBaseSceneButton = EntityBaseButton.extend({
    animSheet: new ig.AnimationSheet('media/base.png', 288, 288),
    size: {x: 288, y: 288},
    update: function () {
        if (this.clickOnMe()){
            if (ig.input.released('click')){
                GAME_STATE.sceneSetting = this.scene;
                GAME_STATE.sceneName = this.sceneName;
                this.currentAnim = this.anims.idle;
                ig.system.setGame(MyGame);
            }
        }
        this.parent();
    }
});


});
