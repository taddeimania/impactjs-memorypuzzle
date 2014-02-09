EntityCard = null

ig.module(
    'game.entities.card'
).requires(
    'impact.entity'
).defines ->

  EntityCard = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/cards/cardflip_1920x180.png', 120, 180
    underCard: new ig.Image 'media/iesux.png'
    match: null
    state: "down"
    value: ""
    size:
      x: 120
      y: 175

    init: (x, y, settings) ->
      @parent x, y, settings
      @sound = new ig.Sound @soundFile
      @addAnim 'spawn', 0.02, [0, 1, 2], true
      @addAnim 'flipCard', 0.01, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], true
      @addAnim 'reverseCard', 0.01, [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2], true
      @addAnim 'killCard', 0.02, [14, 15], true

    update: ->
      if @clickOnMe() and @currentAnim.tile == 2
        @turnCardUp()
        @pushQueue @value
      else if @clickOnMe() and @state != 'up' and @currentAnim.tile == 13
        @turnCardDown()
        @popQueue()

      if @noMatchTimer && @noMatchTimer.delta() > 0.1
        @bindClick()
        @matchNotFound ig.game.entities
        delete @noMatchTimer

      if @matchTimer and @matchTimer.delta() > 0.1
        @bindClick()
        @matchFound ig.game.entities
        delete @matchTimer

      if @currentAnim.tile == 15
        @kill()

      @parent()

    draw: ->
      @parent()
      if @currentAnim.tile == 13
        @underCard.draw @pos.x, @pos.y

    unbindClick: ->
      ig.input.unbind ig.KEY.MOUSE1, 'click'

    bindClick: ->
      ig.input.bind ig.KEY.MOUSE1, 'click'

    turnCardDown: ->
      @currentAnim = @anims.reverseCard.rewind()
      @state = "down"

    turnCardUp: ->
      @currentAnim = @anims.flipCard.rewind()
      @state = "up"

    popQueue: ->
      if !MyGame.matchOne
        MyGame.matchOne = undefined
      else
        MyGame.matchTwo = undefined

    pushQueue: (val) ->
      if !MyGame.matchOne
        MyGame.matchOne = val
      else
        MyGame.matchTwo = val
        if MyGame.matchOne == MyGame.matchTwo
          @unbindClick()
          @matchTimer = new ig.Timer 0.5
        else
          @unbindClick()
          @noMatchTimer = new ig.Timer 0.5

    clearQueue: ->
      MyGame.matchOne = undefined
      MyGame.matchTwo = undefined

    matchFound: (entities) ->
      @sound.play()
      @match = "yes"
      for entity, i in entities
        if entities[i].state == 'up'
          ig.game.cardCount--
          entities[i].currentAnim = @anims.killCard.rewind()

      @clearQueue()

    matchNotFound: (entities) ->
      @match = "no"
      for entity, i in entities
        if entities[i].state == 'up'
          entities[i].turnCardDown()
      @clearQueue()

    clickOnMe: ->
      return ig.input.pressed('click') and
        (ig.input.mouse.y > @pos.y and
         ig.input.mouse.y < @pos.y + @size.y) and
        (ig.input.mouse.x > @pos.x and
         ig.input.mouse.x < @pos.x + @size.x)
