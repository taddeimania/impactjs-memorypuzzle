ig.module(
    'game.entities.animals.turtle'
).requires(
    'game.entities.card'
).defines(function(){
EntityTurtle = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/turtle.png'),
    value: "EntityTurtle",
    soundFile: "media/voices/turtle.ogg"
});
});
