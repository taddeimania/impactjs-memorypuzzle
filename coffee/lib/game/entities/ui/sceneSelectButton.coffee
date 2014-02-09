EntitySceneSelectButton = null

ig.module(
    'game.entities.ui.sceneSelectButton'
).requires(
    'game.entities.baseButton'
).defines ->

  EntitySceneSelectButton = EntityBaseButton.extend
    animSheet: new ig.AnimationSheet 'media/sceneselectbutton.png', 116, 54
    size:
      x: 116
      y: 54
    update: ->
      if @clickOnMe()
        if ig.input.pressed('click')
          @currentAnim = @anims.clicked
        else if (ig.input.released('click'))
          @currentAnim = @anims.idle
          @clearQueue()
          ig.system.setGame SceneSelectScreen
      @parent()
    clearQueue: ->
      MyGame.matchOne = undefined
      MyGame.matchTwo = undefined
