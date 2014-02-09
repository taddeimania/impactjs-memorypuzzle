EntityLoadingScreen = null

ig.module(
    'game.entities.screens.loadingScreen'
).requires(
    'impact.entity',
    'plugins.tween',
    'game.entities.ui.easyButton',
    'game.entities.ui.mediumButton',
    'game.entities.ui.hardButton',
    'game.entities.ui.creditsButton',
    'game.entities.elements.cloudOne',
    'game.entities.elements.cloudTwo',
    'game.entities.elements.cloudThree',
    'game.entities.elements.logoShadow',
    'game.entities.elements.logoBottom',
    'game.entities.elements.logoMiddle',
    'game.entities.elements.logoTop'
).defines ->

  EntityLoadingScreen = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/background.png', 1024, 768
    size:
      x: 1024
      y: 768
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @difficultyTimer = new ig.Timer()
      @cloudOne = ig.game.spawnEntity 'EntityCloudOne'
      @cloudTwo = ig.game.spawnEntity 'EntityCloudTwo'
      @cloudThree = ig.game.spawnEntity 'EntityCloudThree'
      @logoTop = ig.game.spawnEntity 'EntityLogoTop', 156, -144
      @logoMiddle = ig.game.spawnEntity 'EntityLogoMiddle', 156, -144
      @logoBottom = ig.game.spawnEntity 'EntityLogoBottom', 156, -144
      @logoShadow = ig.game.spawnEntity 'EntityLogoShadow', 136, 800
      ig.game.sortEntitiesDeferred()
      @parent x, y, settings
    update: ->
      if @difficultyTimer and @difficultyTimer.delta() > 2.5
        @easyButton = ig.game.spawnEntity 'EntityEasyButton', 156, 88
        @mediumButton = ig.game.spawnEntity 'EntityMediumButton', 400, 88
        @hardButton = ig.game.spawnEntity 'EntityHardButton', 648, 88
        @creditsButton = ig.game.spawnEntity 'EntityCreditsButton', 160, 520
        delete @difficultyTimer
    draw: ->
      @parent()
      if GAME_STATE.difficultySetting
        @moveLogoUp()
      else
        @moveLogoIn()
    moveLogoIn: ->
      @logoTop.tweenIn()
      @logoMiddle.tweenIn()
      @logoBottom.tweenIn()
      @logoShadow.tweenIn()
    moveLogoUp: ->
      @logoTop.tweenUp()
      @logoMiddle.tweenUp()
      @logoBottom.tweenUp()
      if @easyButton
        @logoBottom.anims.idle = new ig.Animation new ig.AnimationSheet('media/_homescreen/newLogo.png', 708, 144), 1, [0]
        @creditsButton.kill()
        @logoShadow.kill()
        @easyButton.kill()
        @mediumButton.kill()
        @hardButton.kill()
