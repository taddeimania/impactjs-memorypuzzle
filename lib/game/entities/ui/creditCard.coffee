EntityCreditCard = null

ig.module(
    'game.entities.ui.creditCard'
).requires(
    'game.entities.baseButton'
).defines ->

  EntityCreditCard = EntityBaseButton.extend
      animSheet: new ig.AnimationSheet 'media/creditCard.png', 973, 725
      size:
        x: 973
        y: 725
      zIndex: 10
      update: ->
        if @clickOnMe()
          if ig.input.pressed('click')
            @currentAnim = @anims.clicked
          else if ig.input.released('click')
            @currentAnim = @anims.idle
            @kill()

        @parent()
