ig.module(
    'game.entities.food.coffee'
).requires(
    'game.entities.card'
).defines(function(){
EntityCoffee = EntityCard.extend({
    underCard: new ig.Image('media/cards/food/coffee.png'),
    value: "EntityCoffee",
    soundFile: "media/voices/coffee.ogg"
});
});
