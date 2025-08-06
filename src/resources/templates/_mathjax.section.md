# HTML template with MathJax

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
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" 
            id="MathJax-script" async></script>
</head>
<body>
    <div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>
    <script>
        JXG.Options.text.useMathJax = true; // Enable MathJax for all JSXGraph elements!
        var board = JXG.JSXGraph.initBoard(
            'box', {
                boundingbox: [-10, 10, 10, -10], 
                axis:true
            });
        var A = board.create('point', [-4,  5], { name: '$$A_{\\max}$$' });

        // Insert JSXGraph code here!

    </script>
</body>
</html>
```

[<i class="fa-solid fa-fw fa-lg fa-file-code me-1"></i>HTML template with MathJax](src/html-mathjax.html)