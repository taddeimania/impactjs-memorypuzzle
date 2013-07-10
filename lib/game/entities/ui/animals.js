ig.module(
    'game.entities.ui.animals'
).requires(
    'game.entities.baseSceneButton'
).defines(function(){

EntityAnimals = EntityBaseSceneButton.extend({
    animSheet: new ig.AnimationSheet('media/animals.png', 288, 288),
    size: {x: 288, y: 288},
    init: function (x, y, settings) {
        if (!ig.global.wm){
            this.scene = LevelAnimals;
        }
        this.sceneName = 'LevelAnimals';
        this.parent(x, y, settings);
    }
});


});
