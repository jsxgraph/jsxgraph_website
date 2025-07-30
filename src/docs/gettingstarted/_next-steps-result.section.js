
    (function () {
        const BOARDID = 'next-steps-result';
        const board = JXG.JSXGraph.initBoard(BOARDID, {boundingbox: [-10, 10, 10, -10], axis: true });
        var A = board.create('point', [ 2,  1], { name: 'A' });
        var f = board.create(
            'functiongraph',
            [function(x) { return 0.5 * x * x - 2 * x; }],
            { strokeWidth: 3 }
        );
        var B = board.create('point', [-4,  5], { name: 'B' });
        var C = board.create('point', [-6, -5], { name: 'C' });
        var p = board.create('polygon', [A, B, C], {});
        var c = board.create('circle', [A, B, C], {});
    })();