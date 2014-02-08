var EntityCard;

EntityCard = null;

ig.module('game.entities.card').requires('impact.entity').defines(function() {
  return EntityCard = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/cards/cardflip_1920x180.png', 120, 180),
    underCard: new ig.Image('media/iesux.png'),
    match: null,
    state: "down",
    value: "",
    size: {
      x: 120,
      y: 175
    },
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.sound = new ig.Sound(this.soundFile);
      this.addAnim('spawn', 0.02, [0, 1, 2], true);
      this.addAnim('flipCard', 0.01, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], true);
      this.addAnim('reverseCard', 0.01, [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2], true);
      return this.addAnim('killCard', 0.02, [14, 15], true);
    },
    update: function() {
      if (this.clickOnMe() && this.currentAnim.tile === 2) {
        this.turnCardUp();
        this.pushQueue(this.value);
      } else if (this.clickOnMe() && this.state !== 'up' && this.currentAnim.tile === 13) {
        this.turnCardDown();
        this.popQueue();
      }
      if (this.noMatchTimer && this.noMatchTimer.delta() > 0.1) {
        this.bindClick();
        this.matchNotFound(ig.game.entities);
        delete this.noMatchTimer;
      }
      if (this.matchTimer && this.matchTimer.delta() > 0.1) {
        this.bindClick();
        this.matchFound(ig.game.entities);
        delete this.matchTimer;
      }
      if (this.currentAnim.tile === 15) {
        this.kill();
      }
      return this.parent();
    },
    draw: function() {
      this.parent();
      if (this.currentAnim.tile === 13) {
        return this.underCard.draw(this.pos.x, this.pos.y);
      }
    },
    unbindClick: function() {
      return ig.input.unbind(ig.KEY.MOUSE1, 'click');
    },
    bindClick: function() {
      return ig.input.bind(ig.KEY.MOUSE1, 'click');
    },
    turnCardDown: function() {
      this.currentAnim = this.anims.reverseCard.rewind();
      return this.state = "down";
    },
    turnCardUp: function() {
      this.currentAnim = this.anims.flipCard.rewind();
      return this.state = "up";
    },
    popQueue: function() {
      if (!MyGame.matchOne) {
        return MyGame.matchOne = void 0;
      } else {
        return MyGame.matchTwo = void 0;
      }
    },
    pushQueue: function(val) {
      if (!MyGame.matchOne) {
        return MyGame.matchOne = val;
      } else {
        MyGame.matchTwo = val;
        if (MyGame.matchOne === MyGame.matchTwo) {
          this.unbindClick();
          return this.matchTimer = new ig.Timer(0.5);
        } else {
          this.unbindClick();
          return this.noMatchTimer = new ig.Timer(0.5);
        }
      }
    },
    clearQueue: function() {
      MyGame.matchOne = void 0;
      return MyGame.matchTwo = void 0;
    },
    matchFound: function(entities) {
      var entity, i, _i, _len;
      this.sound.play();
      this.match = "yes";
      for (i = _i = 0, _len = entities.length; _i < _len; i = ++_i) {
        entity = entities[i];
        if (entities[i].state === 'up') {
          ig.game.cardCount--;
          entities[i].currentAnim = this.anims.killCard.rewind();
        }
      }
      return this.clearQueue();
    },
    matchNotFound: function(entities) {
      var entity, i, _i, _len;
      this.match = "no";
      for (i = _i = 0, _len = entities.length; _i < _len; i = ++_i) {
        entity = entities[i];
        if (entities[i].state === 'up') {
          entities[i].turnCardDown();
        }
      }
      return this.clearQueue();
    },
    clickOnMe: function() {
      return ig.input.pressed('click') && (ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && (ig.input.mouse.x > this.pos.x && ig.input.mouse.x < this.pos.x + this.size.x);
    }
  });
});
