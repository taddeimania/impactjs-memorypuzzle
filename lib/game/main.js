ig.module( 
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'game.settings.settings',
    'game.utility',
    'game.levels.animals',
    'game.levels.loadingscreen',
    'game.levels.sceneselect',
    'game.levels.food',
    'game.levels.transportation',
    'game.entities.ui.dither',
    'game.entities.ui.homeButton',
    'game.entities.ui.resetButton',
    'game.entities.ui.animals',
    'game.entities.ui.transportation',
    'game.entities.ui.food',
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
        ig.game.spawnEntity('EntityHomeButton', 50, 110);
        ig.game.spawnEntity('EntitySceneSelectButton', 50, 190);
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
        ig.game.spawnEntity('EntityAnimals', 40, 400);
        ig.game.spawnEntity('EntityFood', 368, 400);
        ig.game.spawnEntity('EntityTransportation', 696, 400);
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
