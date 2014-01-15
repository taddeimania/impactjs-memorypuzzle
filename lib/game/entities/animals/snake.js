ig.module(
    'game.entities.animals.snake'
).requires(
    'game.entities.card'
).defines(function(){
EntitySnake = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/snake.png'),
    value: "EntitySnake",
    soundFile: "media/voices/snake.ogg"
});
});
