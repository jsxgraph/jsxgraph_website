# HTML Template – JSXGraph Hosted Via CDN

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

        // Insert JSXGraph code here!

    </script>
</body>
</html>
```

[HTML template – JSXGraph hosted via CDN](src/cdn.template.html)

# HTML Template – JSXGraph Locally Hosted

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <link rel="stylesheet" type="text/css" href="jsxgraph.css">
    <script src="jsxgraphcore.js"></script>
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>
    <script>
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
To include JSXGraph locally in your HTML file, place the following three files in the same folder:

- [HTML template – JSXGraph locally hosted](src/local.template.html)
- <https://jsxgraph.org/distrib/jsxgraphcore.js>
- <https://jsxgraph.org/distrib/jsxgraph.css>


# HTML Template – JSXGraph Import (ES6)

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
    <div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>

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

[HTML template – JSXGraph import (ES6)](src/es6.template.html)
