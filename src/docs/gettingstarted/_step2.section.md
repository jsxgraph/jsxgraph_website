# Step 2 – Integrate JSXGraph Board  

The construction which is displayed by JSXGraph resides in an HTML element. Usually, a div-element is taken.
This division needs an ID. Using this ID, we declare this element to be a board of JSXGraph.

The following code has to be placed into the body part of an HTML file:

```html
<div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>
<script>
    var board = JXG.JSXGraph.initBoard(
        'box', {
            boundingbox: [-10, 10, 10, -10],
            axis:true
        });
</script>
```

#### HTML template – JSXGraph hosted via CDN

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
            'box', {
                boundingbox: [-10, 10, 10, -10], 
                axis:true
            });
    </script>
</body>
</html>
```

#### JSXGraph Preview