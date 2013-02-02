ig.module(
    'game.entities.ui.camping'
).requires(
    'game.entities.baseSceneButton'
).defines(function(){

EntityCamping = EntityBaseSceneButton.extend({
    animSheet: new ig.AnimationSheet('media/camping.png', 288, 288),
    size: {x: 288, y: 288},
    scene: 'camping'
});


});