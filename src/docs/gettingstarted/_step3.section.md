## Step 3 – Add JSXGraph Elements

To create a point in your JSXGraph construction, just add the following line to your code:

```html
var A = board.create('point', [2, 1], {name: 'A'});
```

A function graph can be included by adding:

```html
var f = board.create('functiongraph', [function(x) { return 0.5*x*x-2*x;}], {strokeWidth: 3});
```

#### Complete HTML File (online)

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
        var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis:true});
        var A = board.create('point', [2, 1], {name: 'A'});
        var f = board.create('functiongraph', [function(x) { return 0.5*x*x-2*x;}], {strokeWidth: 3});
    </script>
</body>
</html>
```

#### The Result

{{< construction example-blank >}}
<script type = "text/javascript">
    (function () {
        const BOARDID = 'example-blank';
        const board = JXG.JSXGraph.initBoard(BOARDID, {boundingbox: [-10, 10, 10, -10], axis:true});
        var A = board.create('point', [2, 1], {name: 'A'});
        var f = board.create('functiongraph', [function(x) { return 0.5*x*x-2*x;}], {strokeWidth: 3});
    })();
</script> 
{{< /construction >}}
