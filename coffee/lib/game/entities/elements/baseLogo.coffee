EntityBaseLogo = null

ig.module(
    'game.entities.elements.baseLogo'
).requires(
    'impact.entity'
).defines ->

  EntityBaseLogo = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/logotop.png', 708, 144
    size:
      x: 708
      y: 144
    init: (x, y, settings) ->
        @addAnim 'idle', 1, [0]
        @currentAnim = @anims.idle
        @zIndex = 2
        @parent x, y, settings
    tweenIn: ->
      @tween({pos: {x: 156, y: @inEnd}}, 0.4).start()
    tweenUp: ->
      @tween({pos: {x: 156, y: @upEnd}}, 0.4).start()
