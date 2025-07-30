# Complete HTML File with KaTeX (Online Usage)

KaTeX can also be integrated into JSXGraph to display mathematical formulas within labels or texts. To use it, include the KaTeX library in your HTML file and enable the useKatex attribute when creating text elements.

```js
var A = board.create('point', [-4,  5], { name: '$$A$$', useKaTeX: true });
````

Jo enable KaTeX rendering for all text objects on the board, use the following global option:

```js
JXG.Options.text.useKaTeX = true;
```

This guarantees that all text elements generated in JSXGraph are automatically rendered by KaTeX, eliminating the need to activate the option for each object separately.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script type="text/javascript" charset="UTF-8"
            src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css"      
          integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP" 
          crossorigin="anonymous">
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js"
            integrity="sha384-cMkvdD8LoxVzGF/RPUKAcvmm49FQ0oxwDF3BGKtDXcEc+T1b2N+teh/OJfpU0jr6" 
            crossorigin="anonymous"></script>
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
    <script type="text/javascript">
        JXG.Options.text.useKaTeX = true; // Enable KaTeX for all JSXGraph elements!
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