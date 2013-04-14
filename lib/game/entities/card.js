ig.module(
    'game.entities.card'
).requires(
    'impact.entity'
).defines(function(){

EntityCard = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/cards/cardflip_1920x180.png', 120, 180),
    underCard: new ig.Image('media/iesux.png'),
    match: null,
    state: "down",
    value: "",
    size: {x: 120, y: 175},
    init: function (x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('spawn', 0.02, [0, 1, 2], true);
        this.addAnim('flipCard', 0.01, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], true);
        this.addAnim('reverseCard', 0.01, [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2], true);
        this.addAnim('killCard', 0.02, [14, 15], true);
    },
    update: function(){
        if (this.clickOnMe() && this.currentAnim.tile === 2){
            this.turnCardUp();
            this.pushQueue(this.value);
        } else if (this.clickOnMe() && this.state != 'up' && this.currentAnim.tile === 13){
            this.turnCardDown();
            this.popQueue();
        }
        if (this.noMatchTimer && this.noMatchTimer.delta() > 0.1){
            this.bindClick();
            this.matchNotFound(ig.game.entities);
            delete this.noMatchTimer;
        }
        if (this.matchTimer && this.matchTimer.delta() > 0.1){
            this.bindClick();
            this.matchFound(ig.game.entities);
            delete this.matchTimer;
        }
        if (this.currentAnim.tile === 15){
            this.kill();
        }

        this.parent();
    },
    draw: function () {
        this.parent();
        if (this.currentAnim.tile === 13){
            this.underCard.draw(this.pos.x, this.pos.y);
        }
    },
    unbindClick: function () {
        ig.input.unbind( ig.KEY.MOUSE1, 'click' );
    },
    bindClick: function () {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
    },
    turnCardDown: function () {
        this.currentAnim = this.anims.reverseCard.rewind();
        this.state = "down";
    },
    turnCardUp: function () {
        this.currentAnim = this.anims.flipCard.rewind();
        this.state = "up";
    },
    popQueue: function (){
        if (!MyGame.matchOne){
            MyGame.matchOne = undefined;
        } else {
            MyGame.matchTwo = undefined;
        }
    },
    pushQueue: function (val) {
        if (!MyGame.matchOne){
            MyGame.matchOne = val;
        } else {
            MyGame.matchTwo = val;
            if (MyGame.matchOne === MyGame.matchTwo){
                this.unbindClick();
                this.matchTimer = new ig.Timer(0.5);
            } else {
                this.unbindClick();
                this.noMatchTimer = new ig.Timer(0.5);
            }
        }
    },
    clearQueue: function () {
            MyGame.matchOne = undefined;
            MyGame.matchTwo = undefined;
    },
    matchFound: function (entities){
        this.match = "yes";
        for (var entity in entities){
            if (entities[entity].state === 'up'){
                ig.game.cardCount--;
                entities[entity].currentAnim = this.anims.killCard.rewind();
            }
        }
        this.clearQueue();
    },
    matchNotFound: function (entities){
        this.match = "no";
        for (var entity in entities){
            if (entities[entity].state === 'up'){
                entities[entity].turnCardDown();
            }
        }
        this.clearQueue();
    },
    clickOnMe: function () {
        return ig.input.pressed('click') && 
            (ig.input.mouse.y > this.pos.y &&
             ig.input.mouse.y < this.pos.y + this.size.y) && 
            (ig.input.mouse.x > this.pos.x && 
             ig.input.mouse.x < this.pos.x + this.size.x);
    }
});


});
