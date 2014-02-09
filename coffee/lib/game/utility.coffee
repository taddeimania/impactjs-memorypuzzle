Utility = null
ig.module(
    'game.utility'
).requires(
).defines ->
  Utility = ig.Class.extend
      shuffle: (list) ->
        i = 1
        while i < list.length
          j = Math.floor(Math.random() * (1 + i))
          unless j is i
            t = list[i]
            list[i] = list[j]
            list[j] = t
          i++
        list
