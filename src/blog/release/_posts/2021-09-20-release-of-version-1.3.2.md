---
layout: post
title: Release of 1.3.2
subtitle: Patch release
date: 2021-09-20T09:00:00+00:00
categories:
  - Releases
---

JSXGraph v1.3.2 further improves responsiveness of JSXGraph constructions and fixes a few bugs. Most notable, it is now possible to allow fullscreen mode together with the well known aspect ratio trick for HTML divs, i.e. to center an outer div element in full screen mode. Here is an example:

```
<div id='outer' style='max-width: 500px; margin: 0 auto;'>
<div id='jxgbox' class='jxgbox' style='height: 0; padding-bottom: 100%'></div>
</div>
<button onClick="board.toFullscreen('outer')">Fullscreen</button>

<script language="Javascript" type='text/javascript'>
var board = JXG.JSXGraph.initBoard('jxgbox', {
    axis:true,
    boundingbox:[-5,5,5,-5],
    fullscreen: { id: 'outer' },
    showFullscreen: true
});
var p = board.create('point', [-2, 3], {});
</script>
```

See also [https://jsxgraph.org/docs/symbols/JXG.Board.html#toFullscreen](https://jsxgraph.org/docs/symbols/JXG.Board.html#toFullscreen).

Please, do not forget to register for the [2nd JSXGraph conference](https://jsxgraph.org/conf2021) (October 5.- 7. 2021).

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
