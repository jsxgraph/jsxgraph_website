---
layout: post
title: Release of 0.99.4
subtitle: Major new release
date: 2016-02-10T14:50:08+00:00
categories:
  - Releases
---
Version 0.99.4 of JSXGraph has just been released! It fixes quite a few bugs and introduces several long awaited features. Below, the most important new features are demonstrated with examples. For a list of all changes see the [CHANGELOG](https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md).

Further, we overhauled the web page of JSXGraph, I hope you like the new design. 

Enjoy, Alfred



#### Allow gradients for polygons

With the attributes `gradient` and `gradientSecondColor` it is possible to have a gradient filling of the polygon. Possible values for `gradient` are `'linear'` and `'radial'`.

<div id="box1" class="jxgbox" style="width:500px; height:500px"></div>
<script type="text/javascript">
(function() {
  var board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-5, 5, 5, -5]}),
      pol = board.create('polygon', [[-4, -3], [4, -3], [0, 3]], 
             {fillColor: '#ffff00', gradient:'radial', gradientSecondColor:'#0000ff'});
})();    
</script>

```javascript
  var board = JXG.JSXGraph.initBoard('box1', {boundingbox: [-5, 5, 5, -5]}),
      pol = board.create('polygon', [[-4, -3], [4, -3], [0, 3]], 
             {fillColor: '#ffff00', gradient:'radial', gradientSecondColor:'#0000ff'});
```

#### Shortened math syntax

Allow shortened math syntax in `JXG.Text.generateTerm()` and in texts with `value`-tag.
It allows to write `2a` instead of `2*a`.

<div id="box2" class="jxgbox" style="width:500px; height:500px"></div>
<script type="text/javascript">
(function() {
  var board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-5, 5, 5, -5]}),
      a = board.create('slider', [[-3, -2], [3, -2], [-10, 1, 10]], {name: "a"}), 
      txt = board.create('text', [0, 2, "2a = <value>2a</value>"], 
             {fontSize: 24});
})();
</script>

```javascript
  var board = JXG.JSXGraph.initBoard('box2', {boundingbox: [-5, 5, 5, -5]}),
      a = board.create('slider', [[-3, -2], [3, -2], [-10, 1, 10]], {name: "a"}), 
      txt = board.create('text', [0, 2, "2a = <value>2a</value>"], 
             {fontSize: 24});
```

#### Methods setMax() and setMin() for sliders
New methods setMax() and setMin() for sliders. The values will be active after the next call of `board.update()`

<div id="box3" class="jxgbox" style="width:500px; height:200px"></div>
<script type="text/javascript">
(function() {
  var board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-5, 5, 5, -5]}),
      a = board.create('slider', [[-3, -2], [3, -2], [-10, 1, 10]], {name: "a"});
  
  a.setMax(5);
  a.setMin(-5);
  board.update();
})();
</script>

**Example**: change the limits of the slider from _[-10, 10]_ to _[-5, 5]_.

```javascript
  var board = JXG.JSXGraph.initBoard('box3', {boundingbox: [-5, 5, 5, -5]}),
      a = board.create('slider', [[-3, -2], [3, -2], [-10, 1, 10]], {name: "a"});
  
  a.setMax(5);
  a.setMin(-5);
  board.update();
```

#### New attribute for ticks: useUnicodeMinus (default true)

The new attribute for ticks `useUnicodeMinus` has default value _true_.

<div id="box4" class="jxgbox" style="width:500px; height:200px"></div>
<script type="text/javascript">
(function() {
  var board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-5, 5, 1, -5]}),
      xax1 = board.create('axis', [[0, 2], [1, 2]], {ticks: {useUnicodeMinus: false}}),
      xax2 = board.create('axis', [[0, -2], [1, -2]], {ticks: {useUnicodeMinus: true}});
})();
</script>

```javascript
  var board = JXG.JSXGraph.initBoard('box4', {boundingbox: [-5, 5, 1, -5]}),
      xax1 = board.create('axis', [[0, 2], [1, 2]], {ticks: {useUnicodeMinus: false}}),
      xax2 = board.create('axis', [[0, -2], [1, -2]], {ticks: {useUnicodeMinus: true}});
```

#### Allow two functions to enclose Riemann sum

<div id="box5" class="jxgbox" style="width:500px; height:500px"></div>
<script type="text/javascript">
(function() {
  var board = JXG.JSXGraph.initBoard('box5', 
              {boundingbox: [-5, 5, 5, -5], axis: true}),
      n = board.create('slider',[[-3,2.5], [3,2.5],[1, 15, 60]],
              {name:'n', snapWidth: 1, strokeColor:'black', fillColor:'white'}),

      f = function(x){ return Math.sin(x); }, 
      plotf = board.create('functiongraph', [f, -7, 7], {strokeWidth:1}),

      g = function(x){ return x * x / 6.0 - 2.0; },
      plotg = board.create('functiongraph', [g, -7, 7], {strokeWidth:1}),

      rs = board.create('riemannsum',
            [[g, f], function(){ return n.Value(); }, 'lower', -3, 3], 
            {fillColor:'#B22222', fillOpacity:0.3, 
             strokeColor:'#8B1A1A', strokeWidth:1});  
})();
</script>

```javascript
  var board = JXG.JSXGraph.initBoard('box5', 
              {boundingbox: [-5, 5, 5, -5], axis: true}),
      n = board.create('slider',[[-3,2.5], [3,2.5],[1, 15, 60]],
              {name:'n', snapWidth: 1, strokeColor:'black', fillColor:'white'}),

      f = function(x){ return Math.sin(x); }, 
      plotf = board.create('functiongraph', [f, -7, 7], {strokeWidth:1}),

      g = function(x){ return x * x / 6.0 - 2.0; },
      plotg = board.create('functiongraph', [g, -7, 7], {strokeWidth:1}),

      rs = board.create('riemannsum',
            [[g, f], function(){ return n.Value(); }, 'lower', -3, 3], 
            {fillColor:'#B22222', fillOpacity:0.3, 
             strokeColor:'#8B1A1A', strokeWidth:1});  
```

#### Allow gliders on polygons

<div id="box6" class="jxgbox" style="width:500px; height:500px"></div>
<script type="text/javascript">
(function() {
  var board = JXG.JSXGraph.initBoard('box6', 
              {boundingbox: [-5, 5, 5, -5], axis: true}),
              
      pol = board.create('polygon', [[-3, -3], [3, -3], [0, 4]]),
      gl = board.create('glider', [1, -1, pol.borders[0]]);
      
  gl.onPolygon = true;
})();      
</script>

```javascript
  var board = JXG.JSXGraph.initBoard('box6', 
              {boundingbox: [-5, 5, 5, -5], axis: true}),
              
      pol = board.create('polygon', [[-3, -3], [3, -3], [0, 4]]),
      gl = board.create('glider', [1, -1, pol.borders[0]);
      
  gl.onPolygon = true;
```

#### Intersection of two convex polygons
Algorithm by Sutherland-Hodgman.

<div id="box7" class="jxgbox" style="width: 500px; height: 500px;"></div>
<script type="text/javascript">
(function() {
    var board = JXG.JSXGraph.initBoard('box7', {boundingbox: [-8,8,8,-8], axis: true}),
        pts1 = [[-2, 3], [-4, -3], [2, 0], [4, 4]],
        pts2 = [[-2, -3], [-4, 1], [0, 4], [5, 1]];

    // Clipping polygon
    var pol = board.create('polygon', pts1, 
                {hasInnerPoints: true, 
                 borders: {names: ['', '', '', '']},
                 name:'Polygon1', withLabel: true, visible: true,
                 fillColor: 'yellow'});

                
    // Polygon to be clipped
    var pol2 = board.create('polygon', pts2, 
                {hasInnerPoints: false, 
                 borders: {names: ['', '', '', '']},
                 name:'Polygon2', withLabel: true, visible: true
                 });

    // Filled curve showing the intersection of the two polygons.
    var curve = board.create('curve', [[],[]], {fillColor: 'blue', fillOpacity: 0.4});
    curve.updateDataArray = function() {
        var mat = JXG.Math.transpose(pol.intersect(pol2));
        
        if (mat.length == 3) {
            this.dataX = mat[1];
            this.dataY = mat[2];
        } else {
            this.dataX = [];
            this.dataY = [];
        }
            
    };
    
    board.update();
})();
</script>

```javascript
    var board = JXG.JSXGraph.initBoard('box7', {boundingbox: [-8,8,8,-8], axis: true}),
        pts1 = [[-2, 3], [-4, -3], [2, 0], [4, 4]],
        pts2 = [[-2, -3], [-4, 1], [0, 4], [5, 1]];

    // Clipping polygon
    var pol = board.create('polygon', pts1, 
                {hasInnerPoints: true, 
                 borders: {names: ['', '', '', '']},
                 name:'Polygon1', withLabel: true, visible: true,
                 fillColor: 'yellow'});

                
    // Polygon to be clipped
    var pol2 = board.create('polygon', pts2, 
                {hasInnerPoints: false, 
                 borders: {names: ['', '', '', '']},
                 name:'Polygon2', withLabel: true, visible: true
                 });

    // Filled curve showing the intersection of the two polygons.
    var curve = board.create('curve', [[],[]], {fillColor: 'blue', fillOpacity: 0.4});
    curve.updateDataArray = function() {
        var mat = JXG.Math.transpose(pol.intersect(pol2));
        
        if (mat.length == 3) {
            this.dataX = mat[1];
            this.dataY = mat[2];
        } else {
            this.dataX = [];
            this.dataY = [];
        }
            
    };
    
    board.update();
```

#### Linear interpolation for animation. 

If `interpolation` is set to false in `moveAlong()` linear interpolation is used.

<div id="box8" class="jxgbox" style="width: 500px; height: 500px;"></div>
<input type="button" onclick="animate_linear()" value="animate_linear()" />
<input type="button" onclick="animate_polynomial()" value="animate_polynomial()" />

<script type="text/javascript">
(function() {
var  board = JXG.JSXGraph.initBoard('box8', {boundingbox: [-15, 15, 1, -10], axis: true}),
    p1a = board.create('point',[-12,-5], {color:'blue'}),
    p1 = board.create('point',[-12,-5]),
    p2 = board.create('point',[-10,5]),
    p3 = board.create('point',[-5,12]),
    p4 = board.create('point',[-10,10]),
    p5 = board.create('point',[-4,8]),
    graph = board.create('curve', JXG.Math.Numerics.Neville([p1, p2, p3, p4, p5]), 
        {strokeWidth:2, strokeOpacity:0.5});

animate_linear = function() {
    p1a.moveAlong([p1, p2, p3, p4, p5], 3000, {interpolate:false});
};
animate_polynomial = function() {
    p1a.moveAlong([p1, p2, p3, p4, p5], 3000, {interpolate:true});
};
})();
</script>

```javascript
var  board = JXG.JSXGraph.initBoard('box8', {boundingbox: [-15, 15, 1, -10], axis: true}),
    p1a = board.create('point',[-12,-5], {color:'blue'}),
    p1 = board.create('point',[-12,-5]),
    p2 = board.create('point',[-10,5]),
    p3 = board.create('point',[-5,12]),
    p4 = board.create('point',[-10,10]),
    p5 = board.create('point',[-4,8]),
    graph = board.create('curve', JXG.Math.Numerics.Neville([p1, p2, p3, p4, p5]), 
        {strokeWidth:2, strokeOpacity:0.5});

animate_linear = function() {
    p1a.moveAlong([p1, p2, p3, p4, p5], 3000, {interpolate:false});
};
animate_polynomial = function() {
    p1a.moveAlong([p1, p2, p3, p4, p5], 3000, {interpolate:true});
};
```

#### Board selection mode
  Allow a board to be in `selectionMode` by calling the function `board.startSelectionMode()`. 
  Once in this mode, the mouse allows to draw a rectangle selection on the board. 
  To stop selectingMode, the function `board.stopSelectionMode()` must be called. 
  At any time, `board.selectingBox` gives mouse coordinates of the selection. 

In the following example the event `stopselecting` is used on mouse up.
The selection is restricted to mouse down + Ctrl.

<div id="box9" class="jxgbox" style="width: 500px; height: 500px;"></div>
<script type="text/javascript">
//
// Set a new bounding box from the selection rectangle
//
(function() {
var board = JXG.JSXGraph.initBoard('box9', {
        boundingBox:[-3,2,3,-2],
        keepAspectRatio: false,
        axis:true,
        selection: {
            enabled: true,
            needShift: false,
            needCtrl: true,
            withLines: false,
            vertices: {
                visible: false
            },
            fillColor: '#ffff00',
        }
     });

var f = function f(x) { return Math.cos(x); },
    curve = board.create('functiongraph', [f]);

board.on('stopselecting', function(){
    var box = board.stopSelectionMode(),

        // bbox has the coordinates of the selection rectangle.
        // Attention: box[i].usrCoords have the form [1, x, y], i.e.
        // are homogeneous coordinates.
        bbox = box[0].usrCoords.slice(1).concat(box[1].usrCoords.slice(1));

        // Set a new bounding box
        board.setBoundingBox(bbox, false);
 });
})();
</script>

```javascript
//
// Set a new bounding box from the selection rectangle
//
var board = JXG.JSXGraph.initBoard('box9', {
        boundingBox:[-3,2,3,-2],
        keepAspectRatio: false,
        axis:true,
        selection: {
            enabled: true,
            needShift: false,
            needCtrl: true,
            withLines: false,
            vertices: {
                visible: false
            },
            fillColor: '#ffff00',
        }
     });

var f = function f(x) { return Math.cos(x); },
    curve = board.create('functiongraph', [f]);

board.on('stopselecting', function(){
    var box = board.stopSelectionMode(),

        // bbox has the coordinates of the selection rectangle.
        // Attention: box[i].usrCoords have the form [1, x, y], i.e.
        // are homogeneous coordinates.
        bbox = box[0].usrCoords.slice(1).concat(box[1].usrCoords.slice(1));

        // Set a new bounding box
        board.setBoundingBox(bbox, false);
 });
```

#### New method "dumpToCanvas()" for the SVG renderer

<div id="box10" class="jxgbox" style="width:300px; height:300px; float: left"></div>
<canvas id="cvoutput" style="border:1px blue solid;" width="300" height="300"></canvas>
<script type="text/javascript">
  var board10 = JXG.JSXGraph.initBoard('box10', {boundingbox: [-5, 5, 5, -5]}),
      pol = board10.create('polygon', [[-4, -3], [4, -3], [0, 3]], 
             {fillColor: '#ffff00', gradient:'radial', gradientSecondColor:'#0000ff'});
</script>
<button onclick="board10.renderer.dumpToCanvas('cvoutput');">dumpToCanvas()</button>

```html
<div id="box10" class="jxgbox" style="width:300px; height:300px; float: left"></div>
<canvas id="cvoutput" style="border:1px blue solid;" width="300" height="300"></canvas>
<script type="text/javascript">
  var board = JXG.JSXGraph.initBoard('box10', {boundingbox: [-5, 5, 5, -5]}),
      pol = board.create('polygon', [[-4, -3], [4, -3], [0, 3]], 
             {fillColor: '#ffff00', gradient:'radial', gradientSecondColor:'#0000ff'});
</script>
<button onclick="board.renderer.dumpToCanvas('cvoutput');">dumpToCanvas()</button>
```

#### Improved function plotting 
Logarithmic curves should reach to the boundary of the canvas now, i.e. improved plotting of asymptotes.

<div id="box11" class="jxgbox" style="width:500px; height:500px;"></div>
<script type="text/javascript">
(function() {
var brd = JXG.JSXGraph.initBoard('box11', {
        boundingbox: [-5, 100, 5, -100],
        axis: true, 
        pan:{
            enabled:true,
            needShift: false,
            needTwoFingers: true
        }
    }),
    
    s = brd.create("slider", [[-4.5,20], [3,20], [-1, 2, 20]], {name:'a'}),
    f = brd.create('functiongraph', [function(x){ return Math.log(x+s.Value())*s.Value(); }]);
})();
</script>

```javascript
var board = JXG.JSXGraph.initBoard('box11', {
        boundingbox: [-5, 100, 5, -100],
        axis: true, 
        pan:{
            enabled:true,
            needShift: false,
            needTwoFingers: true
        }
    }),
    
    s = board.create("slider", [[-4.5,20], [3,20], [-1, 2, 20]], {name:'a'}),
    f = board.create('functiongraph', [function(x){ return Math.log(x+s.Value())*s.Value(); }]);
```

#### New construction variant for slope triangle
Slope triangle can be constructed by using just one glider.

<div id="box12" class="jxgbox" style="width: 500px; height: 500px;"></div>
<script type="text/javascript">
(function(){
var board = JXG.JSXGraph.initBoard('box12', {boundingbox: [-5, 5, 5, -5], axis: true}),
    
    circ = board.create('circle', [[-2.5, 2], 2]),
    line = board.create('line', [[-2.5, -3], [3, 1]]),
    f = board.create('functiongraph', ["x^2"]),
    
    g1 = board.create('glider', [-4, 3, circ]),   // glider on circle line
    g2 = board.create('glider', [-4, -4, line]),  // glider on line
    g3 = board.create('glider', [1, 1, f]),        // glider on function graph
    
    st1 = board.create('slopetriangle', [g1]),     // slope triangle on circle
    st2 = board.create('slopetriangle', [g2]),     // slope triangle on line
    st3 = board.create('slopetriangle', [g3]);     // slope triangle oin function graph
})();
</script>

```javascript
var board = JXG.JSXGraph.initBoard('box12', {boundingbox: [-5, 5, 5, -5], axis: true}),
    
    circ = board.create('circle', [[-2.5, 2], 2]),
    line = board.create('line', [[-2.5, -3], [3, 1]]),
    f = board.create('functiongraph', ["x^2"]),
    
    g1 = board.create('glider', [-4, 3, circ]),    // glider on circle line
    g2 = board.create('glider', [-4, -4, line]),   // glider on line
    g3 = board.create('glider', [1, 1, f]),        // glider on function graph
    
    st1 = board.create('slopetriangle', [g1]),     // slope triangle on circle
    st2 = board.create('slopetriangle', [g2]),     // slope triangle on line
    st3 = board.create('slopetriangle', [g3]);     // slope triangle oin function graph
```

### New property `margin` for lines. 
Controls where infinite lines end. Most useful are negative values (which are interpreted as pixels).

<div id="box13a" class="jxgbox" style="width: 270px; height: 250px; float:left; margin-right: 5px;"></div>
<div id="box13b" class="jxgbox" style="width: 270px; height: 250px;"></div>
<script type="text/javascript">
(function(){
    var board1 = JXG.JSXGraph.initBoard('box13a', {boundingbox: [-5, 5, 5, -5], axis: true}),
        line = board1.create('line', [[0,0], [1, 3]]);

    JXG.Options.axis.margin = -20;
    var board2 = JXG.JSXGraph.initBoard('box13b', {boundingbox: [-5, 5, 5, -5], axis: true}),
        line = board2.create('line', [[0,0], [1, 3]], {margin: -10});
})();
</script>

```javascript
var board1 = JXG.JSXGraph.initBoard('box13a', 
                {boundingbox: [-5, 5, 5, -5], axis: true}),
    line = board1.create('line', [[0,0], [1, 3]]);

JXG.Options.axis.margin = -20;
var board2 = JXG.JSXGraph.initBoard('box13b', 
                {boundingbox: [-5, 5, 5, -5], axis: true}),
    line = board2.create('line', [[0,0], [1, 3]], {margin: -10});
```

#### Convert JSXGraph to JavaScript or JessieCode
The methods `toJessie` and `toJavaScript` return the construction code with the updated positions of the elements as JessieCode- or JavaScript-code. This method is now much more stable, but has it's limits. See the discussion in [issue #71](https://github.com/jsxgraph/jsxgraph/issues/71) at github.

<div id="box14" class="jxgbox" style="width:300px; height:300px; float: left; margin-right: 5px;"></div>
<textarea id="dumpOutput" style="border:1px blue solid; width:400px; height: 300px;" rows="10" cols="60"></textarea>
<script type="text/javascript">
var board14 = JXG.JSXGraph.initBoard('box14', {boundingbox: [-5, 5, 5, -5]}),
    pol = board14.create('polygon', [[-4, -3], [4, -3], [0, 3]], 
           {fillColor: '#ffff00'});
             
toJessie = function() {
    var txt = JXG.Dump.toJessie(board14);
    
    document.getElementById('dumpOutput').value = txt;
};
toJavaScript = function() {
    var txt = JXG.Dump.toJavaScript(board14);
    
    document.getElementById('dumpOutput').value = txt;
};
</script>
<button onclick="toJessie();">toJessie()</button>
<button onclick="toJavaScript();">toJavaScript()</button>

```javascript
var board14 = JXG.JSXGraph.initBoard('box14', {boundingbox: [-5, 5, 5, -5]}),
    pol = board14.create('polygon', [[-4, -3], [4, -3], [0, 3]], 
           {fillColor: '#ffff00'});
             
toJessie = function() {
    var txt = JXG.Dump.toJessie(board14);
    
    document.getElementById('dumpOutput').value = txt;
};
toJavaScript = function() {
    var txt = JXG.Dump.toJavaScript(board14);
    
    document.getElementById('dumpOutput').value = txt;
};
```

## Further new features

* Better support of the method `bounds()` for curves, texts and polygons.
* More numerical routines for integration:
    - Romberg
    - QUADPACK routines
    - Gauss-Legendre
  See the [discussion at Google groups](https://groups.google.com/forum/#!searchin/jsxgraph/integration/jsxgraph/WSz9ho6rRvs/bnLXqic-Z-EJ) for more information.
* Documentation for [(projective) transformations](http://jsxgraph.uni-bayreuth.de/docs/symbols/Transformation.html).
* New attribute `ignoredSnapToPoints`.
* New board attribute `maxNameLength`: It controls the maximum number of digits of automatic labels. The default value has been reduced from 2 to 1. That means, point names like `AD` are not longer used automatically.
* Introduce Boolean attribute "disabled" for button, checkbox and input.
* First implementation of texts as `foreignObjects` in SVG with attribute `externalHTML:false`. This feature would be very helpful for screen shots. But it is not well supported on Chrome and therefore not used by default. 
* Allow arbitrary size units in moodle plugin.
* New math functions: `JXG.Math.sign()`, `JXG.Math.gcd()`, `JXG.Math.relDif()`. The latter one computes the relative difference between two numbers.
* Update of the [JessieCode parser](https://github.com/jsxgraph/JessieCode).
* New board attributes: zoom.min and zoom.max. This attributes allow to limit the zoom factors. 
  zoom.min limits zoomOut (click on -) and zoom.max limits zoomIn (click on +). 
  zoom.min supersedes zoom.eps whis is deprecated. zoom.min defaults to 0.0001 and zooom.max to 10000.0.
* Improve plot quality of low-quality-mode function plotting.
* Improved dragging of large images and texts.

## Bug fixes

* IE bug with innerhtml
* Intersection of curve with line
* GGB reader
* SnapToGrid
* Bug fix: setLabel, label for integral
* Ticks
* Bug fix: `X()` and `Y()` of hyperbola
* Bug fix: animation callback is not executed
* Handling of frozen elements: allow frozen elements to be draggable
* Bug fix: Value() method for reflexangle and nonreflexangle
* Bug fix: deepCopy
* Make pointer events more stable
* Bug fix: signedPolygon
* Improved `isPoint()` method
* Enable polygons with no vertices
* Add mouse wheel support to devices which support pointer events.
* Fix hatch marks
* Bug fix: dragging curves on touch devices.
* Bug fix font-size of input and button elements.
* Bug fix: slider.setValue()
* Bug fix: exclude the border-width when the reading the dimension of the canvas.
* Increase precision in root finding.
* fixed return value of deprecated function Board.createElement
* Bug fix: glider on undefined line. If one of the defining points is undefined the glider will disappear now.
* Fixed grid so that fractional upper and lower bounds of the grid (fractions of gridX and gridY) aren't rounded to the nearest multiple of gridX and gridY
* Bug fix: removeObject(turtle)
* Bug fix projectCoordToCurve
* Bug fixes for `renderer='no'`
