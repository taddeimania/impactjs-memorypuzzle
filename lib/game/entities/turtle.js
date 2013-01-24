ig.module(
    'game.entities.turtle'
).requires(
    'game.entities.card'
).defines(function(){
EntityTurtle = EntityCard.extend({
    animSheet: new ig.AnimationSheet('media/cardturtle.png', 120, 195),
    value: "EntityTurtle"
});
});