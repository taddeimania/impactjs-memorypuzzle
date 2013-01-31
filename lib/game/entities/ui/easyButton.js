ig.module(
    'game.entities.ui.easyButton'
).requires(
    'game.entities.baseDifficultyButton'
).defines(function(){

EntityEasyButton = EntityBaseDifficultyButton.extend({
    animSheet: new ig.AnimationSheet('media/easybutton.png', 216, 72),
    difficultySetting: 'easy',
    init: function (x, y, settings) {
        this.parent(x, y, settings);
    }
});


});