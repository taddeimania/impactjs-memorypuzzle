ig.module(
    'game.entities.ui.mediumButton'
).requires(
    'game.entities.baseDifficultyButton'
).defines(function(){

EntityMediumButton = EntityBaseDifficultyButton.extend({
    animSheet: new ig.AnimationSheet('media/mediumbutton.png', 216, 72),
    difficultySetting: "medium",
    init: function (x, y, settings) {
        this.parent(x, y, settings);
    }
});


});