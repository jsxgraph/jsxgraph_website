# ILIAS Filter Template

Use the `jsxgraph` tag to reference JSXGraph.

```html
<jsxgraph>
    <div id="box" class="jxgbox" style="width:500px; height:500px;"></div>
    <script type="text/javascript">
        var board = JXG.JSXGraph.initBoard("box", {
            boundingbox: [-10, 10, 10, -10],
            axis:true
        });

        // Insert JSXGraph code here!

    </script>
</jsxgraph>
```