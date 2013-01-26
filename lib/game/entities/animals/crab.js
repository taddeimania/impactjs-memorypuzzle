ig.module(
    'game.entities.animals.crab'
).requires(
    'game.entities.card'
).defines(function(){
    EntityCrab = EntityCard.extend({
        underCard: new ig.Image('media/cards/animals/crab.png'),
        value: "EntityCrab"
    });
});