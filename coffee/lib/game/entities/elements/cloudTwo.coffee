EntityCloudTwo = null

ig.module(
    'game.entities.elements.cloudTwo'
).requires(
    'impact.entity'
).defines ->

  EntityCloudTwo = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/cloud_2.png', 168, 72
    size:
      x: 168
      y: 72
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 2
      @parent x, y, settings
      @pos.x = 1024
      @pos.y = 420
      myTween = @tween {pos: {x: -169, y: 420}}, 132, {easing: ig.Tween.Easing.Linear.EaseNone}
      myTween.start()
    update: ->
      @parent()
      if @pos.x < -168
        ig.game.spawnEntity 'EntityCloudTwo'
        @kill()
        ig.game.sortEntitiesDeferred()
