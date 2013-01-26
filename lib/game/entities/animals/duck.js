ig.module(
    'game.entities.animals.duck'
).requires(
    'game.entities.card'
).defines(function(){
    EntityDuck = EntityCard.extend({
        underCard: new ig.Image('media/cards/animals/duck.png'),
        value: "EntityDuck"
    });
});