var EasyGame, GAME_STATE, HardGame, MediumGame, MyGame, SceneSelectScreen, StartScreen;

GAME_STATE = {
  difficultySetting: "",
  sceneSetting: "",
  sceneName: ""
};

MyGame = null;

StartScreen = null;

SceneSelectScreen = null;

EasyGame = null;

MediumGame = null;

HardGame = null;

ig.module('game.main').requires('impact.game', 'impact.font', 'plugins.preloader', 'game.settings.settings', 'game.utility', 'game.levels.animals', 'game.levels.loadingscreen', 'game.levels.sceneselect', 'game.levels.food', 'game.levels.transportation', 'game.entities.ui.dither', 'game.entities.ui.greatJob', 'game.entities.ui.homeButton', 'game.entities.ui.resetButton', 'game.entities.ui.animals', 'game.entities.ui.transportation', 'game.entities.ui.food', 'game.entities.ui.sceneSelectButton').defines(function() {
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
      return this.createHud();
    },
    createHud: function() {
      var x;
      x = ig.system.width / 2;
      ig.game.spawnEntity('EntityHomeButton', 50, 110);
      return ig.game.spawnEntity('EntitySceneSelectButton', 50, 190);
    },
    clearHud: function() {
      ig.game.getEntitiesByType('EntityHomeButton')[0].kill();
      return ig.game.getEntitiesByType('EntitySceneSelectButton')[0].kill();
    },
    update: function() {
      var card, getBg, x, y;
      if (this.cardSpawnQueue.length && this.spawnCounter.delta() > 0.06) {
        card = this.cardSpawnQueue.shift();
        this.spawnEntity(card[0], card[1], card[2]);
        this.spawnCounter.reset();
      }
      if (this.cardCount === 0) {
        getBg = ig.game.getEntitiesByType('EntityDither')[0];
        x = ig.system.width / 2;
        y = ig.system.height / 2;
        if (!getBg) {
          this.clearHud();
          ig.game.spawnEntity('EntityDither', 0, 0);
          ig.game.spawnEntity('EntityGreatJob', 25, 100);
          ig.game.spawnEntity('EntityHomeButton', x - 58, y - 100);
          ig.game.spawnEntity('EntityResetButton', x - 58, y);
          ig.game.spawnEntity('EntitySceneSelectButton', x - 58, y + 100);
        }
      }
      return this.parent();
    },
    createBoard: function(card_count) {
      var animalCardsCopy, grid, i, shuffledCards, _results;
      this.cardCount = card_count * 2;
      shuffledCards = this.getRandomCards(card_count);
      animalCardsCopy = this.utility.shuffle(shuffledCards.concat(shuffledCards));
      grid = this.settings[GAME_STATE.difficultySetting + 'Grid'];
      this.spawnCounter = new ig.Timer();
      i = 0;
      _results = [];
      while (i < grid.length) {
        this.cardSpawnQueue.push([animalCardsCopy[i], grid[i].x, grid[i].y]);
        _results.push(i++);
      }
      return _results;
    },
    getRandomCards: function(count) {
      return this.utility.shuffle(this.currentDeck).slice(0, count);
    }
  });
  StartScreen = ig.Game.extend({
    init: function() {
      ig.music.add('media/music/deci-bells.mp3');
      ig.music.volume = 0.2;
      ig.music.play();
      ig.input.bind(ig.KEY.MOUSE1, 'click');
      this.loadLevel(LevelLoadingscreen);
      return this.firstLoad = true;
    }
  });
  SceneSelectScreen = ig.Game.extend({
    init: function() {
      this.loadLevel(LevelSceneselect);
      ig.game.spawnEntity('EntityHomeButton', 8, 708);
      ig.game.spawnEntity('EntityAnimals', 40, 400);
      ig.game.spawnEntity('EntityFood', 368, 400);
      return ig.game.spawnEntity('EntityTransportation', 696, 400);
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
  return ig.main('#canvas', StartScreen, 60, 1024, 768, 1);
});
