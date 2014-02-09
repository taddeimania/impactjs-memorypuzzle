EntityLoadingScreenBlur = null

ig.module(
    'game.entities.screens.loadingScreenBlur'
).requires(
    'impact.entity'
).defines ->

  EntityLoadingScreenBlur = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/background.png', 1024, 768
    size:
      x: 1024
      y: 768
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @parent x, y, settings
