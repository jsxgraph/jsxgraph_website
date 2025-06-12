---
layout: post
title: Release of 1.4.4
subtitle: Maintenance release
date: 2022-05-27T07:00:00+00:00
categories:
  - Releases
---

JSXGraph release v1.4.4 is a patch release, which additionally introduces 
two new features. First, JSXGraph 
can now be used in shadowDOM. Thanks go to Holger Engels from <https://kmap.eu> 
who has sent in the original patch. In this release, fullscreen mode
of JSXGraph constructions in shadowDOM do not yet work. 
Second, intersection points of polygons have been implemented. Example:

~~~
var pol1 = board.create('polygon', [[1, 1], [2, 0], [1, 2], [-1,1]]),
    pol2 = board.create('polygon', [[1, 1.5], [2, 2], [0, 3], [0,0.5]]),
    p = board.create('intersection', [pol1, pol2, 3]);
~~~

which creates the fourth intersection point of the two polygons.

In 1.4.3 3D support had been announced. Unfortunately, one file was missing 
in jsxgraphcore.js which made 3D unusable. Initial examples can be seen
at <https://jsxgraph.org/docs/symbols/View3D.html>, 
<https://jsxgraph.org/docs/symbols/Functiongraph3D.html>, and 
<https://jsxgraph.org/docs/symbols/ParametricSurface3D.html>.

Further, index.d.ts and API docs has been constantly improved, a bug concerning 
arrow parallels has been fixed, and a bug in resize handling has been removed.
Thanks to all contributors who helped to improve JSXGraph!

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
