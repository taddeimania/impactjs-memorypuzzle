EntityBaseSceneButton = null

ig.module(
    'game.entities.baseSceneButton'
).requires(
    'game.entities.baseButton'
).defines ->

  EntityBaseSceneButton = EntityBaseButton.extend
    animSheet: new ig.AnimationSheet 'media/base.png', 288, 288
    size:
      x: 288
      y: 288
    update: ->
      if this.clickOnMe()
        if ig.input.released 'click'
          GAME_STATE.sceneSetting = @scene
          GAME_STATE.sceneName = @sceneName
          this.currentAnim = @anims.idle
          ig.system.setGame MyGame

      @parent()
