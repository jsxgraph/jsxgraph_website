---
layout: post
title: Release of 1.2.3
subtitle: Patch release
date: 2021-05-21T09:00:00+00:00
categories:
  - Releases
---

JSXGraph version v1.2.3 contains small improvements and bug fixes, and some new experimental features, see <https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md>.
Most notable are

- Add Typescript definition file `index.d.ts` (not yet complete). Thanks to David Holmes for the contribution!!!
- KaTeX support (`useKatex:true`)

```html
<!doctype html>
<html>
<head>
<script type="text/javascript" charset="UTF-8"
    src="https://cdn.jsdelivr.net/npm/jsxgraph@1.2.3/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" 
    href="https://cdn.jsdelivr.net/npm/jsxgraph@1.2.3/distrib/jsxgraph.css" />

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.13.10/dist/katex.min.css" 
    integrity="sha384-0cCFrwW/0bAk1Z/6IMgIyNU3kfTcNirlObr4WjrUU7+hZeD6ravdYJ3kPWSeC31M" 
    crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/katex@0.13.10/dist/katex.min.js" 
    integrity="sha384-dtFDxK2tSkECx/6302Z4VN2ZRqt6Gis+b1IwCjJPrn0kMYFQT9rbtyQWg5NFWAF7" 
    crossorigin="anonymous"></script>
</head>
<body>
<div id="jxgbox" class="jxgbox" style="width:600px; height:600px; border:1px solid black;"></div>
<script type="text/javascript">
JXG.Options.text.useKatex = true;

var board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-1, 10, 11, -2], axis: true});
var a = board.create('slider',[[-0.7,1.5],[5,1.5],[0,0.5,1]], {
    suffixlabel:'t_1=', 
    unitLabel: ' \\text{ ms}', 
    snapWidth:0.01}),

    func = board.create('functiongraph',[function(x){return (a.Value()*x*x)}], {strokeColor: "red"}),
    txt1 = board.create('text', [5, 1, function(){ 
            return 'a(t_1)= { 1 \\over ' + a.Value().toFixed(3) + '}';
        }], {fontSize: 15, fixed:true, strokeColor:'red', anchorY: 'top'});

</script>
</body>
</html>
```

- `board.fullUpdate()` updates size info of text elements. 
This is helpful for JSXGraph constructions which are initialised in a hidden parent element, resulting in misplaced text elements.
When the board becomes visible, now a call of `board.fullUpdate()` is sufficient to correct the position of the text elements. 
This can be triggered in an event listener (by the developer). See an example at <https://github.com/jsxgraph/jsxgraph/issues/348>.

Enjoy, 

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
