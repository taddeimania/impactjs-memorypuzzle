EntityLogoBottom = null

ig.module(
    'game.entities.elements.logoBottom'
).requires(
    'game.entities.elements.baseLogo'
).defines ->

  EntityLogoBottom = EntityBaseLogo.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/newLogo.png', 708, 132
    size:
      x: 708
      y: 132
    inEnd: 324
    upEnd: 204
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 4
      @parent x, y, settings
