

// input data

let input = {
    'coordinates': {'-x': -5, '+x': 5, '-y': -5, '+y': 5, '-z': -5, '+z': 5},
    'view': {'projection': 'central', 'trackball': false, 'controls': false, 'azimuth': 1, 'elevation': 0.15},
    'axis': {'x': false, 'y': false, 'z': false, 'position': 'center'},
    'planeRear': {'x': false, 'y': false, 'z': true, 'axis': false, 'border': 0, 'mesh': true, 'color': 'none'},
    'planeFront': {'x': false, 'y': false, 'z': false, 'axis': false, 'border': 0, 'mesh': false, 'color': 'none'}
};

// JSXGraph board

let board = JXG.JSXGraph.initBoard('box-202506271643', boardAttr());

// JSXGraph 3D view

let view = initBoard3D(board);

// JSXGraph construction

let tx = board.create('slider', [[-9, -9], [-5, -9], [0, 0, 1.5 * Math.PI]], {
    name: 'x', ...(sliderAttr()), ...{
        label: {visible: false},
        snapValues: [0, Math.PI / 2, Math.PI, 1.5 * Math.PI]
    }
});
let ty = board.create('slider', [[-2, -9], [2, -9], [0, 0, 1.5 * Math.PI]], {
    name: 'y', ...(sliderAttr()), ...{
        label: {visible: false},
        snapValues: [0, Math.PI / 2, Math.PI, 1.5 * Math.PI]
    }
});
let tz = board.create('slider', [[5, -9], [9, -9], [0, 0, 1.5 * Math.PI]], {
    name: 'z', ...(sliderAttr()), ...{
        label: {visible: false},
        snapValues: [0, Math.PI / 2, Math.PI, 1.5 * Math.PI]
    }
});

var ph0 = view.create('polyhedron3d', [
    [[-4, 0, -4], [-4, 0, 4], [4, 0, 4], [4, 0, -4]], [[0, 1, 2, 3]]
], {
    fillColorArray: ['grey'],
    fillOpacity: 0.25,
    strokeColor: 'black',
    strokeWidth: 2
});

var ph1 = view.create('polyhedron3d', [
    [[-1, -4, -1], [1, -4, -1], [1, -2, -1], [-1, -2, -1], [-1, -4, 1], [1, -4, 1], [1, -2, 1], [-1, -2, 1]],
    [[0, 1, 2, 3], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7], [4, 5, 6, 7]]
], {
    fillColorArray: ['#0072b2', '#e69f00', '#f0e442', '#009e73', '#56b4e9', '#ffffff'],
    fillOpacity: 1,
    strokeColor: 'black',
    strokeWidth: 2
});

var tr1 = view.create('transform3d', [0, 3, 0], {type: 'translate'});
var tr2 = view.create('transform3d', [Math.PI / 2], {type: 'rotateX'});
var tr3 = view.create('transform3d', [Math.PI / 2], {type: 'rotateY'});
var tr4 = view.create('transform3d', [-1, 1, 1], {type: 'scale'});
var trX = view.create('transform3d', [() => {
    return tx.Value();
}], {type: 'rotateX'});
var trY = view.create('transform3d', [() => {
    return ty.Value();
}], {type: 'rotateY'});
var trZ = view.create('transform3d', [() => {
    return tz.Value();
}], {type: 'rotateZ'});

var ph2 = view.create('polyhedron3d', [ph1, [tr1, tr2, tr3, tr4, trX, trY, trZ, tr1]], {
    fillColorArray: ['#0072b2', '#e69f00', '#f0e442', '#009e73', '#56b4e9', '#ffffff'],
    fillOpacity: 1,
    strokeColor: 'black',
    strokeWidth: 2
});

// Controls
function initBoard3D(b) {
    let sliderA = sliderAttr();

    let elA = elAttr();

    let v = b.create('view3d', [[-5, -3], [10, 10], [[input['coordinates']['-x'], input['coordinates']['+x']], [input['coordinates']['-y'], input['coordinates']['+y']], [input['coordinates']['-z'], input['coordinates']['+z']]]],
        {
            projection: input['view']['projection'],
            trackball: { enabled: input['view']['trackball'] },
            depthOrder: { enabled: true },

            // Main axes
            axesPosition: input['axis']['position'],
            xAxis: {visible: input['axis']['x'], strokeColor: '#888888', strokeWidth: 2},
            yAxis: {visible: input['axis']['y'], strokeColor: '#888888', strokeWidth: 2},
            zAxis: {visible: input['axis']['z'], strokeColor: '#888888', strokeWidth: 2},

            // Planes
            xPlaneRear: {
                visible: input['planeRear']['x'] | input['planeRear']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeRear']['border'],
                mesh3d: {visible: input['planeRear']['x'] & input['planeRear']['mesh']},
                fillColor: input['planeRear']['x'] ? input['planeRear']['color'] : 'none'
            },
            yPlaneRear: {
                visible: input['planeRear']['y'] | input['planeRear']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeRear']['border'],
                mesh3d: {visible: input['planeRear']['y'] & input['planeRear']['mesh']},
                fillColor: input['planeRear']['y'] ? input['planeRear']['color'] : 'none'
            },
            zPlaneRear: {
                visible: input['planeRear']['z'] | input['planeRear']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeRear']['border'],
                mesh3d: {visible: input['planeRear']['z'] & input['planeRear']['mesh']},
                fillColor: input['planeRear']['z'] ? input['planeRear']['color'] : 'none'
            },
            xPlaneFront: {
                visible: input['planeFront']['x'] | input['planeFront']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeFront']['border'],
                mesh3d: {visible: input['planeFront']['x'] & input['planeFront']['mesh']},
                fillColor: input['planeFront']['x'] ? input['planeFront']['color'] : 'none'
            },
            yPlaneFront: {
                visible: input['planeFront']['y'] | input['planeFront']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeFront']['border'],
                mesh3d: {visible: input['planeFront']['y'] & input['planeFront']['mesh']},
                fillColor: input['planeFront']['y'] ? input['planeFront']['color'] : 'none'
            },
            zPlaneFront: {
                visible: input['planeFront']['z'] | input['planeFront']['border'],
                strokeColor: '#dddddd',
                strokeWidth: input['planeFront']['border'],
                mesh3d: {visible: input['planeFront']['z'] & input['planeFront']['mesh']},
                fillColor: input['planeFront']['z'] ? input['planeFront']['color'] : 'none'
            },

            // Axes on planes
            xPlaneRearYAxis: {visible: input['planeRear']['x'] & input['planeRear']['axis']},
            xPlaneRearZAxis: {visible: input['planeRear']['x'] & input['planeRear']['axis']},
            yPlaneRearXAxis: {visible: input['planeRear']['y'] & input['planeRear']['axis']},
            yPlaneRearZAxis: {visible: input['planeRear']['y'] & input['planeRear']['axis']},
            zPlaneRearXAxis: {visible: input['planeRear']['z'] & input['planeRear']['axis']},
            zPlaneRearYAxis: {visible: input['planeRear']['z'] & input['planeRear']['axis']},
            xPlaneFrontYAxis: {visible: input['planeFront']['x'] & input['planeFront']['axis']},
            xPlaneFrontZAxis: {visible: input['planeFront']['x'] & input['planeFront']['axis']},
            yPlaneFrontXAxis: {visible: input['planeFront']['y'] & input['planeFront']['axis']},
            yPlaneFrontZAxis: {visible: input['planeFront']['y'] & input['planeFront']['axis']},
            zPlaneFrontXAxis: {visible: input['planeFront']['z'] & input['planeFront']['axis']},
            zPlaneFrontYAxis: {visible: input['planeFront']['z'] & input['planeFront']['axis']},

            // Controls
            bank: {
                slider: {...sliderA, ...{visible: input['view']['controls']}}
            },
            az: {
                slider: {...sliderA, ...{visible: input['view']['controls']}}
            },
            el: {
                slider: {...sliderA, ...elA, ...{visible: input['view']['controls']}}
            }
        }
    );

    v.el_slide.point1.setPosition(JXG.COORDS_BY_USER, [-9.5, -5]);
    v.el_slide.point2.setPosition(JXG.COORDS_BY_USER, [-9.5, 5]);
    v.el_slide.setMin(-Math.PI);
    v.el_slide.setMax(Math.PI);
    v.el_slide.setAttribute({ snapValues: [-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI].concat(input['view']['elevation']) });
    v.el_slide.name = 'EL';

    v.az_slide.point1.setPosition(JXG.COORDS_BY_USER, [-5, -9.5]);
    v.az_slide.point2.setPosition(JXG.COORDS_BY_USER, [5, -9.5]);
    v.az_slide.setMin(0);
    v.az_slide.setMax(Math.PI * 2);
    v.az_slide.setAttribute({ snapValues: [0, Math.PI / 2, Math.PI, Math.PI * 1.5, Math.PI * 2].concat(input['view']['azimuth']) });
    v.az_slide.name = 'AZ';

    v.bank_slide.point1.setPosition(JXG.COORDS_BY_USER, [-5, 9.5]);
    v.bank_slide.point2.setPosition(JXG.COORDS_BY_USER, [5, 9.5]);
    v.bank_slide.setAttribute({ snapValues: [-Math.PI, -Math.PI / 2, 0, Math.PI / 2, Math.PI] });
    v.bank_slide.name = 'BK';

    v.setView(input['view']['azimuth'], input['view']['elevation'], 0);

    return v;
}

function boardAttr() {
    let bA = {
        boundingbox: [-10, 10, 10, -10],
        keepaspectratio: true,
        axis: false,
        showcopyright: false,
        shownavigation: false,
        movetarget: null,
        pan: {
            enabled: false
        },
        browserpan: false,
        zoom: {
            enabled: false,
        }
    };
    return bA;
}
function sliderAttr() {
    let slA = {
        baseline: {
            highlight: false,
            strokeWidth: 8,
            lineCap: 'round',
            strokeColor: '#dddddd'
        },
        point1: {frozen: false, fixed: true},
        point2: {frozen: false, fixed: true},
        drawLabel: true,
        face: 'o',
        fillColor: '#aaaaaa',
        highlightFillColor: '#aaaaaa',
        highlightStrokeColor: '#aaaaaa',
        highlightStrokeWidth: 5,
        highline: {
            highlight: false,
            strokeWidth: 8,
            lineCap: 'round',
            strokeColor: '#aaaaaa'
        },
        label: {
            strokeColor: '#aaaaaa',
            anchorX: 'left',
            anchorY: 'middle',
            layer: 0,
            cssStyle: 'border: 0px solid red; padding: 1px 8px 1px 8px; border-radius: 20px;background-color: #f2f2f2',
        },
        size: 7,
        snapValueDistance: 0.1,
        snapWidth: 0.001,
        strokeColor: '#009900',
        strokeWidth: 0,
        ticks: {
            layer: 7,
            digits: 2,
            maxLabelLength: 2,
            majorHeight: 0,
            majorTickEndings: [1, 1],
            strokeWidth: 4,
            strokeColor: '#cccccc'
        },
        visible: true
    };
    return slA;
}
function elAttr() {
    let elA = {
        label: {
            rotate: 90,
            strokeColor: '#aaaaaa',
            anchorX: 'left',
            anchorY: 'middle',
            layer: 0,
            cssStyle: 'border: 0px solid red; padding: 1px 8px 1px 8px; border-radius: 20px;background-color: #f2f2f2; white-space: nowrap;'
        }
    }
    return elA;
}