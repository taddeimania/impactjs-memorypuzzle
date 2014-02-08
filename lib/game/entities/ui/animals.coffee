EntityAnimals = null

ig.module(
    'game.entities.ui.animals'
).requires(
    'game.entities.baseSceneButton'
).defines ->

  EntityAnimals = EntityBaseSceneButton.extend
    animSheet: new ig.AnimationSheet 'media/animals.png', 288, 288
    size:
      x: 288
      y: 288
    init: (x, y, settings) ->
      if  !ig.global.wm
        @scene = LevelAnimals
      @sceneName = 'LevelAnimals'
      @parent x, y, settings
