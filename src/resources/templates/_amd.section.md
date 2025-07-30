# Complete HTML File with AMD – Asynchronous Module Definition (Online Usage)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script type="text/javascript" charset="UTF-8"
            src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
    <script type="text/javascript" src="require.js">

        // Insert JSXGraph code here!

    </script>
</body>
</html>
```

```js
require.config({ baseUrl: "path/to/JSXGraph/src/" });
require(['jsxgraph', 'base/line', 'base/curve'],
    function (JSXGraph, Line, Plot) {
        var board = JSXGraph.initBoard('box', {...}),
            p = board.create('plot', [Math.sin]);
    });
```
