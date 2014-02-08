EntityCreditsButton = null

ig.module(
    'game.entities.ui.creditsButton'
).requires(
    'game.entities.baseButton',
    'game.entities.ui.creditCard'
).defines ->

  EntityCreditsButton = EntityBaseButton.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/credits.png', 700, 85
    size:
      x: 700
      y: 85
    update: ->
      if @clickOnMe()
        if ig.input.pressed('click')
          @currentAnim = @anims.clicked
        else if ig.input.released('click')
          @currentAnim = @anims.idle
          creditCard = ig.game.getEntitiesByType 'EntityCreditCard'
          if creditCard
            @cardTimer = new ig.Timer()

      if @cardTimer && @cardTimer.delta() > 0.25
        @creditCard = ig.game.spawnEntity 'EntityCreditCard', 30, 10
        delete @cardTimer
      @parent()
