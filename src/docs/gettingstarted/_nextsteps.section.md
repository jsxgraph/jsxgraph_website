# Next Steps

The command _board.create(elementType, [parameters], attributes)_ is the central method in JSXGraph for adding new elements to a construction. 
It takes at least two arguments: a string _elementType_ specifying the type of element (e.g., 'point', 'circle', 'functiongraph') and an array of parameters the element depends on, optionally followed by a object _attributes_.

Add two aditional points:

```js
var B = board.create('point', [-4,  5], { name: 'B' });
var C = board.create('point', [-6, -5], { name: 'C' });
```

The three points define the vertices of a triangle, which can then be created using these points as _parameters_:

```js
var p = board.create('polygon', [A, B, C], {});
```

The circumcircle of a triangle can be created as follows:

```js
var c = board.create('circle', [A, B, C], {});
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
        var A = board.create('point', [ 2,  1], { name: 'A' });
        var f = board.create(
                'functiongraph',
                [function(x) { return 0.5 * x * x - 2 * x; }],
                { strokeWidth: 3 }
        );
        var B = board.create('point', [-4,  5], { name: 'B' });
        var C = board.create('point', [-6, -5], { name: 'C' });
        var p = board.create('polygon', [A, B, C], {});
        var c = board.create('circle', [A, B, C], {});
    </script>
</body>
</html>
```

## JSXGraph  (Preview)
