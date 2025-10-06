---
layout: post
title: Release of 1.11.0-beta2
subtitle: Beta release
categories:
  - Releases
---

Dear friends of JSXGraph,

today we released JSXGraph v1.11.0-beta2 on our web server and on npm (and therefore on cdnjs, too). At this point we are still close to the release of v1.11.0
and hope to get get feedback about remaining bugs. 

Additionally to the main new features of JSXGraph v1.11.0-beta1, the beta2 version contains mainly enhancements of 3D functionality:

- __3D polyhedra:__ The new element `polyhedron3d` allows the construction of polyhedra by supplying a list of vertices and a list of faces.
Here is a simple example:

```.javascript
  var cube = view.create('polyhedron3d', [
      [
          [-3, -3, -3],
          [3, -3, -3],
          [3, 3, -3],
          [-3, 3, -3],

          [-3, -3, 3],
          [3, -3, 3],
          [3, 3, 3],
          [-3, 3, 3]
      ],
      [
          [0, 1, 2, 3],
          [0, 1, 5, 4],
          [[1, 2, 6, 5], { fillColor: 'black', fillOpacity: 1, strokeWidth: 5 }],
          [2, 3, 7, 6],
          [3, 0, 4, 7],
          [4, 5, 6, 7]
      ]
  ], {
      fillColorArray: ['blue', 'red', 'yellow']
  });
```

See more examples in the [API docs](https://jsxgraph.org/beta/docs/symbols/Polyhedron3D.html). Moreover, polyhedra support a
[shading effect](https://jsxgraph.org/beta/docs/symbols/Face3D.html#shader).

- __Depth ordering:__ Before version 1.11, depth ordering of 3D points has been supported. Now, depth ordering is applied to a
given list of layers, i.e. all elements in a specified layer are depth ordered. This works quite good for the elements `point3d`, 
`polyhedron3d`, `polygon3d` (if flat), `line3d` (if finite, i.e. segments), `plane3d` (if finite). 
All polyhedra examples in the [API docs](https://jsxgraph.org/beta/docs/symbols/Polyhedron3D.html) use depth ordering. See also
the [attribute API docs](https://jsxgraph.org/beta//docs/symbols/View3D.html#depthOrder).
Depth ordering is available for the SVG and the canvas renderer. Still missing is the depth ordering of intersecting elements. 
- __3D transformations:__ In this beta2 release, preliminary support for 3D transformations has been implemented.
3D transformations are supported for the elements 
`point3d`, `line3d`, `plane3d`, `curve3d`, `surface3d`, `polyhedron3d`. Not supported at the time being are: `circle3d`, `polygon3d`, `text3d`, `ticks3d`.
Internally, a 3D transformation is handled as multiplication of vectors by a 4x4 matrix.
At the time being, the following transformation types are supported:
  - `translate`
  - `scale`
  - `rotate`
  - `rotateX`
  - `rotateY`
  - `rotateZ`
  
The available methods `apply`, `applyOnce`, ..., known from 2D transformations, are supported only rudimentary. This will be improved soon.
So far, construction with parents `[baseElement, transformations]` are supported.
Here are some examples which already work:

```.javascript
  // Some sliders
  var alpha = board.create('slider', [[-7, -6], [2, -6], [0, 0, 2 * Math.PI]], { name: '&alpha;' });
  var beta = board.create('slider', [[-7, -6.5], [2, -6.5], [0, 0, 2 * Math.PI]], { name: '&beta;' });
  var gamma = board.create('slider', [[-7, -7], [2, -7], [0, 0, 2 * Math.PI]], { name: '&gamma;' });
  var factor = board.create('slider', [[-7, -7.5], [2, -7.5], [0, 4, 5]], { name: 's' });

  // Points
  var A = view.create('point3d', [-1, 1, 0]);
  var t1 = view.create('transform3d', [0, 0, 1], { type: 'translate' });
  var t2 = view.create('transform3d', [() => alpha.Value()], { type: 'rotateX' });
  var t3 = view.create('transform3d', [() => beta.Value()], { type: 'rotateY' });
  var t4 = view.create('transform3d', [() => gamma.Value()], { type: 'rotateZ' });
  var B = view.create('point3d', ['A', [t1, t2, t3, t4]]);

  // Surface
  let r = 4;
  var surface = view.create('parametricsurface3d', [
      (u, v) => u,
      (u, v) => v,
      (u, v) => Math.sin(u * v * r / 4),
      [-3, 3], [-3, 3],
  ], { strokeWidth: 1, visible: true });

  var surface1 = view.create('parametricsurface3d', [
      (u, v) => [0, 0, 0],
      [-4, 4], [-3, 3]
  ], {
      strokeColor: 'red',
      strokeWidth: 1,
      visible: true
  });
  surface1.addTransform(surface, [t3, t2, t1]);

  surface.addTransform(surface, [t1, t2, t3]);
  var surface2 = view.create('parametricsurface3d', [surface, [t1, t2, t3]], { id: 'X2', strokeColor: 'red' });

  // Polyhedron
  let r = 2;
  var cube = view.create('polyhedron3d', [
      {
          a: [-r, -r, -r],
          b: [r, -r, -r],
          c: [r, r, -r],
          d: [-r, r, -r],

          e: [-r, -r, r],
          f: [r, -r, r],
          g: [r, r, r],
          h: [-r, r, r]
      },
      [
          ['a', 'b', 'c', 'd'],
          ['a', 'b', 'f', 'e'],
          ['b', 'c', 'g', 'f'],
          ['c', 'd', 'h', 'g'],
          ['d', 'a', 'e', 'h'],
          ['e', 'f', 'g', 'h']
      ]
  ], {
      fillColorArray: ['white', 'blue', 'red', 'green', 'orange', 'yellow'],
      fillOpacity: 0.9
  });

  var cube2 = view.create('polyhedron3d', [cube, [t1]], {
      fillColorArray: ['white', 'blue', 'red', 'green', 'orange', 'yellow'],
      fillOpacity: 0.9
  });
```

__Availability of the beta version:__

- jsxgraph.org: <https://jsxgraph.org/beta/jsxgraphcore.js>
- npmjs.org: `npm i jsxgraph@1.11.0-beta2`
- cdn: <https://cdn.jsdelivr.net/npm/jsxgraph@1.11.0-beta2/distrib/jsxgraphcore.js>
- source code: Checkout branch `develop` or tag `v1.11.0beta2`

Enjoy,

Alfred Wassermann



