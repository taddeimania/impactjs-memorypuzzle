ig.module(
    'game.entities.animals.bird'
).requires(
    'game.entities.card'
).defines(function(){
EntityBird = EntityCard.extend({
    underCard: new ig.Image('media/cards/animals/bird.png'),
    value: "EntityBird",
    soundFile: "media/voices/bird.mp3"
});
});
