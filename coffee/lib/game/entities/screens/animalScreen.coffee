EntityAnimalScreen = null

ig.module(
    'game.entities.screens.animalScreen'
).requires(
    'impact.entity'
).defines ->

  EntityAnimalScreen = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/animalscenebg.png', 1024, 768
    size:
      x: 1024
      y: 768
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @parent x, y, settings
