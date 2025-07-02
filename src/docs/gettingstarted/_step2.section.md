### Step 2 – Integrate Drawing Panel

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