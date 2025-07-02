(function () {
    var board = JXG.JSXGraph.initBoard('license',
        {boundingbox: [-8, 8, 8,-8], axis: false, showcopyright: true, shownavigation: false,
            pan: {
                needTwoFingers: true
            }
        });
    let sl = board.create('slider', [[-6, -6], [5, -6], [0, 0.4, 1]], {

    });

    let txt = board.create('text', [-6, 6, 'Vectorfield \\((cos(y), sin(x), z) \\)']);

    const view = board.create('view3d',
        [
            [-4, -4],
            [7.5, 7.5],
            [[-3, 3], [-3, 3], [-3, 3]]
        ], {});
    var vf = view.create('vectorfield3d', [
        [(x, y, z) => Math.cos(y), (x, y, z) => Math.sin(x), (x, y, z) => z],
        [-2, 5, 2], // x from -2 to 2 in 5 steps
        [-2, 5, 2], // y
        [-2, 5, 2] // z
    ], {
        strokeColor: 'red',
        scale: () => sl.Value(),
        arrowhead: { enabled: true }
    });


})
();