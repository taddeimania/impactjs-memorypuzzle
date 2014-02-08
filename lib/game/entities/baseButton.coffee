EntityBaseButton = null

ig.module(
    'game.entities.baseButton'
).requires(
    'impact.entity'
).defines ->

  EntityBaseButton = ig.Entity.extend
    clickOnMe: ->
      return (ig.input.mouse.y > @pos.y and
        ig.input.mouse.y < @pos.y + @size.y) and
        (ig.input.mouse.x > @pos.x and
        ig.input.mouse.x < @pos.x + @size.x)

    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @addAnim 'clicked', 1, [1], true
      @currentAnim = @anims.idle
      @parent x, y, settings
