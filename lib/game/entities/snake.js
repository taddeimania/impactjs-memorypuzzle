ig.module(
    'game.entities.snake'
).requires(
    'game.entities.card'
).defines(function(){
EntitySnake = EntityCard.extend({
    animSheet: new ig.AnimationSheet('media/cardsnake.png', 120, 195),
    value: "EntitySnake"
});
});