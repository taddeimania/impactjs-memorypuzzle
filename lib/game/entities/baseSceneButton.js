ig.module(
    'game.entities.baseSceneButton'
).requires(
    'impact.entity'
).defines(function(){

EntityBaseSceneButton = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/underTheSea.png', 288, 288),
    size: {x: 288, y: 288},
    scene: '',
    clickOnMe: function () {
        return (ig.input.mouse.y > this.pos.y
            && ig.input.mouse.y < this.pos.y + this.size.y)
            && (ig.input.mouse.x > this.pos.x
            && ig.input.mouse.x < this.pos.x + this.size.x);
    },
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.addAnim('clicked', 1, [0], true);
        this.currentAnim = this.anims.idle;
        this.parent(x, y, settings);
    },
    update: function () {
        if (this.clickOnMe()){
            if (ig.input.pressed('click')){
                this.currentAnim = this.anims.clicked;
            } else if (ig.input.released('click')){
                GAME_STATE.sceneSetting = this.scene;
                this.currentAnim = this.anims.idle;
                ig.system.setGame(MyGame);
            }
        }
        this.parent();
    }
});


});