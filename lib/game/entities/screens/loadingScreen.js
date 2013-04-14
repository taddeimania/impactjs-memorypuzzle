ig.module(
    'game.entities.screens.loadingScreen'
).requires(
    'impact.entity',
    'plugins.tween',
    'game.entities.ui.easyButton',
    'game.entities.ui.mediumButton',
    'game.entities.ui.hardButton',
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
    logoTopEnd: 204,
    logoMiddleEnd: 264,
    logoBottomEnd: 324,
    logoShadowEnd: 624,
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
            ig.game.spawnEntity('EntityEasyButton', 156, 88);
            ig.game.spawnEntity('EntityMediumButton', 400, 88);
            ig.game.spawnEntity('EntityHardButton', 648, 88);
            delete this.difficultyTimer;
        }
    },
    draw: function (){
        this.parent();
        this.logoTop.tween({pos: {x: 156, y: this.logoTopEnd}}, 0.4).start();
        this.logoMiddle.tween({pos: {x: 156, y: this.logoMiddleEnd}}, 0.4).start();
        this.logoBottom.tween({pos: {x: 156, y: this.logoBottomEnd}}, 0.4).start();
        this.logoShadow.tween({pos: {x: 136, y: this.logoShadowEnd}}, 0.4).start();
    }

});


});
