# HTML Template with iFrame

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
</head>
<body style="background-color: #eeffff">
<iframe
        src="./iframe-src.template.html"
    style="width: 500px; height: 500px; overflow:hidden; border: none;"
    sandbox="allow-scripts"
    allow="fullscreen *;"
></iframe>
</body>
</html>
```

[<i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>HTML template with iFrame](src/iframe.template.html)

## iFrame Source – JSXGraph Hosted Via CDN
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
    <style>
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
<div id="box" class="jxgbox" 
     style="width: 100%; height: 100%; display: block; object-fit: fill; box-sizing: border-box;"></div>
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
````

[<i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>iFrame Source – JSXGraph hosted via CDN](src/iframe-src.template.html)