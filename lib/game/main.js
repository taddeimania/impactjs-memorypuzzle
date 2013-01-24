ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'game.levels.level1',
    'game.entities.animalBg',
    'game.entities.bird',
    'game.entities.snake',
    'game.entities.turtle'
)
.defines(function(){
MyGame = ig.Game.extend({
    easyGrid: [{x: 252, y: 176},{x: 456, y: 176}, {x: 660, y: 176}, {x: 252, y: 416},{x: 456, y: 416}, {x: 660, y: 416}],
    animalCards: ['EntityBird', 'EntitySnake', 'EntityTurtle'],
    difficulty: {easy: 3, medium: 6, hard: 12},
    matchOne: "",
	matchTwo: "",
    font: new ig.Font( 'media/04b03.font.png' ),
	init: function() {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );

        this.loadLevel(LevelLevel1);
        this.difficultyLevel = "easy";
        this.createBoard(this.difficulty[this.difficultyLevel]);
	},
	update: function() {
        if (this.cardCount === 0){
            this.createBoard(this.difficulty[this.difficultyLevel]);
        }
		this.parent();
	},
	draw: function() {
		this.parent();

	},
    createBoard: function (cardCount){
        this.spawnEntity(EntityAnimalBg, 0, 0);
        this.cardCount = cardCount * 2;
        var shuffledCards = this.shuffle(this.animalCards.slice(0, cardCount));
        var animalCardsCopy = this.shuffle(shuffledCards.concat(shuffledCards));
        for (var i = 0 ; i < this.easyGrid.length ; i++){
            this.spawnEntity(animalCardsCopy[i], this.easyGrid[i].x, this.easyGrid[i].y);
        }
    },
    shuffle: function (list) {
        // CREDIT: http://dtm.livejournal.com/38725.html
        var i, j, t;
        for (i = 1; i < list.length; i++) {
            j = Math.floor(Math.random()*(1+i));
            if (j != i) {
                t = list[i];
                list[i] = list[j];
                list[j] = t;
            }
        }
        return list;
    }
});
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );
});
