ig.module(
    'game.entities.card'
).requires(
    'impact.entity',
    'impact.font'

).defines(function(){

EntityCard = ig.Entity.extend({
    textScreen: new ig.Font( 'media/04b03.font.png' ),
    animSheet: new ig.AnimationSheet('media/card.png', 120, 195),
    match: null,
    state: "down",
    value: "",
    size: {x: 120, y: 195},
    init: function (x, y, settings) {
        this.parent(x, y, settings);
        this.addAnim('idle', 1, [0]);
        this.addAnim('flipCard', .02, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], true);
        this.addAnim('reverseCard', .02, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], true);
    },
    update: function(){
        if (this.clickOnMe()&& this.currentAnim.tile === 0){
            this.turnCardUp();
            this.pushQueue(this.value);
        } else if (this.clickOnMe() && this.state != 'up'  && this.currentAnim.tile === 9){
            this.turnCardDown();
            this.popQueue();
        }
        if (this.noMatchTimer && this.noMatchTimer.delta() > 1){
            this.bindClick();
            this.matchNotFound(ig.game.entities);
            delete this.noMatchTimer;
        }
        if (this.matchTimer && this.matchTimer.delta() > 1){
            this.bindClick();
            this.matchFound(ig.game.entities);
            delete this.matchTimer;
        }

        this.parent();
    },
    draw: function () {
        this.parent();
        // need some visual feedback for match/nomatch
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
        if (MyGame.matchOne != undefined){
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
                this.matchTimer = new ig.Timer(.5);
            } else {
                this.unbindClick();
                this.noMatchTimer = new ig.Timer(.5);
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
                entities[entity].kill();
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
        return ig.input.pressed('click')
            && (ig.input.mouse.y > this.pos.y
            && ig.input.mouse.y < this.pos.y + this.size.y)
            && (ig.input.mouse.x > this.pos.x
            && ig.input.mouse.x < this.pos.x + this.size.x);
    }
});


});