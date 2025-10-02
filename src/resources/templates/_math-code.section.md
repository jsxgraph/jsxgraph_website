# HTML Template with MathJax

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

[HTML template with MathJax](src/mathjax.template.html)

# HTML Template with KaTeX

KaTeX can also be integrated into JSXGraph to display mathematical formulas within labels or texts. To use it, include the KaTeX library in your HTML file and enable the useKatex attribute when creating text elements.

```js
var A = board.create('point', [-4,  5], { name: '$$A$$', useKatex: true });
````

Jo enable KaTeX rendering for all text objects on the board, use the following global option:

```js
JXG.Options.text.useKatex = true;
```

This guarantees that all text elements generated in JSXGraph are automatically rendered by KaTeX, eliminating the need to activate the option for each object separately.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css" integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP" crossorigin="anonymous">

    <!-- The loading of KaTeX is deferred to speed up page rendering -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js" integrity="sha384-cMkvdD8LoxVzGF/RPUKAcvmm49FQ0oxwDF3BGKtDXcEc+T1b2N+teh/OJfpU0jr6" crossorigin="anonymous"></script>

    <!-- To automatically render math in text elements, include the auto-render extension: -->
    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js" integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh" crossorigin="anonymous"
            onload="renderMathInElement(document.body);"></script>
</head>
<body>
<div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>
<script>
    JXG.Options.text.useKatex = true; // Enable KaTeX for all JSXGraph elements!
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

[HTML template with KaTeX](src/katex.template.html)