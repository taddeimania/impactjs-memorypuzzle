ig.module( 
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'game.settings.settings',
    'game.utility',
    'game.levels.camping',
    'game.levels.loadingscreen',
    'game.levels.sceneselect',
    'game.levels.underthesea',
    'game.levels.kitchen',
    'game.levels.transportation',
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
    'game.entities.animals.turtle',
    'game.entities.ui.dither',
    'game.entities.ui.homeButton',
    'game.entities.ui.resetButton',
    'game.entities.ui.sceneSelectButton'
)
.defines(function(){

GAME_STATE = {
    difficultySetting: "",
    sceneSetting: "",
    sceneName: ""
};

MyGame = ig.Game.extend({
    settings: new Settings(),
    utility: new Utility(),
    matchOne: "",
    matchTwo: "",
    cardSpawnQueue: [],
    init: function() {
        this.currentDeck = this.settings.deckAssociation[GAME_STATE.sceneName];
        this.loadLevel(GAME_STATE.sceneSetting);
        this.createBoard(this.settings.difficulty[GAME_STATE.difficultySetting]);
        this.createHud();
    },
    createHud: function () {
        var x = ig.system.width/2;
        ig.game.spawnEntity('EntityHomeButton', 8, 708);
        ig.game.spawnEntity('EntitySceneSelectButton', 900, 708);
    },
    clearHud: function () {
        ig.game.getEntitiesByType('EntityHomeButton')[0].kill();
        ig.game.getEntitiesByType('EntitySceneSelectButton')[0].kill();
    },
    update: function() {
        if (this.cardSpawnQueue.length){
            if (this.spawnCounter.delta() > 0.06){
                var card = this.cardSpawnQueue.shift();
                this.spawnEntity(card[0], card[1], card[2]);
                this.spawnCounter.reset();
            }
        }
        if (this.cardCount === 0){
            var getBg = ig.game.getEntitiesByType('EntityDither')[0];
            var x = ig.system.width/2,
                y = ig.system.height/2;
            if (!getBg){
                this.clearHud();
                ig.game.spawnEntity('EntityDither', 0, 0);
                ig.game.spawnEntity('EntityHomeButton', x-58, y-100);
                ig.game.spawnEntity('EntityResetButton', x-58, y);
                ig.game.spawnEntity('EntitySceneSelectButton', x-58, y+100);
            }
        }
        this.parent();
    },
    createBoard: function (cardCount){
        this.cardCount = cardCount * 2;
        var shuffledCards = this.getRandomCards(cardCount);
        var animalCardsCopy = this.utility.shuffle(shuffledCards.concat(shuffledCards));
        var grid = this.settings[GAME_STATE.difficultySetting + 'Grid'];
        this.spawnCounter = new ig.Timer();
        for (var i = 0 ; i < grid.length ; i++){
            this.cardSpawnQueue.push([animalCardsCopy[i], grid[i].x, grid[i].y]);
        }
    },
    getRandomCards: function (count){
        return this.utility.shuffle(this.currentDeck).slice(0, count);
    }
});

StartScreen = ig.Game.extend({
    instructText: new ig.Font('media/font.png'),
    init: function () {
        ig.input.bind( ig.KEY.MOUSE1, 'click' );
        this.loadLevel(LevelLoadingscreen);
        this.firstLoad = true;
    }
});

SceneSelectScreen = ig.Game.extend({
    instructText: new ig.Font( 'media/font.png' ),
    init: function () {
        this.loadLevel(LevelSceneselect);

        ig.game.spawnEntity('EntityHomeButton', 8, 708);
    },
    draw: function () {
        this.parent();

        var x = ig.system.width/2,
            y = ig.system.height - 10;
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
