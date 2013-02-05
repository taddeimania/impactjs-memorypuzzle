ig.module(
    'game.entities.ui.transportation'
).requires(
    'game.entities.baseSceneButton'
).defines(function(){

EntityTransportation = EntityBaseSceneButton.extend({
    animSheet: new ig.AnimationSheet('media/transportation.png', 288, 288),
    size: {x: 288, y: 288},
    init: function (x, y, settings) {
        this.scene = LevelTransportation;
        this.sceneName = 'LevelTransportation';
        this.parent(x, y, settings);
    }
});


});