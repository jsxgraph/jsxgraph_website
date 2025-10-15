
    (function () {
        var board = JXG.JSXGraph.initBoard(
            'view-result', {
                boundingbox: [-10, 10, 10, -10],
                axis:false,
                pan: { enabled: false },
                zoom: { enabled: false }
            });
        var view = board.create('view3d',
            [
                [-4, -3],
                [8, 8],
                [
                    [-5, 5],
                    [-5, 5],
                    [-5, 5]
                ]
            ],
            { projection: 'central' });

        var p = view.create('point3d', [1, 1, 2], {size: 5, name:'A'});

        view.create('line3d', [p, [1, 0, 0],  [0, () => -p.X() - 5]], {dash: 1});
        view.create('line3d', [p, [0, 1, 0],  [0, () => -p.Y() - 5]], {dash: 1});
        view.create('line3d', [p, [0, 0, 1],  [0, () => -p.Z() - 5]], {dash: 1});
    })();