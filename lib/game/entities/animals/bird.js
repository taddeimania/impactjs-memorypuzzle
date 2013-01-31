ig.module(
    'game.entities.animals.bird'
).requires(
    'game.entities.card'
).defines(function(){
EntityBird = EntityCard.extend({
    animSheet: new ig.AnimationSheet('media/cards/card.png', 120, 195),
    underCard: new ig.Image('media/cards/animals/bird.png'),
    value: "EntityBird"
});
});