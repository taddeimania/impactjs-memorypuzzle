EntityFoodScreen = null

ig.module(
    'game.entities.screens.foodScreen'
).requires(
    'impact.entity'
).defines ->

  EntityFoodScreen = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/foodbg.png', 1024, 768
    size:
      x: 1024
      y: 768
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @parent x, y, settings
