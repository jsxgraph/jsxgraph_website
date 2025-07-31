# HTML template – JSXGraph import (ES6)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <style>
        @import url("https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css");
    </style>
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>

    <script type="module">
        import JXG from 'https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.mjs';
        var board = JXG.JSXGraph.initBoard(
                'box', {
                    boundingbox: [-10, 10, 10, -10],
                    axis:true
                });

        // Insert JSXGraph code here!
        
    </script>
</body>
</html>
```