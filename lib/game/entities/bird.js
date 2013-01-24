ig.module(
    'game.entities.bird'
).requires(
    'game.entities.card'
).defines(function(){
EntityBird = EntityCard.extend({
    animSheet: new ig.AnimationSheet('media/cardbird.png', 120, 195),
    value: "EntityBird"
});
});