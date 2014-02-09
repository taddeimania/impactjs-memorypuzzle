GAME_STATE =
  difficultySetting: ""
  sceneSetting: ""
  sceneName: ""

MyGame = null
StartScreen = null
SceneSelectScreen = null
EasyGame = null
MediumGame = null
HardGame = null

ig.module(
  'game.main'
)
.requires(
  'impact.game',
  'impact.font',
  'plugins.preloader',
  'game.settings.settings',
  'game.utility',
  'game.levels.animals',
  'game.levels.loadingscreen',
  'game.levels.sceneselect',
  'game.levels.food',
  'game.levels.transportation',
  'game.entities.ui.dither',
  'game.entities.ui.greatJob',
  'game.entities.ui.homeButton',
  'game.entities.ui.resetButton',
  'game.entities.ui.animals',
  'game.entities.ui.transportation',
  'game.entities.ui.food',
  'game.entities.ui.sceneSelectButton'
)
.defines ->
  MyGame = ig.Game.extend
    settings: new Settings()
    utility: new Utility()
    matchOne: ""
    matchTwo: ""
    cardSpawnQueue: []

    init: ->
      @currentDeck = @settings.deckAssociation[GAME_STATE.sceneName]
      @loadLevel GAME_STATE.sceneSetting
      @createBoard @settings.difficulty[GAME_STATE.difficultySetting]
      @createHud()

    createHud: ->
      x = ig.system.width / 2
      ig.game.spawnEntity 'EntityHomeButton', 50, 110
      ig.game.spawnEntity 'EntitySceneSelectButton', 50, 190

    clearHud: ->
      ig.game.getEntitiesByType('EntityHomeButton')[0].kill()
      ig.game.getEntitiesByType('EntitySceneSelectButton')[0].kill()

    update: ->
      if @cardSpawnQueue.length and @spawnCounter.delta() > 0.06
        card = this.cardSpawnQueue.shift()
        @spawnEntity card[0], card[1], card[2]
        @spawnCounter.reset()

      if @cardCount == 0
        getBg = ig.game.getEntitiesByType('EntityDither')[0]
        x = ig.system.width/2
        y = ig.system.height/2
        if !getBg
          @clearHud()
          ig.game.spawnEntity 'EntityDither', 0, 0
          ig.game.spawnEntity 'EntityGreatJob', 25, 100
          ig.game.spawnEntity 'EntityHomeButton', x-58, y-100
          ig.game.spawnEntity 'EntityResetButton', x-58, y
          ig.game.spawnEntity 'EntitySceneSelectButton', x-58, y+100
      @parent()

    createBoard: (card_count) ->
      @cardCount = card_count * 2
      shuffledCards = @getRandomCards card_count
      animalCardsCopy = @utility.shuffle(shuffledCards.concat(shuffledCards))
      grid = @settings[GAME_STATE.difficultySetting + 'Grid']
      @spawnCounter = new ig.Timer()
      i = 0

      while i < grid.length
        @cardSpawnQueue.push [
          animalCardsCopy[i]
          grid[i].x
          grid[i].y
        ]
        i++

    getRandomCards: (count) ->
      @utility.shuffle(@currentDeck).slice 0, count

  StartScreen = ig.Game.extend
    init: ->
      ig.music.add 'media/music/deci-bells.mp3'
      ig.music.volume = 0.2
      ig.music.play()
      ig.input.bind ig.KEY.MOUSE1, 'click'
      @loadLevel LevelLoadingscreen
      @firstLoad = true

  SceneSelectScreen = ig.Game.extend
    init: ->
      @loadLevel LevelSceneselect
      ig.game.spawnEntity 'EntityHomeButton', 8, 708
      ig.game.spawnEntity 'EntityAnimals', 40, 400
      ig.game.spawnEntity 'EntityFood', 368, 400
      ig.game.spawnEntity 'EntityTransportation', 696, 400

  EasyGame = MyGame.extend
    difficulty: "easy"

  MediumGame = MyGame.extend
    difficulty: "medium"

  HardGame = MyGame.extend
    difficulty: "hard"

  ig.main '#canvas', StartScreen, 60, 1024, 768, 1
