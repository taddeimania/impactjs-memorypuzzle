ig.module(
    'game.entities.ui.hardButton'
).requires(
    'game.entities.baseDifficultyButton'
).defines(function(){

EntityHardButton = EntityBaseDifficultyButton.extend({
    animSheet: new ig.AnimationSheet('media/hardbutton.png', 216, 72),
    difficultySetting: 'hard',
    init: function (x, y, settings) {
        this.parent(x, y, settings);
    }
});


});