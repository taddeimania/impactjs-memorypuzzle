ig.module(
    'game.entities.animals.fish'
).requires(
    'game.entities.card'
).defines(function(){
    EntityFish = EntityCard.extend({
        underCard: new ig.Image('media/cards/animals/fish.png'),
        value: "EntityFish"
    });
});