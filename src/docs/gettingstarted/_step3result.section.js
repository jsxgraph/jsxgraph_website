
    (function () {
        const BOARDID = 'example-blank';
        const board = JXG.JSXGraph.initBoard(BOARDID, {boundingbox: [-10, 10, 10, -10], axis:true});
        var A = board.create('point', [2, 1], {name: 'A'});
        var f = board.create('functiongraph', [function(x) { return 0.5*x*x-2*x;}], {strokeWidth: 3});
    })();