ig.module(
    'game.entities.animals.cat'
).requires(
    'game.entities.card'
).defines(function(){
    EntityCat = EntityCard.extend({
        underCard: new ig.Image('media/cards/animals/cat.png'),
        value: "EntityCat"
    });
});