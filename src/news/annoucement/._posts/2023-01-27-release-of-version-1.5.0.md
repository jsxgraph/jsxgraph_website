---
layout: post
title: Release of 1.5.0
subtitle: Major new release
date: 2023-01-27T07:00:00+00:00
categories:
  - Releases
---

Dear friends of JSXGraph,

We are happy to announce the release of JSXGraph v1.5.0. 

With this release, JSXGraph got a major face lift: Github user [@sritchie](https://github.com/sritchie) ported the JSXGraph
source code from AMD to ES6 imports. Thanks also to [@geometryzen](https://github.com/geometryzen) for the extensive contributions 
and to all who helped in improving JSXGraph. This will make JSXGraph ready for the future!
What does these changes mean for users of JSXGraph? Hopefully nothing, beside that
JSXGraph is now running again in various environments like nodejs and as a webworker.
Changes might be necessary is JSXGraph source is used for granular packaging.
Please, get in contact with the developers if you experience incompatibilities.
See below for the various possibilities how to include JSXGraph in your project.


For the new features in JSXGraph, the new attributes `majorTickEndings` and `ignoreInfiniteTickEndings` 
allow to restrict major ticks to certain quadrants, see the [API doc](https://jsxgraph.org/docs/symbols/Ticks.html#majorTickEndings).

For use on mobile devices, the new browser attribute `browserPan` ([API doc](https://jsxgraph.org/docs/symbols/JXG.Board.html#browserPan)) enables user to swipe the page also by tapping on a JSXGraph board. Please, be aware to tap twice on the board until the swiping starts.

In order to make constructions more colorful, individual shadow types can be set for stroke elements by the new attribute `shadow`.
It is possible to adjust the parameters `color`, `opacity`, `blur` and `offset` see 
[API doc](https://jsxgraph.org/docs/symbols/JXG.GeometryElement.html#shadow) and the [new examples database](https://jsxgraph.org/share/example/shadows).

There is also a change in the keyboard event handling: `drag` and `move` events are triggered and there are the new events
`keymove` for the board and `keydrag` for elements.

A user request was to make the size of a JSXGraph adjustable in fullscreen mode. This is possible with the new
board attribute `fullscreen{ scale: 0.85 }`, see [API doc](https://jsxgraph.org/docs/symbols/JXG.Board.html#fullscreen).

A new experimental board attribute is `logging`,([API doc](https://jsxgraph.org/docs/symbols/JXG.Board.html#logging)). 
By default, it is disabled. If enabled, user activity is logged in the board object `userLog`.
At the time being, only `drag` events are logged, see this [example](https://jsxgraph.org/share/example/logging-of-user-activity).

The new element attribute `transitionProperties` together with `transitionDuration` enables (in SVG) more flexible transitions and even animations.
See [this example](https://jsxgraph.org/share/example/animation-using-css-transitions) as an initial step to use CSS transitions for animations.

The most notable further improvements are

- the bounding box is now stable even during repeated orientation changes of a mobile device
- The `infobox` element received the new attributes `distanceX` and `distanceY`.
- Click on sliders triggers now `drag` events
- There are new turtle methods `getPenColor`, `getHighlightPenColor`, and `getPenSize`
- *shadowDOM* and *browserless* support has been improved
- Elements which are used in JessieCode functions to create an element are automatically marked as parents. This is of relevance hen the parent element is removed.
- The method `startAnimation` allows functions as parameters
- There are the new point faces `|` ('divide') and `-` ('minus')
- Some speed improvements
- Version 1.5.0 comes with an __API change__ in the side project *JSXCompressor* for deflating zipped data. Here you have to replace 
`JXG.decompress` by `JSXCompressor.default.decompress`. See the folder JSXCompressor in the JSXGraph github repository for examples.

Last but not least, the JSXGraph ecosystem has been overhauled. Among many other changes, the annoying dependence on the `canvas` package is now removed. 
As always, a more complete overview of the changes is in the [CHANGELOG](https://github.com/jsxgraph/jsxgraph/blob/main/CHANGELOG.md).

Again, thanks to all contributors who helped to improve JSXGraph!

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann


## How to include JSXGraph

In the following the various possibilities how to include JSXGraph are described.

1) If JSXGraph is included into the web page with the good old `<script  src=".../jsxgraphcore.js">`, 
*nothing* changes. Here is a small example:

```{.html}
<!DOCTYPE html>
<html>
<head>
    <title>JSXGraph</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="./jsxgraph.css" />
    <script type="text/javascript" src="path-to/jsxgraphcore.js"></script>
</head>
<body>
<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"> </div>
<script>
    var board = JXG.JSXGraph.initBoard('jxgbox', { 
        boundingbox: [-5, 5, 5, -5], axis:true
    });
    var curve = board.create('functiongraph', ['ln(x']);
</script>
</body>
```

JSXGraph should be backwards compatible at least down to IE 10.

2) If JSXGraph is included as __AMD module__ there is a change: JSXGraph is now exported as *unnamed module*.
This allows e.g. to patch the JSXGraph STACK plug-in without changing the source code.
Here is an example. 

- The hosting HTML file:

```{.html}
<body>
    <h1>Use AMD / RequireJS</h1>
    <script data-main="./amdapp" src="require.js"></script>
    <div id="jxgbox" class="jxgbox" style="width:500px; height:500px"></div>
</body>
```

- The AMD module file `amdapp.js`:

```{.javascript}
requirejs(['path-to/jsxgraphcore'], function (JXG) {
    var board = JXG.JSXGraph.initBoard('jxgbox', 
            {boundingbox: [-5, 5, 5, -5], axis: true });
    var curve = board.create('functiongraph', ['ln(x']);
});
```

3) Using CommonJS __`import`__.

```{.javascript}
<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"> </div>
<script type="module">
    import JXG from 'path-to/jsxgraphcore.js';

    const board = JXG.JSXGraph.initBoard('jxgbox', { 
        boundingbox: [-5, 5, 5, -5], axis:true
    });
    var curve = board.create('functiongraph', ['ln(x']);
</script>
```

4) Using ES6 __`import`__.

```{.javascript}
<div id="jxgbox" class="jxgbox" style="width:600px; height:600px;"> </div>
<script type="module">
    import JXG from 'path-to/jsxgraphcore.mjs';

    const board = JXG.JSXGraph.initBoard('jxgbox', { 
        boundingbox: [-5, 5, 5, -5], axis:true
    });
    var curve = board.create('functiongraph', ['ln(x']);
</script>
```


5) Running JSXGraph in **nodejs**. With this release, it is (again) possible to run
JSXGraph on server side using nodejs. 
Here is an example that converts a JSXGraph construction into a png file on server side:

```{.javascript}
import JXG from 'path-to/jsxgraphcore.js';
import fs from 'fs';

JXG.Options.text.display = 'internal';
var board = JXG.JSXGraph.initBoard("jxgbox", {
    boundingbox: [-5, 5, 5, -5],
    renderer: 'canvas',
    axis: true
})
var p = board.create('point', [1,1]);
var c = board.create('circle', [[0, 0], 2.5], {fillColor: 'yellow', fillOpacity: 0.3});
board.update();
if (JXG.supportsCanvas()) {
    // Print data url
    console.log(board.renderer.canvasRoot.toDataURL())
    // Save to file "out.png"
    var out = fs.createWriteStream('./out.png'),
        stream = board.renderer.canvasRoot.createPNGStream()
    stream.on('data', function (chunk) {
        out.write(chunk);
    })
    stream.on('end', function () {
        console.log('saved "out.png"');
    });
}
```

Run it on nodejs with `nodejs example.js`

6) JSXGraph can be included as __npm package__:

First install the npm package `jsxgraph`:

```.bash
# Official release:
npm install jsxgraph 

# In case there is a release candidate:
npm install jsxgraph@next
```

Use JSXGraph in your JavaScript node project, e.g. `example.js`:

```.javascript
// Run JSXGraph on node:
import JXG from 'jsxgraph';
console.log('version', JXG.version);
console.log("JXG.Math:", JXG.Math.gcd(9, 24));
console.log("Node", JXG.isNode());
var board = JXG.JSXGraph.initBoard("jxgbox", {
    boundingbox: [-5, 5, 5, -5],
    renderer: 'no',
    axis: true
});
var p = board.create('point', [1,1]);
console.log("Point:", p.X(), p.Y());
```

Run it on nodejs with `nodejs example.js`

7) Run JSXGraph in a __webworker__:
Here is a simple example which computes the gcd of two numbers with JSXGraph. First comes the HTML part:

```{.html}
<script>
    if (window.Worker) {
        const myWorker = new Worker("worker.js");

        const butt = document.querySelector('#startButton');
        const output = document.querySelector('#output');
        butt.onclick = function() {
            myWorker.postMessage([6, 15]);
            myWorker.onmessage = (e) => {
                output.value = e.data;
                console.log('Message received from worker'{.javascript caption="Webworker JavaScript-Datei `worker.js`"});
            }
        };
    }
</script>
```

The webworker part `worker.js` looks like this:

```{.javascript}
importScripts('path-to/jsxgraphcore.js');
console.log("I'm a web worker");
onmessage = (e) => {
    console.log('self', self);
    console.log('Message received from main script');
    const txt = `Result: ${JXG.version} \n gcd=${JXG.Math.gcd(e.data[0], e.data[1])}`;
    console.log('Posting message back to main script');
    postMessage(txt);
};
```

8) ES6 __`import`__ of the source code. This is interesting for JSXGraph developers and if you do your
own granular packaging of JSXGraph modules.

However, this import is not compatible to the previous import of AMD modules. Please, get in contact with the
developers if you experience incompatibilities.

```.javascript
<div id="jxgbox" class="jxgbox" style="width: 600px; height: 600px;"></div>
<script type="module">
    import JXG from 'path-to-src/index.js';

    const board = JXG.JSXGraph.initBoard('jxgbox', { 
        boundingbox: [-5, 5, 5, -5], axis:true
    });

    let relation = board.jc.snippet("ln(x)", true, 'x');
    let curve = board.create('functiongraph', [relation]);
    let integral = board.create('integral', [[2, 4], curve]); 
</script>
```
