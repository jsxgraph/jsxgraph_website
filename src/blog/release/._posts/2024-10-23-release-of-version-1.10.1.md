---
layout: post
title: Release of 1.10.1
subtitle: Patch release
categories:
  - Releases
---

Dear friends of JSXGraph,

JSXGraph v1.10.1 is a patch release with various bug fixes. Now, it is no longer possible to drag a glider object off the hosting function graph. Also, 3D points can not be dragged outside of the 3D view box and a non-visible 3D plane does not crash JSXGraph.

Further, the very python2 server module to call software on server side has been retired and taken out of the source code (it is still available in `src/unused`). Meanwhile, there exist much better ways to communicate with programs on server side.

There is one notable improvement (supplied by @tom-berend): the initial and final speed of animated points can now be adjusted, see [`moveTo()`](https://jsxgraph.org/docs/symbols/JXG.CoordsElement.html#moveTo) and [`visit()`](https://jsxgraph.org/docs/symbols/JXG.CoordsElement.html#moveTo).

For more improvements and bug fixes see the CHANGELOG.

Finally, we want to announce the first JSXGraph *live event* __24 hours of JSXGraph__ on February 26./27, 2025 at the University of Bayreuth, Germany. The meeting homepage is <https://jsxgraph.org/24hours2025/>. The event is free of charge and everybody is invited to come and show, learn, do, and discuss JSXGraph related topics.

Enjoy,

Carsten Miller, Andreas Walter, and Alfred Wassermann



