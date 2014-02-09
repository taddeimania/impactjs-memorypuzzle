EntityHomeButton = null

ig.module(
    'game.entities.ui.homeButton'
).requires(
    'impact.entity'
).defines ->

  EntityHomeButton = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/home.png', 116, 54
    size:
      x: 108
      y: 54
    scene: ''
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
    update: ->
      if @clickOnMe()
        if ig.input.pressed('click')
          @currentAnim = @anims.clicked
        else if ig.input.released('click')
          GAME_STATE.difficultySetting = ""
          @currentAnim = @anims.idle
          @clearQueue()
          ig.system.setGame StartScreen
      @parent()
    clearQueue: ->
      MyGame.matchOne = undefined
      MyGame.matchTwo = undefined
