EntityMediumButton = null

ig.module(
    'game.entities.ui.mediumButton'
).requires(
    'game.entities.baseDifficultyButton'
).defines ->

  EntityMediumButton = EntityBaseDifficultyButton.extend
    animSheet: new ig.AnimationSheet 'media/mediumbutton.png', 216, 72
    difficultySetting: "medium"
