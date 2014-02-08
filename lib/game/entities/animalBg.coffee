EntityAnimalBg = null

ig.module(
    'game.entities.animalBg'
).requires(
    'impact.entity'
).defines ->

  EntityAnimalBg = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/animalbg.png', 1024, 768
    size:
      x: 1024
      y: 768
    init: (x, y, settings) ->
      @parent x, y, settings
      @zIndex = -10
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
