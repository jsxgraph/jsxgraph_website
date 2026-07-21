# Moodle Filter Template

Reference JSXGraph within the `jsxgraph` tag using the constant `BOARDID` for initializing the board.

```html
<jsxgraph width="100%" aspect-ratio="1 / 1" useGlobalJS="false">
    var board = JXG.JSXGraph.initBoard(BOARDID, {
            boundingbox: [-10, 10, 10, -10],
            axis:true
    });

    // Insert JSXGraph code here!

</jsxgraph>
```