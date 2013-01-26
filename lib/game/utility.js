ig.module(
    'game.utility'
).requires(
).defines(function(){
Utility = ig.Class.extend({
    shuffle: function (list) {
        // CREDIT: http://dtm.livejournal.com/38725.html
        var i, j, t;
        for (i = 1; i < list.length; i++) {
            j = Math.floor(Math.random()*(1+i));
            if (j != i) {
                t = list[i];
                list[i] = list[j];
                list[j] = t;
            }
        }
        return list;
    }
});

});