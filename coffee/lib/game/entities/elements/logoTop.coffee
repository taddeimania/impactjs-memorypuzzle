EntityLogoTop = null

ig.module(
    'game.entities.elements.logoTop'
).requires(
    'game.entities.elements.baseLogo'
).defines ->

  EntityLogoTop = EntityBaseLogo.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/logotop.png', 708, 132
    size:
      x: 708
      y: 132
    inEnd: 204
    upEnd: 204
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 2
      @parent x, y, settings
