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
    settings: new Settings(),
    utility: new Utility(),
    matchOne: "",
    matchTwo: "",
    font: new ig.Font( 'media/04b03.font.png' ),
    init: function() {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );

        // This is all here until i've made the difficulty / scene selector screens
        this.difficultyLevel = "hard";
        this.loadLevel(LevelLevel1);
        this.currentDeck = this.settings.animalCards;
        this.createBoard(this.settings.difficulty[this.difficultyLevel]);
    },
    update: function() {
        if (this.cardCount === 0){
            this.createBoard(this.settings.difficulty[this.difficultyLevel]);
        }
        this.parent();
    },
    createBoard: function (cardCount){
        this.cardCount = cardCount * 2;
        var shuffledCards = this.utility.shuffle(this.getRandomCards(cardCount));
        var animalCardsCopy = this.utility.shuffle(shuffledCards.concat(shuffledCards));
        var grid = this.settings[this.difficultyLevel + 'Grid'];
        for (var i = 0 ; i < grid.length ; i++){
            this.spawnEntity(animalCardsCopy[i], grid[i].x, grid[i].y);
        }
    },
    getRandomCards: function (count){
        return this.utility.shuffle(this.currentDeck).slice(0, count);
    }
});
ig.main( '#canvas', MyGame, 60, 1024, 768, 1 );
});
