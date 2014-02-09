EntityResetButton = null

ig.module(
    'game.entities.ui.resetButton'
).requires(
    'game.entities.baseButton'
).defines ->

  EntityResetButton = EntityBaseButton.extend
    animSheet: new ig.AnimationSheet 'media/resetButton.png', 116, 54
    size:
      x: 116
      y: 54
    update: ->
      if @clickOnMe()
        if ig.input.pressed('click')
          @currentAnim = @anims.clicked
        else if ig.input.released('click')
          @currentAnim = @anims.idle
          @clearQueue()
          ig.system.setGame MyGame
      @parent()
    clearQueue: ->
      MyGame.matchOne = undefined
      MyGame.matchTwo = undefined
