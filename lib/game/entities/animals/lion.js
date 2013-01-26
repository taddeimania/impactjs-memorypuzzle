ig.module(
    'game.entities.animals.lion'
).requires(
    'game.entities.card'
).defines(function(){
    EntityLion = EntityCard.extend({
        underCard: new ig.Image('media/cards/animals/lion.png'),
        value: "EntityLion"
    });
});