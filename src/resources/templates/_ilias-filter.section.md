# ILIAS Filter Template

Use the `jsxgraph` tag to reference JSXGraph.

```html
<jsxgraph>
    <div id="box" class="jxgbox" style="width:500px; aspect-ratio: 1/1;"></div>
    <script type="text/javascript">
        var board = JXG.JSXGraph.initBoard("box", {
            boundingbox: [-10, 10, 10, -10],
            axis:true
        });

        // Insert JSXGraph code here!

    </script>
</jsxgraph>
```