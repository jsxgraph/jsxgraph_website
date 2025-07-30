# Complete HTML File with MathJax (Online Usage)

MathJax can easily be integrated into JSXGraph to display mathematical formulas within labels or texts. To use it, include the MathJax library in your HTML file and enable the `useMathJax` attribute when creating elements. 

```js
var A = board.create('point', [-4,  5], { name: '$$A$$', useMathJax: true });
````

JSXGraph will then automatically render LaTeX-style expressions with MathJax, allowing for high-quality mathematical notation.

To enable MathJax rendering for all text elements on the board, use the following global option before initializing the board:

```js
JXG.Options.text.useMathJax = true;
```

This ensures that every text element created in JSXGraph will automatically be processed by MathJax without the need to set the option individually for each element.

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
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" 
            id="MathJax-script" async></script>
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
    <script type="text/javascript">
        JXG.Options.text.useMathJax = true; // Enable MathJax for all JSXGraph elements!
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