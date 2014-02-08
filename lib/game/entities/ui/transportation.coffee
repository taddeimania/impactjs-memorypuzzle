EntityTransportation = null

ig.module(
    'game.entities.ui.transportation'
).requires(
    'game.entities.baseSceneButton'
).defines ->

  EntityTransportation = EntityBaseSceneButton.extend
    animSheet: new ig.AnimationSheet 'media/transportation.png', 288, 288
    size:
      x: 288
      y: 288
    init: (x, y, settings) ->
      if !ig.global.wm
        @scene = LevelTransportation

      @sceneName = 'LevelTransportation'
      @parent(x, y, settings)
