const BOARDID = 'examples';

let input = [[0, 0, 2], [2, 3, 0], [0, 1, 0]];

let active = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

let settings = {
    'projection': {
        'top': true,        // top view
        'north': true,      // view from north
        'east': true,       // view from east
        'south': true,      // view from south
        'west': true,       // view from west
        'base': true,       // view from below
        'update': false     // false: projections from the initial matrix ([[.., .., ..], [.., .., ..], [.., ..,.]] are displayed
    },                      // true:  projections from the active matrix are displayed
    'navigation': {
        'visible': true,    // show navigation button
        'keyboard': true,   // keyboard control
        'azimuth': true,    // azimuth control
        'elevation': true,  // elevation control
        'view': [-0.3, 0.5] // initial values for azimuth and elevation (also used for the reset button "O")
    },
    'output': {             // xx view of input matrix equals xx view of active matrix
        'top': true,        // add top value to output()
        'north': true,      // add north value to output()
        'east': true,       // add east value to output()
        'south': true,      // add south value to output()
        'west': true,       // add west value to output()
        'base': true,       // add base value to output()
        'matrix': true      // add active matrix to output()
    }
}

// JSXGraph board

let board = JXG.JSXGraph.initBoard(BOARDID, boardAttr());

let view = initBoard3D(board);

let superM = {
    'top':
    input
}
let mx = 1;
let my = 1;

let cubes = new Array();

let col = {
    'north': '#009e73',
    'south': '#f0e442',
    'west': '#56b4e9',
    'east': '#d65c00',
    'top': '#0072b2',
    'base': '#e69f00',
    'button': '#999999'
};

function scaleView() {
    return (board.create('point', [1, 1], {visible: false}).coords.scrCoords[1] - board.create('point', [0, 0], {visible: false}).coords.scrCoords[1]) / 40;
}

let factor = scaleView();

function cVis(x, y, z) {
    return (JXG.evaluate(cubes[x][y][z].visProp.visible) ? 1 : 0);
}

function viewButton() {
    view.setView(settings['navigation']['view'][0] + Math.PI, settings['navigation']['view'][1], 0);
    mx = 1;
    my = 1;
    board.update();
}

let buttonEast = board.create('button', [8.25, 4, 'E', () => {
    eastButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['east']);
let buttonWest = board.create('button', [4.75, 4, 'W', () => {
    westButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['west']);
let buttonNorth = board.create('button', [6.5, 5.75, 'N', () => {
    northButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['north']);
let buttonSouth = board.create('button', [6.5, 2.25, 'S', () => {
    southButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['south']);
let buttonPlus = board.create('button', [7.5, -0.25, ' + ', () => {
    plusButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['top']);
let buttonMinus = board.create('button', [5.5, -0.25, ' – ', () => {
    minusButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['base']);
let viewMinus = board.create('button', [6.5, 4, ' O ', () => {
    viewButton();
    try {
        setOutput();
    } catch (e) {
    }
}], {fixed: true, visible: settings['navigation']['visible']}).rendNodeButton.style = bStyle(col['button']);

function bStyle(c) {
    return 'width: +' + (50 * factor) + 'px; height: ' + (50 * factor) + 'px; border: solid gray ' + (3 * factor) + 'px; border-radius: ' + (15 * factor) + 'px; color: black; padding: 1px 3px; text-align: center; text-decoration: none; display: inline-block; font-size: ' + (24 * factor) + 'px; background-color:' + c + ';';
}

document.getElementById(BOARDID).addEventListener("keydown", function (e) {
    if (settings['navigation']['keyboard'])
        if (e.key === "ArrowUp") {
            northButton();
        } else if (e.key === "ArrowDown") {
            southButton();
        } else if (e.key === "ArrowLeft") {
            westButton();
        } else if (e.key === "ArrowRight") {
            eastButton();
        } else if (e.key === "+" | e.key === " ") {
            plusButton();
        } else if (e.key === "-") {
            minusButton();
        } else if (e.key === "o" | e.key === "O") {
            viewButton();
        }
    e.preventDefault();
    try {
        setOutput();
    } catch (e) {
    }
    board.update();
});


// JSXGraph construction

view.create('point3d', [0, 0, 0], {
    name: '',
    size: 8 * factor,
    fixed: true,
    fillColor: '#000000',
    showinfobox: false
});

let baseCube = view.create('polyhedron3d', [
    [
        [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]
    ], [
        [0, 1, 2, 3], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7], [4, 5, 6, 7]
    ]
], {
    visible: false
});

let markCube = view.create('polyhedron3d', [
    [
        [0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]
    ], [
        [0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7], [7, 4]
    ]
], {
    visible: false
});

let arrows = view.create('polyhedron3d', [
    [
        [1.25, -0.25, 0], [1.75, -0.25, 0], [1.5, -0.5, 0],
        [3.25, 1.25, 0], [3.25, 1.75, 0], [3.5, 1.5, 0],
        [1.25, 3.25, 0], [1.75, 3.25, 0], [1.5, 3.5, 0],
        [-0.25, 1.25, 0], [-0.25, 1.75, 0], [-0.5, 1.5, 0]
    ], [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]
    ]
], {
    fillColorArray: [col['south'], col['east'], col['north'], col['west']],
    opacity: 1,
    fillOpacity: 1,
    strokeWidth: 3 * factor,
    strokeColor: 'gray',
    visible: true
});

let base = view.create('polyhedron3d', [
    [
        [0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0],
        [0, 1, 0], [1, 1, 0], [2, 1, 0], [3, 1, 0],
        [0, 2, 0], [1, 2, 0], [2, 2, 0], [3, 2, 0],
        [0, 3, 0], [1, 3, 0], [2, 3, 0], [3, 3, 0]
    ], [
        [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6],
        [4, 5, 9, 8], [5, 6, 10, 9], [6, 7, 11, 10],
        [8, 9, 13, 12], [9, 10, 14, 13], [10, 11, 15, 14]
    ]
], {
    fillColorArray: [col['button']],
    fillOpacity: 0.25,
    strokeWidth: 3 * factor,
    strokeColor: 'lightgray',
    visible: true,
    layer: 0
});

for (let i = 0; i < 3; i++) {
    cubes[i] = new Array();
    for (let j = 0; j < 3; j++) {
        cubes[i][j] = new Array();
        for (let k = 0; k < 3; k++) {
            cubes[i][j][k] = view.create('polyhedron3d', [baseCube, [view.create('transform3d', [i, j, k], {type: 'translate'})]], {
                fillColorArray: [col['base'], col['south'], col['east'], col['north'], col['west'], col['top']],
                fillOpacity: 1,
                strokeColor: 'gray',
                strokeWidth: 3 * factor,
                visible: () => {
                    return superM['top'][j][i] > k ? true : false;
                }
            });
        }
    }
}

// Projections
function topP() {
    return (settings['projection']['update']) ? active : input;
}

function northP() {
    return [
        [cVis(2, 0, 0) + cVis(2, 1, 0) + cVis(2, 2, 0), cVis(1, 0, 0) + cVis(1, 1, 0) + cVis(1, 2, 0), cVis(0, 0, 0) + cVis(0, 1, 0) + cVis(0, 2, 0)],
        [cVis(2, 0, 1) + cVis(2, 1, 1) + cVis(2, 2, 1), cVis(1, 0, 1) + cVis(1, 1, 1) + cVis(1, 2, 1), cVis(0, 0, 1) + cVis(0, 1, 1) + cVis(0, 2, 1)],
        [cVis(2, 0, 2) + cVis(2, 1, 2) + cVis(2, 2, 2), cVis(1, 0, 2) + cVis(1, 1, 2) + cVis(1, 2, 2), cVis(0, 0, 2) + cVis(0, 1, 2) + cVis(0, 2, 2)]
    ];
}

function southP() {
    return [
        [cVis(0, 0, 0) + cVis(0, 1, 0) + cVis(0, 2, 0), cVis(1, 0, 0) + cVis(1, 1, 0) + cVis(1, 2, 0), cVis(2, 0, 0) + cVis(2, 1, 0) + cVis(2, 2, 0)],
        [cVis(0, 0, 1) + cVis(0, 1, 1) + cVis(0, 2, 1), cVis(1, 0, 1) + cVis(1, 1, 1) + cVis(1, 2, 1), cVis(2, 0, 1) + cVis(2, 1, 1) + cVis(2, 2, 1)],
        [cVis(0, 0, 2) + cVis(0, 1, 2) + cVis(0, 2, 2), cVis(1, 0, 2) + cVis(1, 1, 2) + cVis(1, 2, 2), cVis(2, 0, 2) + cVis(2, 1, 2) + cVis(2, 2, 2)]
    ];
}

function eastP() {
    return [
        [cVis(0, 0, 0) + cVis(1, 0, 0) + cVis(2, 0, 0), cVis(0, 1, 0) + cVis(1, 1, 0) + cVis(2, 1, 0), cVis(0, 2, 0) + cVis(1, 2, 0) + cVis(2, 2, 0)],
        [cVis(0, 0, 1) + cVis(1, 0, 1) + cVis(2, 0, 1), cVis(0, 1, 1) + cVis(1, 1, 1) + cVis(2, 1, 1), cVis(0, 2, 1) + cVis(1, 2, 1) + cVis(2, 2, 1)],
        [cVis(0, 0, 2) + cVis(1, 0, 2) + cVis(2, 0, 2), cVis(0, 1, 2) + cVis(1, 1, 2) + cVis(2, 1, 2), cVis(0, 2, 2) + cVis(1, 2, 2) + cVis(2, 2, 2)]
    ];
}

function westP() {
    return [
        [cVis(0, 2, 0) + cVis(1, 2, 0) + cVis(2, 2, 0), cVis(0, 1, 0) + cVis(1, 1, 0) + cVis(2, 1, 0), cVis(0, 0, 0) + cVis(1, 0, 0) + cVis(2, 0, 0)],
        [cVis(0, 2, 1) + cVis(1, 2, 1) + cVis(2, 2, 1), cVis(0, 1, 1) + cVis(1, 1, 1) + cVis(2, 1, 1), cVis(0, 0, 1) + cVis(1, 0, 1) + cVis(2, 0, 1)],
        [cVis(0, 2, 2) + cVis(1, 2, 2) + cVis(2, 2, 2), cVis(0, 1, 2) + cVis(1, 1, 2) + cVis(2, 1, 2), cVis(0, 0, 2) + cVis(1, 0, 2) + cVis(2, 0, 2)]
    ];
}

function baseP() {
    return [
        [cVis(2, 0, 0), cVis(1, 0, 0), cVis(0, 0, 0)],
        [cVis(2, 1, 0), cVis(1, 1, 0), cVis(0, 1, 0)],
        [cVis(2, 2, 0), cVis(1, 2, 0), cVis(0, 2, 0)]
    ];
}

superM = {
    'top':
        topP(),
    'north':
        northP(),
    'south':
        southP(),
    'west':
        westP(),
    'east':
        eastP(),
    'base':
        baseP()
}

function eastButton() {
    mx++;
    setOutput();
}

function westButton() {
    mx--;
}

function northButton() {
    my++;
}

function southButton() {
    my--;
}

function plusButton() {
    //inXXput[my][mx] == 3 ? 3 : inXXput[my][mx]++;
    superM['top'][my][mx] == 3 ? 3 : superM['top'][my][mx]++;
    updateP();
}

function minusButton() {
    //inXXput[my][mx] == 0 ? 0 : inXXput[my][mx]--;
    superM['top'][my][mx] == 0 ? 0 : superM['top'][my][mx]--;
    updateP();
}

let pjX = -8;

if (settings['projection']['top']) {
    projection('top', pjX, 8, true);
    pjX += 3.5;
}
if (settings['projection']['south']) {
    projection('south', pjX, 8, true);
    pjX += 2.5
}
if (settings['projection']['east']) {
    projection('east', pjX, 8, true);
    pjX += 2.5;
}
if (settings['projection']['north']) {
    projection('north', pjX, 8, false);
    pjX += 2.5;
}
if (settings['projection']['west']) {
    projection('west', pjX, 8, false);
    pjX += 3.5;
}
if (settings['projection']['base']) {
    projection('base', pjX, 8, false)
}

function updateP() {
    if (settings['projection']['update']) {
        copyM(superM['north'], northP());
        copyM(superM['south'], southP());
        copyM(superM['east'], eastP());
        copyM(superM['west'], westP());
        copyM(superM['base'], baseP());
    }
}

function copyM(A, B) {
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            A[i][j] = B[i][j];
}


superM['top'] = active;
updateP();

let initSuperM = {
    'top': [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    'north': [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    'south': [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    'west': [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    'east': [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    'base': [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
};
copyM(initSuperM['south'], southP());


function projection(mx, x, y, lft) {
    let M = superM[mx];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board.create('point', [x + (j / 2) * 1.1, y + (i / 2) * 1.1], {
                name: '', face: '[]', strokeWidth: 2 * factor, strokeColor: 'gray', fillColor: () => {
                    return (M[i][j] > 0) ? col[mx] : '#eeeeee';
                }, size: 11 * factor, highlight: false, fixed: true, showinfobox: false
            });
        }
    }
    board.create('point', [x - 0.25 + (lft ? -0.05 : 1.65), y - 0.3], {
        name: '',
        size: 4 * factor,
        fixed: true,
        fillColor: '#000000',
        strokeWidth: 0,
        highlight: false,
        showinfobox: false
    });
}

let trKeys = view.create('transform3d', [() => {
    (mx >= 3) ? mx = 2 : (mx < 0) ? mx = 0 : mx;
    return mx;
}, () => {
    (my >= 3) ? my = 2 : (my < 0) ? my = 0 : my;
    return my;
}, 0], {type: 'translate'});

let trSl = view.create('transform3d', [0, 0, 1], {type: 'translate'});

view.create('polyhedron3d', [markCube, [trKeys]], {
    fillColorArray: [col['button']],
    fillOpacity: 0.15,
    strokeColor: 'gray',
    strokeWidth: 3 * factor,
    dash: 2,
    visible: () => superM['top'][my][mx] < 1 ? true : false
});
view.create('polyhedron3d', [markCube, [trKeys, trSl]], {
    fillColorArray: [col['button']],
    fillOpacity: 0.15,
    strokeColor: 'gray',
    strokeWidth: 3 * factor,
    dash: 2,
    visible: () => superM['top'][my][mx] < 2 ? true : false
});
view.create('polyhedron3d', [markCube, [trKeys, trSl, trSl]], {
    fillColorArray: [col['button']],
    fillOpacity: 0.15,
    strokeColor: 'gray',
    strokeWidth: 3 * factor,
    dash: 2,
    visible: () => superM['top'][my][mx] < 3 ? true : false
});
view.create('polyhedron3d', [markCube, [trKeys, trSl, trSl, trSl]], {
    fillColorArray: [col['button']],
    fillOpacity: 0.15,
    strokeColor: 'gray',
    strokeWidth: 3 * factor,
    dash: 2
});

function initBoard3D(b) {

    let v = b.create('view3d', [[-4 - (settings['navigation']['visible'] ? 2 : 0), -6.25], [9, 9], [[0, 3], [0, 3], [0, 3]]],
        {
            projection: 'parallel',
            trackball: false,
            depthOrder: {enabled: true},
            axesPosition: 'center',
            xAxis: {visible: false},
            yAxis: {visible: false},
            zAxis: {visible: false},
            xPlaneRear: {
                visible: false
            },
            yPlaneRear: {
                visible: false
            },
            zPlaneRear: {
                visible: false
            },
            el: {
                pointer: {enabled: settings['navigation']['elevation']},
                keyboard: {enabled: settings['navigation']['elevation']}
            },
            az: {
                pointer: {enabled: settings['navigation']['azimuth']},
                keyboard: {enabled: settings['navigation']['azimuth']}
            }
        }
    );

    v.setView(settings['navigation']['view'][0] + Math.PI, settings['navigation']['view'][1], 0);

    return v;
}

function boardAttr() {
    let bA = {
        boundingbox: [-10, 10, 10, -10],
        keepaspectratio: true,
        axis: false,
        showcopyright: false,
        shownavigation: false,
        movetarget: false,
        pan: {
            enabled: false
        },
        browserpan:false,
        zoom: {
            enabled: false,
        },
        keyboard: {
            enabled: false
        }
    };
    return bA;
}

function compareM(m) {
    let b = true;
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
            if (superM[m][i][j] == 0) {
                if (initSuperM[m][i][j] != 0)
                    b = false;
            } else {
                if (initSuperM[m][i][j] == 0)
                    b = false;
            }
        }
    return b;
}

function copyS() {
    copyM(initSuperM['top'], topP());
    copyM(initSuperM['north'], northP());
    copyM(initSuperM['south'], southP());
    copyM(initSuperM['west'], westP());
    copyM(initSuperM['east'], eastP());
    copyM(initSuperM['base'], baseP());
}

