EntityDither = null

ig.module(
    'game.entities.ui.dither'
).requires(
    'impact.entity'
).defines ->

  EntityDither = ig.Entity.extend
      animSheet: new ig.AnimationSheet 'media/dither.png', 1024, 768
      size:
        x: 1024
        y: 768
      init: (x, y, settings) ->
        @addAnim 'idle', 1, [0]
        @currentAnim = @anims.idle
        @currentAnim.alpha = 0.3
        @parent x, y, settings
