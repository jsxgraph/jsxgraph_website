# Step 3 – Add JSXGraph Elements

Once the board is initialized, you can add geometric elements such as points, circles, or function graphs. 

To create a point in your JSXGraph construction, just add the following line to your code:

```js
var A = board.create('point', [2, 1], { name: 'A' });
```

A function graph can be included by adding:

```js
var f = board.create(
    'functiongraph', 
    [function(x) { return 0.5 * x * x - 2 * x; }], 
    { strokeWidth: 3 }
);
```

## Complete HTML File (Online Usage)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script type="text/javascript" src="jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css" href="jsxgraph.css" />
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
    <script type="text/javascript">
        var board = JXG.JSXGraph.initBoard(
            'box', {
                boundingbox: [-10, 10, 10, -10], 
                axis:true
            });
        var A = board.create('point', [2, 1], { name: 'A' });
        var f = board.create(
            'functiongraph', 
            [function(x) { return 0.5 * x * x - 2 * x; }],
            { strokeWidth: 3 }
        );
    </script>
</body>
</html>
```

## JSXGraph  (Preview)
