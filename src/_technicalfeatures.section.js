
const board = JXG.JSXGraph.initBoard(
    'technicalfeatures',
    {
        boundingbox: [-5, 5, 5, -5],
        minimizeReflow: 'svg',
        axis: false,
        showNavigation: false,
        renderer: 'svg',
        zoom: {
            enabled: false
        },
        pan: {
            enabled: false
        }
    }
);

var view = board.create(
    'view3d',
    [[-4, -4], [8, 8],
        [[-2, 2], [-2, 2], [-2, 2]]],
    {
        projection: 'central',
        trackball: { enabled: true },
        depthOrder: {
            enabled: true
        },
        xAxis: {visible: false },
        yAxis: {visible: false },
        zAxis: {visible: false },
        xPlaneRear: { visible: false },
        yPlaneRear: { visible: false },
        zPlaneRear: { fillOpacity: 0.2, visible: false }
    }
);

let rho = 1.6180339887;
let vertexList = [
    [0, -1, -rho], [0, +1, -rho], [0, -1, rho], [0, +1, rho],
    [1, rho, 0], [-1, rho, 0], [1, -rho, 0], [-1, -rho, 0],
    [-rho, 0, 1], [-rho, 0, -1], [rho, 0, 1], [rho, 0, -1]
];
let faceArray = [
    [4, 1, 11],
    [11, 1, 0],
    [6, 11, 0],
    [0, 1, 9],
    [11, 10, 4],
    [9, 1, 5],
    [8, 9, 5],
    [5, 3, 8],
    [6, 10, 11],
    [2, 3, 10],
    [2, 10, 6],
    [8, 3, 2],
    [3, 4, 10],
    [7, 8, 2],
    [9, 8, 7],
    [0, 9, 7],
    [4, 3, 5],
    [5, 1, 4],
    [0, 7, 6],
    [7, 2, 6]
];

let iterations = 3;   // 0 is a 20 sided icosahedron,  1 is 80 sided, 2 is 320 sided, 3 is 1280 sided, etc

/* midpoint between two vertices */
let midPoint = (p1, p2) => [(p2[0] + p1[0]) / 2, (p2[1] + p1[1]) / 2, (p2[2] + p1[2]) / 2];

/* calculate the unit vector */
let v3Unit = (v) => {
    let length = Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2) + Math.pow(v[2], 2));
    return [v[0] / length, v[1] / length, v[2] / length];
};

let newFaceArray = [];

for (let j = 0; j < iterations; j++) {
    newFaceArray = [];
    for (let i = 0; i < faceArray.length; i++) {

        let f = faceArray[i];

        // add three new points at the midpoint of each vertex
        let m0 = midPoint(vertexList[f[1]], vertexList[f[2]]);
        let m1 = midPoint(vertexList[f[0]], vertexList[f[2]]);
        let m2 = midPoint(vertexList[f[0]], vertexList[f[1]]);

        let radius = 2;  // our icos ran from +1 to -1

        let p0 = vertexList.push(v3Unit(m0).map((n) => n * radius)) - 1;  //new vertex point on surface of sphere through centroid and origin
        let p1 = vertexList.push(v3Unit(m1).map((n) => n * radius)) - 1;
        let p2 = vertexList.push(v3Unit(m2).map((n) => n * radius)) - 1;

        // now four faces - the three corner-to-midpoints and then all three midpoints
        newFaceArray.push([f[0], p2, p1]);
        newFaceArray.push([f[1], p0, p2]);
        newFaceArray.push([f[2], p1, p0]);
        newFaceArray.push([p0, p1, p2]);
    }
    faceArray = newFaceArray;   // in case we go around again
}

// for fun, let's decorate random colors
let randomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    // if (Math.random() < 0.8) {
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // } else {
    //     return 'none';
    // }
    return color;
}

let colorArray = faceArray.map((i) => randomColor());  // same length as faces


var ico = view.create('polyhedron3d', [vertexList, faceArray], {
    fillColorArray: colorArray,
    fillOpacity: 1,
    strokeWidth: 0.1,
    layer: 12,
    shader: {
        enabled: true,
        type: 'angle',
        hue: 0,
        saturation: 90,
        minlightness: 60,
        maxLightness: 80
    }
});