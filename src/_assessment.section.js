


JXG.Options.text.useMathJax = true;
JXG.Options.axis.ticks.insertTicks = false;
JXG.Options.axis.ticks.majorHeight = 0;
JXG.Options.axis.ticks.minorHeight = 0;
JXG.Options.axis.ticks.drawLabels = false;
JXG.Options.axis.ticks.insertTicks = false;
JXG.Options.point.showInfobox = false;

var board = JXG.JSXGraph.initBoard('assessment', {
    axis: false,
    boundingbox: [-3, 5, 5.5, -2],
    infoboxText: '',
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: false },
    zoom: { enabled: false }
});

// global epsilon
var global_epsilon = 0.00000001;

/*
 * axis
 */

// x-axis
var x_axis = board.create('axis', [[0, 0], [1, 0]],
    {
        label: {
            position: 'rt',
            offset: [-10, -15]
        },
        name: '\\(x\\)',
        straightFirst: false,
        withLabel: true
    });

// highlight D
highlightElement(x_axis, "xaxis", "highlightGrey");

// y-axis
var y_axis = board.create('axis', [[0, 0], [0, 1]],
    {
        label: {
            position: 'lft',
            offset: [-40, -5]
        },
        name: '\\(f(x)\\)',
        straightFirst: false,
        withLabel: true
    });

/*
 * function
 */

// specific point
var specific_point = 0;

// x0 start value for glider (x0;0)
var x0_init = 2;

// function term f
var term_f = function (x) {
    /*
     * functions
     */

    // continuous function (polynom)
    // return (0.25 * Math.pow(x - 2.5, 3) + 0.5 * Math.pow(x - 2.5, 2)) + 1.5;

    /*/ continuous function (polynom)
    specific_point = 2;
    x0_init = 3;
    return Math.pow(x - specific_point, 2) + 1;
    //*/

    /*/ continuous function abs()
    specific_point = 1.75;
    x0_init = 3;
    return Math.abs(x - specific_point) + 1.5;
    //*/

    /*/ continuous function sin()
    specific_point = 1;
    x0_init = 1.5;
    return Math.sin(2.5 * x - specific_point) + 1.5;
    //*/

    /*/ continuous function sin()
    x0_init = 1.8;
    return Math.sin(5 * x) / x + 2.25;
    //*/

    /*
     * piecewise-defined functions
     */

    /*/ continuous function (polynoms)
    specific_point = 2;
    x0_init = 1.5;
    if (x < specific_point) {
        return x + 1;
    } else {
        return -Math.pow((x - specific_point - 0.5), 2) + 3.25;
    }
    //*/

    /*/ continuous function (polynoms)
    specific_point = 2.5;
    x0_init = 1.5;
    if (x < specific_point) {
        return 1.5;
    } else {
        return Math.pow(x - specific_point, 2) + 1.5;
    }
    //*/

    // discontinuous function (polynoms)
    specific_point = 3.25;
    x0_init = 3.25;
    if (x < specific_point) {
        return 0.2 * x * x;
    } else {
        return x - 0.5;
    }
    //*/

    /*/ continuous function (polynoms)
    specific_point = Math.PI;
    x0_init = 2;
    if (x < specific_point) {
        return Math.sin(3 * x) / x + 2;
    } else {
        return -x + 2 + Math.PI;
    }
    //*/


};

// graph of f
var graph_f = board.create('functiongraph', [term_f, 0.25, 4.1], {
    dash: 0,
    layer: 8,
    strokeColor: '#4080aa',
    strokeWidth: 2
});

// piecewise-defined discontinuous function
if (Math.abs(term_f(specific_point - global_epsilon) - term_f(specific_point)) > global_epsilon) {
    // point (specific_point-0;f(specific_point-0))
    var point_specific_point_minus_global_epsilon_fspecific_point_minus_global_epsilon = board.create('point', [specific_point - global_epsilon, term_f(specific_point - global_epsilon)], {
        fillColor: '#ffffff',
        name: '',
        size: 1,
        strokeColor: '#4080aa',
        strokeWidth: 2
    });

    // point (specific_point;f(specific_point))
    var point_specific_point_fspecific_point = board.create('point', [specific_point, term_f(specific_point)], {
        fillColor: '#4080aa',
        name: '',
        size: 1,
        strokeColor: '#4080aa',
        strokeWidth: 2
    });

    // dashed line (specific_point;0) - (specific_point;max(f(specific_point),f(specific_point-0)))
    var line_specific_point_0_specific_point_fmax_specific_point_or_specific_point_minus_0 = board.create('line',[[specific_point,0],[specific_point,Math.max(term_f(specific_point),term_f(specific_point - global_epsilon))]],{
        dash: 1,
        name:'',
        straightFirst: false,
        straightLast: false,
        strokeColor: '#4080aa',
        strokeWidth: 1
    });
}

// highlight function
highlightElement(graph_f, "graph", "highlightDarkBlue");

/*
 * x0 and f(x0)
 */

// coordonate for parallel line to x-axis
var cx = -0.5;

// start x0
var x0_start = 0.5;

// end x0
var x0_end = 4;

// line parallel to x-axis for x0 glider
var line_parallel_x_axis = board.create('line', [[x0_start, cx], [x0_end, cx]], {
    straightFirst: false,
    straightLast: false,
    visible: false
});

// x0 glider (not on x-axis for better visibility)
var glider_x0_0 = board.create('glider', [x0_init, 0, line_parallel_x_axis], {
    fillColor: '#ff00ff',
    label: {
        offset: [-5, -15]
    },
    name: '\\(x_0\\)',
    size: 2,
    strokeColor: '#000000',
    strokeWidth: 1
});

// highlight x0
highlightElement(glider_x0_0, 'x0', 'highlightMagenta');

// point (x0;f(x0))
var point_x0_fx0 = board.create('point', [
    function () {
        return glider_x0_0.X();
    },
    function () {
        return term_f(glider_x0_0.X());
    }], {
    fillColor: '#000000',
    name: '',
    size: 2,
    strokeWidth: 0
});

// point (0;f(x))
var point_0_fx0 = board.create('point', [0,
    function () {
        return term_f(glider_x0_0.X());
    }], {
    fillColor: '#000000',
    /* label not display because of epsilon
    label: {
        offset: [-45, 0]
    },
    name: '\\(f(x_0)\\)',
    */
    name: '',
    size: 2,
    strokeWidth: 0
});

// dashed line (x0;0) - (x0;f(x0))
var line_x0_0_x0_fx0 = board.create('line', [glider_x0_0, point_x0_fx0], {
    dash: 2,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#000000',
    strokeWidth: 1,
});

// point (x0;0) on x-axis (refers to glider_x0_0)
var point_x0_0 = board.create('intersection', [x_axis, line_x0_0_x0_fx0], {
    fillColor: '#000000',
    label: {
        offset: [-20, -35]
    },
    name: '',
    size: 1,
    strokeWidth: 0
});

// dashed line (x0;f(x0)) - (0;f(x0))
var line_x0_fx0_0_fx0 = board.create('line', [point_x0_fx0, point_0_fx0], {
    dash: 2,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#000000',
    strokeWidth: 1,
});

/*
 * epsilon
 */

// coordonate for parallel line to y-axis
var cx = -1.1;

// point (cx;f(x0))
var point_cx_fx0 = board.create('point', [function () {
    return point_0_fx0.X() + cx;

}, function () {
    return point_0_fx0.Y();
}], {
    fillColor: '#000000',
    label: {
        offset: [-55, 0]
    },
    name: '\\(f(x_0)\\)',
    size: 2,
    strokeWidth: 0
});

// point (cx,f(x0)+1)
var point_cx_fx01 = board.create('point', [function () {
    return point_cx_fx0.X();

}, function () {
    return point_cx_fx0.Y() + 1;
}], {
    visible: false
});

// dashed line (0;f(x0)) - (cx;f(x0))
var line_0_fx0_cx_fx0 = board.create('line', [point_0_fx0, point_cx_fx0], {
    dash: 2,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#000000',
    strokeWidth: 1
});

// line (cx;f(x0)) - (cx,f(x0)+1) for epsilon glider
var line_cx_fx0_cx_fx01 = board.create('line', [point_cx_fx0, point_cx_fx01], {
    straightFirst: false,
    visible: false
});

// epsilon
var epsilon = 1;

// epsilon glider
var glider_cx_fx0_espilon = board.create('glider', [0, (function () {
    return point_0_fx0.Y() + epsilon;
})(), line_cx_fx0_cx_fx01], {
    fillColor: '#00dd66',
    label: {
        offset: [-55, 20]
    },
    name: '\\(f(x_0)+\\epsilon\\)',
    size: 2,
    strokeColor: '#000000',
    strokeWidth: 1
});

// highlight epsilon point
highlightElement(glider_cx_fx0_espilon, "epsilon", "highlightGreen");

// epsilon as line length
var line_cx_fx0_cx_fx0_epsilon = board.create('line', [point_cx_fx0, glider_cx_fx0_espilon], {
    straightFirst: false,
    straightLast: false,
    strokeColor: '#00dd66',
    strokeWidth: 3
});

// highlight epsilon line
highlightElement(line_cx_fx0_cx_fx0_epsilon, "epsilon", "highlightGreen");

// point for epsilon label
var point_label_epsilon = board.create('midpoint', [point_cx_fx0, glider_cx_fx0_espilon], {
    label: {
        offset: [5, 1]
    },
    name: '\\(\\epsilon\\)',
    size: 0
});

// point (cx;f(x0)-epsilon)
var point_cx_fx0_minus_epsilon = board.create('mirrorpoint', [glider_cx_fx0_espilon, point_cx_fx0], {
    fillColor: '#000000',
    label: {
        offset: [-55, -20]
    },
    name: '\\(f(x_0)-\\epsilon\\)',
    size: 2,
    strokeWidth: 0
});

// dotted line (cx;f(x0)) - (cx;f(x0)-epsilon)
var line_cx_fx0_cx_fx0_minus_epsilon = board.create('line', [point_cx_fx0, point_cx_fx0_minus_epsilon], {
    dash: 1,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#00dd66'
});

// point (0,f(x0)+epsilon)
var point_0_fx0_epsilon = board.create('point', [0,
    function () {
        return glider_cx_fx0_espilon.Y();
    }], {
    fillColor: '#000000',
    name: '',
    size: 1,
    strokeWidth: 0
});

// point (0,f(x0)-epsilon)
var point_0_fx0_minus_epsilon = board.create('point', [0,
    function () {
        return point_cx_fx0_minus_epsilon.Y();
    }], {
    fillColor: '#000000',
    name: '',
    size: 1,
    strokeWidth: 0
});

// line (cx;f(x0)+epsilon) - (0;f(x0)+epsilon)
var line_cx_fx0_epsilon_0_fx0_epsilon = board.create('line', [glider_cx_fx0_espilon, point_0_fx0_epsilon], {
    dash: 1,
    straightFirst: false,
    straightLast: true,
    strokeColor: '#cccccc'
});

// line (cx;f(x0)-epsilon) - (0;f(x0)-epsilon)
var line_cx_fx0_minus_epsilon_0_fx0_minus_epsilon = board.create('line', [point_cx_fx0_minus_epsilon, point_0_fx0_minus_epsilon], {
    dash: 1,
    straightFirst: false,
    straightLast: true,
    strokeColor: '#cccccc'
});

/*
 * delta
 */

// coordonate for parallel line to x-axis
var cy = -1.25;

// point (x0;cy)
var point_x0_cy = board.create('point', [function () {
    return glider_x0_0.X();
}, cy], {
    fillColor: '#000000',
    name: '',
    size: 2,
    strokeWidth: 0
});

// point (x0+1;cy)
var point_x01_cy = board.create('point', [function () {
    return glider_x0_0.X() + 1;

}, cy], {
    visible: false
});

// line (x0;cy) - (x0+1,cy) for delta glider
var line_x0_cy_x01_cy = board.create('line', [point_x0_cy, point_x01_cy], {
    straightFirst: false,
    visible: false
});

// delta
var delta = 0.75;

// delta glider
var glider_x0_delta_cy = board.create('glider', [(function () {
    return point_x0_0.X() + delta;
})(), cy, line_x0_cy_x01_cy], {
    fillColor: '#ffaa33',
    label: {
        offset: [10, -10]
    },
    name: '\\(x_0+\\delta\\)',
    size: 2,
    strokeColor: '#000000',
    strokeWidth: 1
});

// highlight delta point
highlightElement(glider_x0_delta_cy, "delta", "highlightOrange");

// delta as line length
var line_x0_cy_x0_delta_cy = board.create('line', [point_x0_cy, glider_x0_delta_cy], {
    straightFirst: false,
    straightLast: false,
    strokeColor: '#ffaa33',
    strokeWidth: 3
});

// highlight delta line
highlightElement(line_x0_cy_x0_delta_cy, "delta", "highlightOrange");

// point (x0-delta;cy)
var point_x0_minus_delta_cy = board.create('mirrorpoint', [glider_x0_delta_cy, point_x0_cy], {
    fillColor: '#000000',
    label: {
        offset: [-50, -10]
    },
    name: '\\(x_0-\\delta\\)',
    size: 2,
    strokeWidth: 0
});

// dotted line (x0;cy) - (x0-delta;cy)
var line_x0_cy_x0_minus_delta_cy = board.create('line', [point_x0_cy, point_x0_minus_delta_cy], {
    dash: 1,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#ffaa33'
});

// point for delta label
var point_label_delta = board.create('midpoint', [point_x0_cy, glider_x0_delta_cy], {
    label: {
        offset: [-2, 12]
    },
    name: '\\(\\delta\\)',
    size: 0
});

// point (x0+delta;0)
var point_x0_delta_0 = board.create('point', [
    function () {
        return glider_x0_delta_cy.X();
    }, 0], {
    fillColor: '#000000',
    label: {
        offset: [-20, -35]
    },
    name: '',
    size: 1,
    strokeWidth: 0
});

// point (x0-delta;0)
var point_x0_minus_delta_0 = board.create('point', [
    function () {
        return point_x0_minus_delta_cy.X();
    }, 0], {
    fillColor: '#000000',
    label: {
        offset: [-20, -35]
    },
    name: '',
    size: 1,
    strokeWidth: 0
});

// end point y for vertical dotted line
var cym = 4.75;

// point (x0+delta;cym)
var point_x0_delta_cym = board.create('point', [
    function () {
        return glider_x0_delta_cy.X();
    }, cym], {
    visible: false
});

// point (x0-delta;cym)
var point_x0_minus_delta_cym = board.create('point', [
    function () {
        return point_x0_minus_delta_cy.X();
    }, cym], {
    visible: false
});

// dotted line (x0+delta;cy) - (x0+delta;cym)
var line_x0_delta_cy_x0_delta_cym = board.create('line', [glider_x0_delta_cy, point_x0_delta_cym], {
    dash: 1,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#cccccc'
});

// dotted line (x0-delta;cy) - (x0-delta;cym)
var line_x0_minus_delta_cy_x0_minus_delta_cym = board.create('line', [point_x0_minus_delta_cy, point_x0_minus_delta_cym], {
    dash: 1,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#cccccc'
});

/*
 * intersections delta an epsilon lines
 */

// point (x0+delta;f(x0)+epsilon)
var point_x0_delta_fx0_epsilon = board.create('intersection', [line_x0_delta_cy_x0_delta_cym, line_cx_fx0_epsilon_0_fx0_epsilon, 0], {
    fillColor: '#000000',
    name: '',
    size: 1,
    strokeWidth: 0
});

// point (x0-delta;f(x0)+epsilon)
var point_x0_minus_delta_fx0_epsilon = board.create('intersection', [line_x0_minus_delta_cy_x0_minus_delta_cym, line_cx_fx0_epsilon_0_fx0_epsilon, 0], {
    fillColor: '#000000',
    name: '',
    size: 1,
    strokeWidth: 0
});
// point (x0+delta;f(x0)-epsilon)
var point_x0_delta_fx0_epsilon = board.create('intersection', [line_x0_delta_cy_x0_delta_cym, line_cx_fx0_minus_epsilon_0_fx0_minus_epsilon, 0], {
    fillColor: '#000000',
    name: '',
    size: 1,
    strokeWidth: 0
});
// point (x0+delta;f(x0)+epsilon)
var point_x0_delta_fx0_epsilon = board.create('intersection', [line_x0_minus_delta_cy_x0_minus_delta_cym, line_cx_fx0_minus_epsilon_0_fx0_minus_epsilon, 0], {
    fillColor: '#000000',
    name: '',
    size: 1,
    strokeWidth: 0
});

/*
 * x
 */

// line (x0-delta;0) - (x0+delta;0) for x glider
var line_x0_minus_delta_0_x0_delta_0 = board.create('line', [point_x0_minus_delta_0, point_x0_delta_0], {
    straightFirst: false,
    straightLast: false,
    visible: false
});

// x glider
var glider_x_0 = board.create('glider', [glider_x0_0.X() + delta / 2, 0, line_x0_minus_delta_0_x0_delta_0], {
    fillColor: '#3366ff',
    label: {
        offset: [-4, -15]
    },
    name: '\\(x\\)',
    size: 2,
    strokeColor: '#000000',
    strokeWidth: 1
});

// highlight x
highlightElement(glider_x_0, 'xed', 'highlightBlue');

// point (x;f(x))
var point_x_fx = board.create('point', [
    function () {
        return glider_x_0.X();
    },
    function () {
        return term_f(glider_x_0.X());
    }], {
    fillColor: '#000000',
    name: '',
    size: 2,
    strokeWidth: 0
});

// point (0;f(x))
var point_0_fx = board.create('point', [0,
    function () {
        return term_f(glider_x_0.X());
    }], {
    fillColor: '#000000',
    label: {
        offset: [-30, 0]
    },
    name: '\\(f(x)\\)',
    size: 2,
    strokeWidth: 0
});

// dotted line (x;0) -(x,f(x))
var line_x_0_x_fx = board.create('line', [glider_x_0, point_x_fx], {
    dash: 2,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#000000',
    strokeWidth: 1,
});

// dotted line (x;f(x)) - (0;f(x))
var line_x_fx_0_fx = board.create('line', [point_x_fx, point_0_fx], {
    dash: 2,
    straightFirst: false,
    straightLast: false,
    strokeColor: '#000000',
    strokeWidth: 1,
});

/*
 * line  for |x-x0|<delta
 */

// line (x0;0) - (x;0) for |x-x0|<delta
var line_x0_0_x_0 = board.create('line', [point_x0_0, glider_x_0], {
    straightFirst: false,
    straightLast: false,
    strokeColor: '#3366ff',
    strokeWidth: 3,
});

// highlight |x-x0|<delta
highlightElement(line_x0_0_x_0, 'xx0d', 'highlightBlue');

/*
 * line  for |f(x)-f(x0)|<epsilon
 */

// line (0;f(x)) - (0;f(x0)) for |f(x)-f(x0)|<epsilon with epsilon-delta-condition
var line_0_fx_0_fx0 = board.create('line', [point_0_fx0, point_0_fx], {
    straightFirst: false,
    straightLast: false,
    strokeColor: function () {
        if (line_cx_fx0_cx_fx0_epsilon.L() > point_0_fx0.Dist(point_0_fx))
            return '#993333';
        else
            return '#ff00ff';
    },
    strokeWidth: 3,
});

// highlight |f(x)-f(x0)|<epsilon
highlightElement(line_0_fx_0_fx0, 'fxfx0', 'highlightDarkRed');

// area with epsilon-delta-condition
var polygon_delta_epsilon = board.create('polygon', [
    point_x0_0,
    glider_x_0,
    point_x_fx,
    point_0_fx,
    point_0_fx0,
    point_x0_fx0
], {
    borders: {
        visible: false
    },
    fillColor: function () {
        if (line_cx_fx0_cx_fx0_epsilon.L() > point_0_fx0.Dist(point_0_fx))
            return '#dddddd';
        else
            return '#ff00ff';
    },
    highlightFillColor: '#dddddd'
});

/*
 * alert epsilon-delta-condition
 */

function highlightElement(el, id, cl) {

}
