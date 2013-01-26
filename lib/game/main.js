ig.module( 
	'game.main' 
)
.requires(
    // Need to preload all entities because as of now they are loaded at game runtime
    // no big deal they aren't very expensive.
	'impact.game',
	'impact.font',
    'game.settings.settings',
    'game.utility',
    'game.levels.level1',
    'game.entities.animals.bird',
    'game.entities.animals.cat',
    'game.entities.animals.crab',
    'game.entities.animals.dog',
    'game.entities.animals.duck',
    'game.entities.animals.fish',
    'game.entities.animals.giraffe',
    'game.entities.animals.lion',
    'game.entities.animals.penguin',
    'game.entities.animals.pig',
    'game.entities.animals.snake',
    'game.entities.animals.spider',
    'game.entities.animals.turtle'
)
.defines(function(){
MyGame = ig.Game.extend({
    settings: new MySettings(),
    utility: new Utility(),
    matchOne: "",
	matchTwo: "",
    font: new ig.Font( 'media/04b03.font.png' ),
    init: function() {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        this.difficultyLevel = "hard";  // not going to stay to deploy
        this.loadLevel(LevelLevel1);    // don't count on this staying either
        this.createBoard(this.settings.difficulty[this.difficultyLevel]); // this looks good though
    },
    update: function() {
        if (this.cardCount === 0){
            this.createBoard(this.settings.difficulty[this.difficultyLevel]);
        }
        this.parent();
    },
    createBoard: function (cardCount){
        this.cardCount = cardCount * 2;
        var shuffledCards = this.utility.shuffle(this.settings.animalCards.slice(0, cardCount));
        var animalCardsCopy = this.utility.shuffle(shuffledCards.concat(shuffledCards));
        for (var i = 0 ; i < this.settings.hardGrid.length ; i++){
            this.spawnEntity(animalCardsCopy[i], this.settings.hardGrid[i].x, this.settings.hardGrid[i].y);
        }
    }
});
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );
});
