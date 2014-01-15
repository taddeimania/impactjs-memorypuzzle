ig.module(
    'game.entities.ui.creditCard'
).requires(
    'game.entities.baseButton'
).defines(function(){

EntityCreditCard = EntityBaseButton.extend({
    animSheet: new ig.AnimationSheet('media/creditCard.png', 973, 725),
    size: {x: 973, y: 725},
    zIndex: 10,
    update: function () {
        if (this.clickOnMe()){
            if (ig.input.pressed('click')){
                this.currentAnim = this.anims.clicked;
            } else if (ig.input.released('click')){
                this.currentAnim = this.anims.idle;
                this.kill();
            }
        }
        this.parent();
    }
});


});
