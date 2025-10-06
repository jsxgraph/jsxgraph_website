
    (function () {
        const BOARDID = 'step3-result';
        const board = JXG.JSXGraph.initBoard(BOARDID, {boundingbox: [-10, 10, 10, -10], axis:true});
        var A = board.create('point', [2, 1], {name: 'A'});
        var f = board.create('functiongraph', [(x) => 0.5 * x**2 - 2 * x], {strokeWidth: 3});
    })();