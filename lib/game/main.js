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
    'game.levels.loadingscreen',
    'game.levels.sceneselect',
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

GAME_STATE = {
    difficultySetting: "",
    sceneSetting: ""
};

MyGame = ig.Game.extend({
    settings: new Settings(),
    utility: new Utility(),
    matchOne: "",
    matchTwo: "",
    font: new ig.Font( 'media/04b03.font.png' ),
    init: function() {

        // This is all here until i've made the difficulty / scene selector screens
        this.currentDeck = this.settings.animalCards;
        console.log(GAME_STATE);
        this.loadLevel(LevelLevel1);
        this.createBoard(this.settings.difficulty[GAME_STATE.difficultySetting]);
        // spawn RESET button -> clears all cards, reloads
        // spawn HOME button -> returns you back to StartScreen
    },
    update: function() {
        if (this.cardCount === 0){
            this.createBoard(this.settings.difficulty[GAME_STATE.difficultySetting]);
        }
        this.parent();
    },
    createBoard: function (cardCount){
        this.cardCount = cardCount * 2;
        var shuffledCards = this.getRandomCards(cardCount);
        var animalCardsCopy = this.utility.shuffle(shuffledCards.concat(shuffledCards));
        var grid = this.settings[GAME_STATE.difficultySetting + 'Grid'];
        for (var i = 0 ; i < grid.length ; i++){
            this.spawnEntity(animalCardsCopy[i], grid[i].x, grid[i].y);
        }
    },
    getRandomCards: function (count){
        return this.utility.shuffle(this.currentDeck).slice(0, count);
    }
});

StartScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/04b03.font.png' ),
    background: new ig.Image('media/LoadingScreen.png'),
    init: function () {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        this.loadLevel(LevelLoadingscreen);
    },
    draw: function () {
        this.parent();

        var x = ig.system.width/2,
            y = ig.system.height - 10;
        this.instructText.draw( 'A BRAIN TEASER', x+50, y - 220, ig.Font.ALIGN.LEFT);
        this.instructText.draw( 'BY: JOEL TADDEI', x+30, y - 180, ig.Font.ALIGN.LEFT);
        this.instructText.draw( '  & KYLE LAWSON', x+30, y - 140, ig.Font.ALIGN.LEFT);
    }
});

SceneSelectScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/04b03.font.png' ),
    init: function () {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        this.loadLevel(LevelSceneselect);

    },
    draw: function () {
        this.parent();

        var x = ig.system.width/2,
            y = ig.system.height - 10;
        this.instructText.draw( 'SELECT A SCENE', x+50, y - 220, ig.Font.ALIGN.LEFT);
    }
});

EasyGame = MyGame.extend({
    difficulty: "easy"
});

MediumGame = MyGame.extend({
    difficulty: "medium"
});

HardGame = MyGame.extend({
    difficulty: "hard"
});

ig.main( '#canvas', StartScreen, 60, 1024, 768, 1 );
});
