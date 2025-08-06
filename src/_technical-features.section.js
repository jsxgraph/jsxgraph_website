// Define the id of your board in BOARDID

//JXG.Options.label.autoposition = true;

const board = JXG.JSXGraph.initBoard("technical-features", {
    boundingbox: [-5, 5, 5, -5],
    axis: true,
    pan: { enabled: false },
    zoom: { enabled: false },
    showNavigation: false
});

var curve = board.create('implicitcurve', ['-(y**2) + x**3 - 2 * x + 1'], {strokeWidth: 2});
var A = board.create('glider', [-1.5, 0, curve], { name: '\\(A\\)'});
var B = board.create('glider', [0, 1, curve], { name: '\\(B\\)'});
var line = board.create('line', [A, B], {color: 'black', strokeWidth: 1});
var C = board.create('otherintersection', [line, curve, [A, B]], { name: '\\(C\\)', color: 'blue'});
var D = board.create('point', [() => C.X(), () => -C.Y()], {name: '\\(-C = A + B\\)', color: 'blue'});

