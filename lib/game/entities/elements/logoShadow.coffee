EntityLogoShadow = null

ig.module(
    'game.entities.elements.logoShadow'
).requires(
    'impact.entity'
).defines ->

  EntityLogoShadow = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/logoshadow.png', 756, 36
    size:
      x: 756
      y: 36
    end: 624
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 4
      @parent x, y, settings
    tweenIn: ->
      @tween({pos: {x: 136, y: @end}}, 0.4).start()
