ig.module(
    'game.entities.animals.penguin'
).requires(
    'game.entities.card'
).defines(function(){
    EntityPenguin = EntityCard.extend({
        underCard: new ig.Image('media/cards/animals/penguin.png'),
        value: "EntityPenguin"
    });
});