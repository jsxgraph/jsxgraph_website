
    (function () {
        const BOARDID = 'attributes-result';
        const board = JXG.JSXGraph.initBoard(BOARDID, {boundingbox: [-10, 10, 10, -10], axis: true });
        A = board.create('point', [ 2,  1], { name: 'A', fixed: true });
        var f = board.create(
            'functiongraph',
            [(x) => 0.5 * x**2 - 2 * x],
            { strokeWidth: 3 }
        );
        var B = board.create('point', [-4,  5], { name: 'B' });
        var C = board.create('point', [-6, -5], { name: 'C' });
        var p = board.create('polygon', [A, B, C], { fillcolor: '#ff0099'});
        var c = board.create('circle', [A, B, C], {
            strokeColor: 'orange',
            strokeWidth: 5,
            dash: 3
        });
    })();