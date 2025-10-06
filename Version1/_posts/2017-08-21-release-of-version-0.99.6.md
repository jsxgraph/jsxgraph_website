---
layout: post
title: Release of 0.99.6
subtitle: Major new release
date: 2017-08-21T09:00:00+00:00
categories:
  - Releases
---
The long awaited version 0.99.6 of JSXGraph has just been released! This is a 
There are quite a few new features which are - hopefully -

The most noteable new features are:

* JSXGraph is (again) working in AMD, CommonJS, and much more
* Unified control of zooming and panning
* All relevant attributes may have functions as values
* CSS styles for (HTML) texts and images
* Flexible arrow heads
* Symbolic differentiation

Further, one critical bug has been fixed: JSXGraph has stopped working in IE / Edge  on touch devices, because
Microsoft had removed the `-ms`-prefix from the CSS attribute `-ms-touch-action`.

We thank all contributors which supplied patches, bug reports and suggestions for improvements.

For a full list of all changes see the [CHANGELOG](https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md).

Enjoy, Alfred
    
## Examples for the new features

### New board attributes

When creating a new `board`, the attributes `showZoom` and `showNavigation` control the visibility of 
the zoom and navigation icons in the lower right corner.
Further with the `zoom` and `pan` objects zooming and panning behaviour can be better controlled:

*  `max`, `min`: determine the maximum and minimum zoom level
* If `needShift`, `needCtrl` are true, these keys have to pressed during zoom or pan.
* For touch devices there is the attribute `needsTwoFingers`.
* If `pinchHorizontal` or `pinchVertical` are true, zooming is restricted to one direction
if the pinch gesture is horizontal or vertical. The sensitivity of this behavior can be controlled
with `pinchSensitivity` (in degrees).
* Another new feature is the attribute `defaultAxes` which enables to style the default axes during creation.

{% highlight javascript linenos %}
   var board = JXG.JSXGraph.initBoard("box", {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
        defaultAxes: {
            y: {
                strokeColor: 'blue',
                ticks: {
                    visible: 'inherit',
                }
            },
        },
        zoom: {
            pinchHorizontal: false,
            pinchVertical: false,
            pinchSensitivity: 7,
            min: 0.5,
            max: 2,
            wheel: true,
            needShift: true
        },
        pan: {
            needTwoFingers: true,
            needShift: false
        },

        showZoom: false,
        showNavigation: true,
    });
{% endhighlight %}

<div id="box1" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard("box1", {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
        defaultAxes: {
            y: {
                strokeColor: 'blue',
                ticks: {
                    visible: 'inherit',
                }
            },
        },
        zoom: {
            pinchHorizontal: false,
            pinchVertical: false,
            pinchSensitivity: 7,
            min: 0.5,
            max: 2,
            wheel: true,
            needShift: true
        },
        pan: {
            needTwoFingers: true,
            needShift: false
        },

        showZoom: false,
        showNavigation: true,
    });
})();
</script>

#### Ticks labels for sliders

Sliders can have (correct) ticks labels now, and the display of the value composed from three attributes:

{% highlight javascript linenos %}
    var board = JXG.JSXGraph.initBoard('box', {
        boundingbox: [-5, 5, 5, -5], 
    });
    var sl = board.create('slider', [[-4,1], [2,1], [-10, 1, 10]], {
        name:'a', 
        suffixLabel: 'A = ',
        unitLabel: 'm',
        postLabel: ' !!!',
        withLabel: true, 
        ticks: { 
            drawLabels: true, 
        }});
    })();
{% endhighlight %}

<div id="box13" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box13', {
        boundingbox: [-5, 5, 5, -5], 
    });
    var sl = board.create('slider', [[-4,1], [2,1], [-10, 1, 10]], {
        name:'a', 
        suffixLabel: 'A = ',
        unitLabel: 'm',
        postLabel: ' !!!',
        withLabel: true, 
        ticks: { 
            drawLabels: true, 
        }});
    })();
</script>

### Positioning of hatches and ticks

With the `anchor` attribute, relative positions other than the middle position are possible.
{% highlight javascript linenos %}
    var board = JXG.JSXGraph.initBoard('box', {
        boundingbox: [-5, 5, 5, -5], 
    });
    var p = board.create('point', [-4, 0]);
    var q = board.create('point', [4, 0]);
    var li = board.create('line', [p, q]);
    var h = board.create('hatch', [li, 2], {anchor: 0.2});
    var h = board.create('hatch', [li, 3], {anchor: 0.8, strokeColor: 'orange'});
{% endhighlight %}

<div id="box14" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box14', {
        boundingbox: [-5, 5, 5, -5], 
    });
    var p = board.create('point', [-4, 0]);
    var q = board.create('point', [4, 0]);
    var li = board.create('line', [p, q]);
    var h = board.create('hatch', [li, 2], {anchor: 0.2});
    var h = board.create('hatch', [li, 3], {anchor: 0.8, strokeColor: 'orange'});

})();
</script>

### New attribute: "cssStyle"

The new attribute `cssStyle` adds CSS style attributes to the default style of HTML texts. There is also the new attribute `cssDefaultStyle`. The latter
sets the font-family to a sans-serif font. Further, there are variants for highlighing, namely `highlightCssDefaultStyle`
and `highlightCssStyle`. Since, there is also the attribute `cssClass`, there are many possiblities to style text and image elements.
The priority of these attributes are (from high to low):

* Separate attribute, e.g. `fontSize`
* `cssStyle`
* `cssDefaulStyle`
* `cssClass`

The `cssStyle` attributes allow a flexible styling of texts and images in environments where the use of a separate CSS file is not possible.

{% highlight javascript linenos %}
    var txt = board.create('text', [0, 0, 'hello'], {
        cssStyle: 'padding: 5px; border: 1px solid orange; border-radius: 5px'
    });
{% endhighlight %}

<div id="box12" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box12', {
        boundingbox: [-5, 5, 5, -5], 
    });
    var txt = board.create('text', [0, 0, 'hello'], {cssStyle: 'padding: 5px; border: 1px solid orange; border-radius: 5px'});
})();
</script>

### New attribute: "dragToTopOfLayer"

{% highlight javascript linenos %}
    var im1 = board.create('image', ['perched_birds.jpg', [0, 0], [2, 2]], {
        dragToTopOfLayer: true
    });
    var im2 = board.create('image', ['uccellino.jpg', [-1, -1], [2, 2]], {
        dragToTopOfLayer: true
    });
{% endhighlight %}

<div id="box11" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box11', {
        boundingbox: [-5, 5, 5, -5], 
        keepaspectratio:true
    });
    var im1 = board.create('image', ['/wp/img/perched_birds.jpg', [0, 0], [2, 2]], {dragToTopOfLayer: true});
    var im2 = board.create('image', ['/wp/img/uccellino.jpg', [-1, -1], [2, 2]], {dragToTopOfLayer: true});
})();
</script>

### Visvalingam-Whyatt algorithm for curve simplification

See Visvalingam, M; Whyatt, JD (1992). 
*Line Generalisation by Repeated Elimination of the Smallest Area* (Technical report). 
Discussion Paper. Cartographic Information Systems Research Group (CISRG), The University of Hull. 10.

{% highlight javascript linenos %}
    var i, p = [];
    for (i = 0; i < 4; ++i) {
        p.push(
            board.create('point', [Math.random() * 12 - 6, Math.random() * 12 - 6])
        );
    }
    var sl = board.create('slider', [[-8,9], [6,9], [-0.5, 0.5, 1.5]], {
        name:'a', withLabel: true
    });

    
    var splineArr = JXG.Math.Numerics.CardinalSpline(p, function(){ return sl.Value(); });
    var cu2 = board.create('curve', splineArr, {strokeColor: 'orange', strokeWidth:4});


    var c = board.create('curve', [[0],[0]], {strokeWidth: 2, strokeColor: 'black'});
    c.updateDataArray = function() {
        var i, len, points;

        // Reduce number of intermediate points with Visvalingam-Whyatt to 6
        points = JXG.Math.Numerics.Visvalingam(cu2.points, 6);

        // Plot the remaining points
        len = points.length;
        this.dataX = [];
        this.dataY = [];
        for (i = 0; i < len; i++) {
            this.dataX.push(points[i].usrCoords[1]);
            this.dataY.push(points[i].usrCoords[2]);
        }
    };
    board.update();
{% endhighlight %}

<div id="box9" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box9', {
        boundingbox: [-10, 10, 10, -10], 
        keepaspectratio:true
    });

    var i, p = [];
    for (i = 0; i < 4; ++i) {
        p.push(
            board.create('point', [Math.random() * 12 - 6, Math.random() * 12 - 6])
        );
    }
    var sl = board.create('slider', [[-8,9], [6,9], [-0.5, 0.5, 1.5]], {
        name:'a', withLabel: true
    });

    
    var splineArr = JXG.Math.Numerics.CardinalSpline(p, function(){ return sl.Value(); });
    var cu2 = board.create('curve', splineArr, {strokeColor: 'orange', strokeWidth:4});


    var c = board.create('curve', [[0],[0]], {strokeWidth: 2, strokeColor: 'black'});
    c.updateDataArray = function() {
        var i, len, points;

        // Reduce number of intermediate points with Visvalingam-Whyatt to 6
        points = JXG.Math.Numerics.Visvalingam(cu2.points, 6);

        // Plot the remaining points
        len = points.length;
        this.dataX = [];
        this.dataY = [];
        for (i = 0; i < len; i++) {
            this.dataX.push(points[i].usrCoords[1]);
            this.dataY.push(points[i].usrCoords[2]);
        }
    };
    board.update();


})();
</script>

### Centripetal Cardinal and Catmull-Rom splines

See e.g. <https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline>

{% highlight javascript linenos %}
var i, p = [];
for (i = 0; i < 5; ++i) {
    p.push(board.create('point', [Math.random() * 8 - 4, Math.random() * 8 - 4]));
}

var sl = board.create('slider', [[-8,9], [6,9], [-0.5, 1.3, 1.5]], {
    name:'a', 
    withLabel: true, 
    ticks: { 
        drawLabels: true, 
        minTicksDistance: 30
    }
});

var cu2 = board.create('curve', 
    JXG.Math.Numerics.CardinalSpline(p, function(){ return sl.Value(); }), 
    { strokeColor: 'green', strokeWidth:2}
);
var cu3 = board.create('curve', 
    JXG.Math.Numerics.CardinalSpline(p, function(){ return sl.Value(); }, 'centripetal'), 
    { strokeWidth:2}
);
{% endhighlight %}

<div id="box10" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box10', {
        boundingbox: [-10, 10, 10, -10], 
        keepaspectratio:true
    });

var i, p = [];
for (i = 0; i < 5; ++i) {
    p.push(board.create('point', [Math.random() * 8 - 4, Math.random() * 8 - 4]));
}

var sl = board.create('slider', [[-8,9], [6,9], [-0.5, 1.3, 1.5]], {name:'a', withLabel: true, ticks: { drawLabels: true, minTicksDistance: 30}});

var cu2 = board.create('curve', JXG.Math.Numerics.CardinalSpline(p, function(){ return sl.Value(); }), {strokeColor: 'green', strokeWidth:2});
var cu3 = board.create('curve', JXG.Math.Numerics.CardinalSpline(p, function(){ return sl.Value(); }, 'centripetal'), {strokeWidth:2});
})();
</script>

### Line attribute "linecap"

This is useful for very thick lines. Possible values are `butt` (default), `round` and `square`.

{% highlight javascript linenos %}
    var pol = board.create('polygon',[[0,0],[2,0],[2,2],[0,2]], {
        hasInnerPoints: true,
        vertices: {
          visible: false
        },
        borders: {
          strokeWidth: 30,
          lineCap: 'round'
        },
        fillColor: 'yellow'
    });
{% endhighlight %}

<div id="box8" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box8', {
        boundingbox: [-0.5,2.5,2.5,-0.5], 
        keepaspectratio:true});
    var pol = board.create('polygon',[[0,0],[2,0],[2,2],[0,2]], {
        hasInnerPoints: true,
        vertices: {
          visible: false
        },
        borders: {
          strokeWidth: 30,
          lineCap: 'round'
        },
        fillColor: 'yellow'
    });
})();
</script>

### Allow functions as values for attribute visible and introduce new value 'inherit'</h2>
    
Here is an example: if the x-coordinate of `A` is positive, the point `B` is hidden.

{% highlight javascript linenos %}
    var A = board.create('point', [-1, 2], {size: 10});
    var B = board.create('point', [1, -2], {size: 10,
        visible: function() {
            return A.X() < 0;
        }
    });
{% endhighlight %}

<div id="box2" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard("box2", {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
    });

    var A = board.create('point', [-1, 2], {size: 10});
    var B = board.create('point', [1, -2], {size: 10,
        visible: function() {
            return A.X() < 0;
        }
    });
})();
</script>

### New polygon method "Perimeter()"

{% highlight javascript linenos %}
var pol = board.create('polygon',
        [[0, 0], [4,0], [4,4], [0,4]],
        {
            vertices: {snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5}
        }
    );
var txt = board.create('text', [1, 1, function() {
    return "perimeter = " + pol.Perimeter().toFixed(2);
    }]);
{% endhighlight %}

<div id="box3" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard("box3", {
        boundingbox: [-1, 5, 5, -1],
        axis: true,
    });

    var pol = board.create('polygon',
            [[0, 0], [4,0], [4,4], [0,4]],
            {
                vertices: {snapToGrid: true, snapSizeX: 0.5, snapSizeY: 0.5}
            }
        );
    var txt = board.create('text', [1, 1, function() {
        return "perimeter = " + pol.Perimeter().toFixed(2);
        }]);
})();
</script>

### CSS transitions when highlighting

{% highlight javascript linenos %}
    var pol = board.create('polygon',
            [[0, 0], [4,0], [2,4]],
            {
                hasInnerPoints: true,
                transitionDuration: 1000,
                fillColor: 'yellow',
                highlightFillColor: 'red',
                borders: {
                    transitionDuration: 1000,
                    strokeWidth: 5
                }
            }
        );
{% endhighlight %}

<div id="box5" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard("box5", {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
    });
    var pol = board.create('polygon',
            [[0, 0], [4,0], [2,4]],
            {
                hasInnerPoints: true,
                transitionDuration: 1000,
                fillColor: 'yellow',
                highlightFillColor: 'red',
                borders: {
                    transitionDuration: 1000,
                    strokeWidth: 5
                }
            }
        );
})();
</script>

### Arrows

In this release we have three types of arrows. All types may be scaled by the 
attribute `size` which defaults to 3. 

{% highlight javascript linenos %}
    var s1 = board.create('segment', [[-2, 4], [2, 4]], {
        lastArrow: true
    });
    var s2 = board.create('segment', [[-2, 2], [2, 2]], {
        lastArrow: {
            type: 1,
            size: 6
        }
    });
    var s3 = board.create('segment', [[-2, 1], [2, 1]], {
        lastArrow: {
            type: 2,
            size: 6
        },
        firstArrow: {
            type: 3,
            size: 3
        }
    });
    var s4 = board.create('segment', [[-2, -1], [2, -1]], {
        lastArrow: {
            type: 2,
            size: 8
        },
        firstArrow: {
            type: 3,
            size: 8
        }
    });
{% endhighlight %}

<div id="box6" class="jxgbox" style="left:10px; width:400px; height:400px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard("box6", {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
    });
    var s1 = board.create('segment', [[-2, 4], [2, 4]], {
        lastArrow: true
    });
    var s2 = board.create('segment', [[-2, 2], [2, 2]], {
        lastArrow: {
            type: 1,
            size: 6
        }
    });
    var s3 = board.create('segment', [[-2, 1], [2, 1]], {
        lastArrow: {
            type: 2,
            size: 6
        },
        firstArrow: {
            type: 3,
            size: 3
        }
    });
    var s4 = board.create('segment', [[-2, -1], [2, -1]], {
        lastArrow: {
            type: 2,
            size: 8
        },
        firstArrow: {
            type: 3,
            size: 8
        }
    });
})();
</script>

### Symbolic differentiation

This is a very preliminary new feature in JessieCode.
Symbolic differentiation is fully implemented (which is easy). But it is not very usefull without a good term simplification algorithm. 
We do have term simplification in JessieCode, but this is not very sophisticated and can be much improved.
    
{% highlight html linenos %}
<div id="box15" class="jxgbox" style="width:500px; height:500px;"></div>
<textarea id="input_code" cols="50" rows="5" style="float:none;">
f = map (x) -> x^2;
h = D(f, x);
</textarea>
<div style="">
    <p><button id="reset">Reset board</button> 
    <button id="parse">Simplify code</button></p>
</div>
<textarea id="output_code" cols="50" rows="5" style="float:left;">
</textarea>

<script type="text/javascript">
(function () {
    var board,
        init = function () {
            board = JXG.JSXGraph.initBoard('box15', {
                boundingbox: [-5, 5, 5, -5], 
                axis:true
            });
            board.jc = new JXG.JessieCode();
            board.jc.use(board);

            var f = board.create('functiongraph', ['sin(x)*x^2']);
            var df = board.create('functiongraph', ['D(sin(x)*x^2, x)'], {strokeColor: 'red'});
        },
        parse = function () {
            return board.jc.manipulate(document.getElementById('input_code').value);
        };
    init();
    window.board = board;
    parse();
    JXG.addEvent(document.getElementById('reset'), 'click', function () {
        JXG.JSXGraph.freeBoard(board);
        init();
        document.getElementById('output_code').value = '';
    }, this);
    JXG.addEvent(document.getElementById('parse'), 'click', function () {
        document.getElementById('output_code').value = parse();
    }, this);
})();
</script>
{% endhighlight %}

<div id="box15" class="jxgbox" style="width:500px; height:500px;"></div>
<textarea id="input_code" cols="50" rows="5" style="float:none;">
f = map (x) -> x^2;
h = D(f, x);
</textarea>
<div style="">
    <p><button id="reset">Reset board</button> 
    <button id="parse">Simplify code</button></p>
</div>
<textarea id="output_code" cols="50" rows="5" style="float:left;">
</textarea>

<script type="text/javascript">
/* <![CDATA[ */
(function () {
    var board,
        init = function () {
            board = JXG.JSXGraph.initBoard('box15', {
                boundingbox: [-5, 5, 5, -5], 
                axis:true
            });
            board.jc = new JXG.JessieCode();
            board.jc.use(board);

            var f = board.create('functiongraph', ['sin(x)*x^2']);
            var df = board.create('functiongraph', ['D(sin(x)*x^2, x)'], {strokeColor: 'red'});
        },
        parse = function () {
            return board.jc.manipulate(document.getElementById('input_code').value);
        };
    init();
    window.board = board;
    parse();
    JXG.addEvent(document.getElementById('reset'), 'click', function () {
        JXG.JSXGraph.freeBoard(board);
        init();
        document.getElementById('output_code').value = '';
    }, this);
    JXG.addEvent(document.getElementById('parse'), 'click', function () {
        document.getElementById('output_code').value = parse();
    }, this);
})();
/* ]]> */
</script>
