EntityCloudThree = null

ig.module(
    'game.entities.elements.cloudThree'
).requires(
    'impact.entity'
).defines ->

  EntityCloudThree = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/cloud_3.png', 360, 120
    size:
      x: 360
      y: 120
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 4
      @parent x, y, settings
      @pos.x = -360
      @pos.y = 224
      myTween = @tween {pos: {x: 1025, y: 224}}, 336, {delay: 2, easing: ig.Tween.Easing.Linear.EaseNone}
      myTween.start()
    update: ->
      @parent()
      if @pos.x > 1024
        ig.game.spawnEntity 'EntityCloudThree'
        @kill()
        ig.game.sortEntitiesDeferred()
