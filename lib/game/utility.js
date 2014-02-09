var Utility;

Utility = null;

ig.module('game.utility').requires().defines(function() {
  return Utility = ig.Class.extend({
    shuffle: function(list) {
      var i, j, t;
      i = 1;
      while (i < list.length) {
        j = Math.floor(Math.random() * (1 + i));
        if (j !== i) {
          t = list[i];
          list[i] = list[j];
          list[j] = t;
        }
        i++;
      }
      return list;
    }
  });
});
