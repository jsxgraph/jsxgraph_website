# 3D Elements

JSXGraph provides powerful 3D visualizations directly in the browser. As a first example you can create a draggable 3D point.

[More 3D examples]({{ relBase }}/share/tag/3d) 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>
    <script>
        var board = JXG.JSXGraph.initBoard(
                'view-result', {
                    boundingbox: [-10, 10, 10, -10],
                    axis:false,
                    pan: { enabled: false },
                    zoom: { enabled: false }
                });
        var view = board.create('view3d',
                [
                    [-4, -3],
                    [8, 8],
                    [
                        [-5, 5],
                        [-5, 5],
                        [-5, 5]
                    ]
                ],
                { projection: 'central' });

        var p = view.create('point3d', [1, 1, 2], {size: 5, name:'A'});
        view.create('line3d', [p, [1, 0, 0],  [0, () => -p.X() - 5]], {dash: 1});
        view.create('line3d', [p, [0, 1, 0],  [0, () => -p.Y() - 5]], {dash: 1});
        view.create('line3d', [p, [0, 0, 1],  [0, () => -p.Z() - 5]], {dash: 1});
    </script>
</body>
</html>
```

#### JSXGraph  Preview
