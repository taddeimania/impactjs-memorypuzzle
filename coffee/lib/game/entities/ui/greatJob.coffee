EntityGreatJob = null

ig.module(
    'game.entities.ui.greatJob'
).requires(
    'impact.entity'
).defines ->

  EntityGreatJob = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/greatJob.png', 980, 85
    size:
      x: 980
      y: 85
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @parent x, y, settings
