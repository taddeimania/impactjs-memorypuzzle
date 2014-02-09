EntityCloudOne = null

ig.module(
    'game.entities.elements.cloudOne'
).requires(
    'impact.entity'
).defines ->

  EntityCloudOne = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/_homescreen/cloud_1.png', 108, 48
    size:
      x: 108
      y: 48
    init: (x, y, settings) ->
      @addAnim 'idle', 1, [0]
      @currentAnim = @anims.idle
      @zIndex = 2
      @parent x, y, settings
      @pos.x = -108
      @pos.y = 500
      @myTween = @tween {pos: {x: 1025, y: 500}}, 80, {delay: 1, easing: ig.Tween.Easing.Linear.EaseNone}
      @myTween.start()
    update: ->
      @parent()
      if @pos.x > 1024
        ig.game.spawnEntity 'EntityCloudOne'
        @kill()
        ig.game.sortEntitiesDeferred()
