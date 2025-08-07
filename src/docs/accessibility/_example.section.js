const board = JXG.JSXGraph.initBoard('example', {
    boundingBox: [-5, 5, 5, -5],
    axis: true
});
var A = board.create('point', [2, 3], {
    name: 'point A',
    tabIndex: 0,
    snapToGrid: true,
    aria: {
        enabled: true,
        label: (self) => `${self.name} is at ${self.X().toFixed(0)} ${self.Y().toFixed(0)}`,
        live: 'polite'
    }
});