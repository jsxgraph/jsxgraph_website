# Styling of Elements

The optional _attributes_ object allows you to customize the appearance and behavior of an element, such as its color, size, label, or whether it is draggable.

## Attributes 

To make a point non-movable, you can set the attribute _fixed_, which prevents users from dragging it on the board:

```js
var A = board.create('point', [ 2,  1], { name: 'A', fixed: true });
```

The fill color of a polygon can be set using the _fillColor_ attribute:

```js
var p = board.create('polygon', [A, B, C], { fillcolor: '#ff0099'});
```

You can customize the stroke of a circle using attributes like _strokeColor_, _strokeWidth_ for line thickness and _dash_ for dashed or dotted styles:

```js
var c = board.create('circle', [A, B, C], { 
    strokeColor: 'orange', 
    strokeWidth: 5, 
    dash: 3
});
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
        var A = board.create('point', [ 2,  1], { name: 'A', fixed: true });
        var f = board.create(
                'functiongraph',
                [function(x) { return 0.5 * x * x - 2 * x; }],
                { strokeWidth: 3 }
        );
        var B = board.create('point', [-4,  5], { name: 'B' });
        var C = board.create('point', [-6, -5], { name: 'C' });
        var p = board.create('polygon', [A, B, C], { fillcolor: '#ff0099'});
        var c = board.create('circle', [A, B, C], {
            strokeColor: 'orange',
            strokeWidth: 5,
            dash: 3
        });
</body>
</html>
```

## JSXGraph  (Preview)
