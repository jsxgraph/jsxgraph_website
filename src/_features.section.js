const board = JXG.JSXGraph.initBoard("features", {
    boundingbox: [-6, 6, 6, -6],
    keepaspectratio: true,
    pan: { enabled: false },
    zoom: { enabled: false }
});

// Set visual attributes
var
    // Construct triangle ABC
    A = board.create('point', [-2, -4], { name: '\\(A\\)', label: { offset:[0, -20] }, showInfobox: false }),
    B = board.create('point', [4, 0], { name: '\\(B\\)', label: { offset:[5, -15] }, showInfobox: false }),
    C = board.create('point', [-4, 4], { name: '\\(C\\)', label: { offset:[0, 20] }, showInfobox: false }),
    pol = board.create('polygon', [A, B, C], {
        fillColor: '#FFFF00',
        borders: {
            strokeWidth: 2,
            strokeColor: '#eedd66'
        }
    });

// Orthocenter H
var pABC, pBCA, pCAB, i1;
pABC = board.create('perpendicular', [pol.borders[0], C], { dash: 2, strokeWidth: 1, strokeColor: '#8000c0'});
pBCA = board.create('perpendicular', [pol.borders[1], A], { dash: 2, strokeWidth: 1, strokeColor: '#8000c0'});
pCAB = board.create('perpendicular', [pol.borders[2], B], { dash: 2, strokeWidth: 1, strokeColor: '#8000c0'});
i1 = board.create('intersection', [pABC, pCAB, 0], { name: '\\(H\\)', size: 3, strokeColor: '#8000c0', fillColor: '#8000c0' });
pi1 = board.create('intersection', [pABC, pol.borders[0], 0], { name: '', size: 1, strokeColor: '#8000c0', fillColor: '#8000c0' });
pi2 = board.create('intersection', [pBCA, pol.borders[1], 0], { name: '', size: 1, strokeColor: '#8000c0', fillColor: '#8000c0' });
pi3 = board.create('intersection', [pCAB, pol.borders[2], 0], { name: '', size: 1, strokeColor: '#8000c0', fillColor: '#8000c0' });
a1 = board.create('nonreflexangle', [B, pi1, C], { name: '', size: 1, strokeColor: '#8000c0', fillColor: 'none', radius:0.4 });
a2 = board.create('nonreflexangle', [A, pi2, C], { name: '', size: 1, strokeColor: '#8000c0', fillColor: 'none', radius:0.4 });
a3 = board.create('nonreflexangle', [A, pi3, B], { name: '', size: 1, strokeColor: '#8000c0', fillColor: 'none', radius:0.4 });

// Centroid S
var mAB, mBC, mCA;
mAB = board.create('midpoint', [A, B], { name: '', size: 1, strokeColor: '#0080c0', fillColor: '#0080c0' });
mBC = board.create('midpoint', [B, C], { name: '', size: 1, strokeColor: '#0080c0', fillColor: '#0080c0' });
mCA = board.create('midpoint', [C, A], { name: '', size: 1, strokeColor: '#0080c0', fillColor: '#0080c0' });

var ma, mb, mc, i2;
ma = board.create('segment', [mBC, A], { dash: 1, strokeWidth: 1, strokeColor: '#0080c0' });
mb = board.create('segment', [mCA, B], { dash: 1, strokeWidth: 1, strokeColor: '#0080c0'  });
mc = board.create('segment', [mAB, C], { dash: 1, strokeWidth: 1, strokeColor: '#0080c0'  });
i2 = board.create('intersection', [ma, mc, 0], { name: '\\(S\\)', size: 3, strokeColor: '#0080c0', fillColor: '#0080c0'  });

// Circumccenter U
var c = board.create('circumcircle', [A, B, C], {
    strokeColor: '#ffaa00',
    dash: 0,
    strokeWidth: 1,
    center: { name: '\\(U\\)', visible: true, withLabel: true, size: 3, strokeColor: '#ffaa00', fillColor: '#ffaa00'  }
});

// Euler line: U, H and S are collinear
var euler = board.create('line', [i1, i2], {
    strokeWidth: 3,
    strokeColor: '#33aa66'
});