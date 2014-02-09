EntityLogoMiddle = null

ig.module(
    'game.entities.elements.logoMiddle'
).requires(
    'game.entities.elements.baseLogo'
).defines ->

  EntityLogoMiddle = EntityBaseLogo.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/logomid.png', 708, 132
    size:
      x: 708
      y: 132
    inEnd: 264
    upEnd: 204
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 3
      @parent x, y, settings
