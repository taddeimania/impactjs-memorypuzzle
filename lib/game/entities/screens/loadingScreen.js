ig.module(
    'game.entities.screens.loadingScreen'
).requires(
    'impact.entity',
    'plugins.tween',
    'game.entities.ui.easyButton',
    'game.entities.ui.mediumButton',
    'game.entities.ui.hardButton',
    'game.entities.ui.creditsButton',
    'game.entities.elements.cloudOne',
    'game.entities.elements.cloudTwo',
    'game.entities.elements.cloudThree',
    'game.entities.elements.logoShadow',
    'game.entities.elements.logoBottom',
    'game.entities.elements.logoMiddle',
    'game.entities.elements.logoTop'
).defines(function(){

EntityLoadingScreen = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/_homescreen/background.png', 1024, 768),
    size: {x: 1024, y: 768},
    init: function (x, y, settings) {
        this.addAnim('idle', 1, [0]);
        this.currentAnim = this.anims.idle;
        this.difficultyTimer = new ig.Timer();
        this.cloudOne = ig.game.spawnEntity('EntityCloudOne');
        this.cloudTwo = ig.game.spawnEntity('EntityCloudTwo');
        this.cloudThree = ig.game.spawnEntity('EntityCloudThree');
        this.logoTop = ig.game.spawnEntity('EntityLogoTop', 156, -144);
        this.logoMiddle = ig.game.spawnEntity('EntityLogoMiddle', 156, -144);
        this.logoBottom = ig.game.spawnEntity('EntityLogoBottom', 156, -144);
        this.logoShadow = ig.game.spawnEntity('EntityLogoShadow', 136, 800);
        ig.game.sortEntitiesDeferred();
        this.parent(x, y, settings);
    },
    update: function () {
        if (this.difficultyTimer && this.difficultyTimer.delta() > 2.5){
            this.easyButton = ig.game.spawnEntity('EntityEasyButton', 156, 88);
            this.mediumButton = ig.game.spawnEntity('EntityMediumButton', 400, 88);
            this.hardButton = ig.game.spawnEntity('EntityHardButton', 648, 88);
            this.creditsButton = ig.game.spawnEntity('EntityCreditsButton', 160, 520);
            delete this.difficultyTimer;
        }
    },
    draw: function (){
        this.parent();
        if (GAME_STATE.difficultySetting){
            this.moveLogoUp();
        } else {
            this.moveLogoIn();

        }
    },
    moveLogoIn: function () {
        this.logoTop.tweenIn();
        this.logoMiddle.tweenIn();
        this.logoBottom.tweenIn();
        this.logoShadow.tweenIn();
    },
    moveLogoUp: function () {
        this.logoTop.tweenUp();
        this.logoMiddle.tweenUp();
        this.logoBottom.tweenUp();
        if (this.easyButton){
            this.logoBottom.anims.idle = new ig.Animation(new ig.AnimationSheet('media/_homescreen/newLogo.png', 708, 144), 1, [0]);
            // this.logoBottom.addAnim('idle', 1, [0]);
            this.creditsButton.kill();
            // this.logoTop.kill();
            // this.logoMiddle.kill();
            this.logoShadow.kill();
            this.easyButton.kill();
            this.mediumButton.kill();
            this.hardButton.kill();
        }
    }

});


});
