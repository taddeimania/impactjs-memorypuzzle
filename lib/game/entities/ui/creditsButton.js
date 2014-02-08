ig.module(
    'game.entities.ui.creditsButton'
).requires(
    'game.entities.baseButton',
    'game.entities.ui.creditCard'
).defines(function(){

EntityCreditsButton = EntityBaseButton.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/credits.png', 700, 85),
    size: {x: 700, y: 85},
    update: function () {
        if (this.clickOnMe()){
            if (ig.input.pressed('click')){
                this.currentAnim = this.anims.clicked;
            } else if (ig.input.released('click')){
                this.currentAnim = this.anims.idle;
                var creditCard = ig.game.getEntitiesByType('EntityCreditCard');
                if (creditCard){
                    this.cardTimer = new ig.Timer();
                }

            }
        }
        if (this.cardTimer && this.cardTimer.delta() > 0.25){
            this.creditCard = ig.game.spawnEntity('EntityCreditCard', 30, 10);
            delete this.cardTimer;
        }
        this.parent();
    }
});


});
