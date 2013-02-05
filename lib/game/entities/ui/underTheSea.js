ig.module(
    'game.entities.ui.underTheSea'
).requires(
    'game.entities.baseSceneButton'
).defines(function(){

EntityUnderTheSea = EntityBaseSceneButton.extend({
    animSheet: new ig.AnimationSheet('media/underTheSea.png', 288, 288),
    size: {x: 288, y: 288},
    init: function (x, y, settings) {
        this.scene = LevelUnderthesea;
        this.sceneName = 'LevelUnderthesea';
        this.parent(x, y, settings);
    }
});


});