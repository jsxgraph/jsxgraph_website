var brd = JXG.JSXGraph.initBoard('technicalfeatures', {boundingbox: [-3, 3, 3, -3]}),
    solveQ2 = function (x1, x2, x3, off) {
        var a, b, c, d;
        a = 0.5;
        b = -(x1 + x2 + x3);
        c = x1 * x1 + x2 * x2 + x3 * x3 - 0.5 * (x1 + x2 + x3) * (x1 + x2 + x3) - off;
        d = b * b - 4 * a * c;
        if (Math.abs(d) < 0.00000001) d = 0.0;
        return [(-b + Math.sqrt(d)) / (2.0 * a), (-b - Math.sqrt(d)) / (2.0 * a)];
    };

var a = brd.create('line', [[0, 0], [2, 0]], {straightFirst: false, straightLast: false, visible: false}),
    p0 = brd.create('point', [0, 0], {name: '', visible: false}),
    p1 = brd.create('glider', [1.3, 0, a], {name: 'drag me'}),

    b0 = -0.5,
    r1 = 2 - p1.X(),
    b1 = 1.0 / r1,
    r2 = (2.0 - r1),
    b2 = 1.0 / r2,

    p2 = brd.create('point', [function () { return p1.X() - 2; }, 0], {name: '', visible: false}),

    c0 = brd.create('circle', [p0, Math.abs(1.0 / b0)], {strokeWidth: 1, withLabel: false}),
    c1 = brd.create('circle', [p1, function () { return 2 - p1.X(); }], {strokeWidth: 1, withLabel: false}),
    c2 = brd.create('circle', [p2, function () { return p1.X(); }], {strokeWidth: 1, withLabel: false});

c0.curvature = function () { return b0; }; // constant
c1.curvature = function () { return 1 / (2 - p1.X()); };
c2.curvature = function () { return 1 / (p1.X()); };

var thirdCircleX = function () {
        var b0, b1, b2, x0, x1, x2, b3, bx3;
        b0 = c0.curvature();
        b1 = c1.curvature();
        b2 = c2.curvature();
        x0 = c0.midpoint.X();
        x1 = c1.midpoint.X();
        x2 = c2.midpoint.X();

        b3 = solveQ2(b0, b1, b2, 0);
        bx3 = solveQ2(b0 * x0, b1 * x1, b2 * x2, 2);
        return bx3[0] / b3[0];
    },
    thirdCircleY = function () {
        var b0, b1, b2, y0, y1, y2, b3, by3;
        b0 = c0.curvature();
        b1 = c1.curvature();
        b2 = c2.curvature();
        y0 = c0.midpoint.Y();
        y1 = c1.midpoint.Y();
        y2 = c2.midpoint.Y();

        b3 = solveQ2(b0, b1, b2, 0);
        by3 = solveQ2(b0 * y0, b1 * y1, b2 * y2, 2);
        return by3[0] / b3[0];
    },
    thirdCircleRadius = function () {
        var b0, b1, b2, b3, bx3, by3;
        b0 = c0.curvature();
        b1 = c1.curvature();
        b2 = c2.curvature();
        b3 = solveQ2(b0, b1, b2, 0);
        return 1.0 / b3[0];
    };

var p3 = brd.create('point', [thirdCircleX, thirdCircleY], {name: '', visible: false}),
    c3 = brd.create('circle', [p3, thirdCircleRadius], {strokeWidth: 1, withLabel: false});

c3.curvature = function () { return 1.0 / this.radius; };

var otherCirc = function (circs, level) {
    var p, c, fx, fy, fr;
    if (level <= 0) return;
    fx = function () {
        var b, x, i;
        b = [];
        x = [];
        for (i = 0; i < 4; i++) {
            b[i] = circs[i].curvature();
            x[i] = circs[i].midpoint.X();
        }

        b[4] = 2 * (b[0] + b[1] + b[2]) - b[3];
        x[4] = (2 * (b[0] * x[0] + b[1] * x[1] + b[2] * x[2]) - b[3] * x[3]) / b[4];
        return x[4];
    };
    fy = function () {
        var b, y, i;
        b = [];
        y = [];
        for (i = 0; i < 4; i++) {
            b[i] = circs[i].curvature();
            y[i] = circs[i].midpoint.Y();
        }

        b[4] = 2 * (b[0] + b[1] + b[2]) - b[3];
        y[4] = (2 * (b[0] * y[0] + b[1] * y[1] + b[2] * y[2]) - b[3] * y[3]) / b[4];
        return y[4];
    };
    fr = function () {
        var b, i;
        b = [];
        for (i = 0; i < 4; i++) {
            b[i] = circs[i].curvature();
        }
        b[4] = 2 * (b[0] + b[1] + b[2]) - b[3];
        if (isNaN(b[4])) {
            return 1000.0;
        } else {
            return 1 / b[4];
        }
    };
    p = brd.create('point', [fx, fy], {name: '', visible: false});
    c = brd.create('circle', [p, fr], {
        strokeWidth: 1,
        fillColor: JXG.hsv2rgb((70 * level) % 360, 0.9, 0.8), highlightFillColor: JXG.hsv2rgb((70 * level) % 360, 0.9, 0.6), fillOpacity: 0.7, withLabel: false,
    });
    c.curvature = function () { return 1 / this.radius; };

    // Recursion
    otherCirc([circs[0], circs[1], c, circs[2]], level - 1);
    otherCirc([circs[0], circs[2], c, circs[1]], level - 1);
    otherCirc([circs[1], circs[2], c, circs[0]], level - 1);
    return c;
};

//-------------------------------------------------------
brd.suspendUpdate();
var level = 3;
otherCirc([c0, c1, c2, c3], level);
otherCirc([c3, c1, c2, c0], level);
otherCirc([c0, c2, c3, c1], level);
otherCirc([c0, c1, c3, c2], level);
brd.unsuspendUpdate();