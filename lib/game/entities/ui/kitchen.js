ig.module(
    'game.entities.ui.kitchen'
).requires(
    'game.entities.baseSceneButton'
).defines(function(){

EntityKitchen = EntityBaseSceneButton.extend({
    animSheet: new ig.AnimationSheet('media/kitchen.png', 288, 288),
    size: {x: 288, y: 288},
    init: function (x, y, settings) {
        this.scene = LevelKitchen;
        this.sceneName = 'LevelKitchen';
        this.parent(x, y, settings);
    }
});


});