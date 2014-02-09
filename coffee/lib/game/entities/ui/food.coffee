EntityFood = null

ig.module(
    'game.entities.ui.food'
).requires(
    'game.entities.baseSceneButton'
).defines ->

  EntityFood = EntityBaseSceneButton.extend
    animSheet: new ig.AnimationSheet 'media/food.png', 288, 288
    size:
      x: 288
      y: 288
    init: (x, y, settings) ->
      if !ig.global.wm
        @scene = LevelFood

      @sceneName = 'LevelFood'
      @parent(x, y, settings)
