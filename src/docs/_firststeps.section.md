# First Steps

Use <b>the</b> <a href="https://ipesek.github.io/jsxgraphbook/" target="_blank">JSXGraph Book [↗]</a> for a comprehensive introduction to JSXGraph.

## Step 1 – Include JSXGraph

#### Online Usage

The preferred way is to include JSXGraph online from one of the CDNs (Content Delivery Network).
Add the following lines into the document head:

```html
<script type="text/javascript" charset="UTF-8"
 src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
```

#### Local Usage

If you want to include a local copy of JSXGraph in your HTML file,
download the two following JSXGraph files

* <https://jsxgraph.org/distrib/jsxgraphcore.js>

* <https://jsxgraph.org/distrib/jsxgraph.css>

and add the following lines into the document head:

```html
<link rel="stylesheet" type="text/css" href="jsxgraph.css" />
<script type="text/javascript" src="jsxgraphcore.js"></script>
```

#### Complete HTML File (online)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script type="text/javascript" charset="UTF-8"
            src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
</head>
<body>

</body>
</html>
```

## Step 2 – Integrate Drawing Panel

The construction which is displayed by JSXGraph resides in an HTML element.
Usually, a div-element is taken.
This division needs an ID.
Using this ID, we declare this element to be a drawing panel of JSXGraph.
The following code has to be placed into the body part of an HTML file:

```html
<div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
<script type="text/javascript">
    var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis:true});
</script>
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
    </script>
</body>
</html>
```

#### The Result

{{< construction example-elements >}}
<script type = "text/javascript">
    (function () {
        const BOARDID = 'example-elements';
        const board = JXG.JSXGraph.initBoard(BOARDID, {boundingbox: [-10, 10, 10, -10], axis:true});
    })();
</script> 
{{< /construction >}}

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
