# HTML template – JSXGraph locally hosted

If you want to include a local copy of JSXGraph in your HTML file,
download the two following JSXGraph files

- <https://jsxgraph.org/distrib/jsxgraphcore.js>
- <https://jsxgraph.org/distrib/jsxgraph.css>

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
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
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

[<i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>HTML template – JSXGraph locally hosted](src/html-local.html)