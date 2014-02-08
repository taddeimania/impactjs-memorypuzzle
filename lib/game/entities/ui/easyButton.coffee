EntityEasyButton = null

ig.module(
    'game.entities.ui.easyButton'
).requires(
    'game.entities.baseDifficultyButton'
).defines ->

  EntityEasyButton = EntityBaseDifficultyButton.extend
    animSheet: new ig.AnimationSheet 'media/easybutton.png', 216, 72
    difficultySetting: 'easy'
