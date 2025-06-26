---
layout: post
title: 1.5.0 Release Candidate
subtitle: Preview release
date: 2022-12-19T07:00:00+00:00
categories:
  - Releases
---

Dear friends of JSXGraph,

JSXGraph got a major new update: Github user #sritchie ported the JSXGraph source code
from AMD to ES6 imports. This will make JSXGraph ready for the future!
What does these changes mean for users of JSXGraph? Hopefully nothing, beside that
JSXGraph is now running again in various environments like nodejs and as a webworker.

However, since the source code has changed quite a bit, we - the JSXGraph team -
kindly ask you to support us and test the release candidate v1.5.0-rc1. 
It is available from the JSXGraph website:

- <https://jsxgraph.org/distrib/jsxgraphcore_1.5.0rc1.js> minified version
- <https://jsxgraph.org/distrib/jsxgraph_1.5.0rc1.css> CSS file
- <https://jsxgraph.org/distrib/jsxgraphsrc_1.5.0rc1.js> unminified version for development

It would be very helpful to us if you download these files, test your applications 
and give us feedback via [Github](https://github.com/jsxgraph/jsxgraph/issues/494).

Here are the various possibilities to include JSXGraph with examples:

1) If JSXGraph is included into the web page with `<script  src=".../jsxgraphcore.js">`, 
hopefully *nothing* changes. Here is a small example:

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
Here is an example, the hosting HTML file looks like:

```{.html}
<body>
    <h1>Use AMD / RequireJS</h1>
    <script data-main="./amdapp" src="require.js"></script>
    <div id="jxgbox" class="jxgbox" style="width:500px; height:500px"></div>
</body>
```

The file `amdapp.js`:

```{.javascript}
requirejs(['path-to/jsxgraphcore'], function (JXG) {
    var board = JXG.JSXGraph.initBoard('jxgbox', 
            {boundingbox: [-5, 5, 5, -5], axis: true });
    var curve = board.create('functiongraph', ['ln(x']);
});
```

3) Using __`import`__:

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

4) Running JSXGraph in **nodejs**. With this release, it is (again) possible to run
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

5) Run JSXGraph in a __webworker__:
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

__Update__ (20.12.2022)

6) JSXGraph can be included as __npm package__:

First install the npm package `jsxgraph`:

```.bash
# Official release:
npm install jsxgraph 

# Release candidate:
npm install jsxgraph@next
```

Use JSXGraph in your JavaScript project:

```.javascript
import JXG from 'jsxgraph';
```


Enjoy and thanks a lot in advance,

Alfred
