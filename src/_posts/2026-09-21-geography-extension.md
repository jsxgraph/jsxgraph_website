---
title: JSXGraph GEO — maps and globes as constructions
subtitle: A JSXGraph extension
author: Carsten Miller
category: General
tags:
  - Extension
  - 3D
  - projection
  - map
  - globe
---
Dear friends of JSXGraph,

we are pleased to announce JSXGraph GEO, a Geography extension that adds two new elements to JSXGraph: `geomap`, which puts the world on a sheet, and `globe3d`, which leaves it on the sphere.

<div id="box-post-globe" class="jxgbox" style="aspect-ratio: 3 / 2; width: 100%;"></div>

<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-geography.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-globe3d.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-geomap.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-geoelements.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/dataset.js"></script>


<script>
    (function () {
        var board = JXG.board('box-post-globe', { boundingbox: [0, 8, 12, 0], showNavigation: false, keepAspectRatio: true     });
        
        var globe = board.create('globe3d', [[2.6, 0.6], [6.8, 6.8]], {
            data: JXG.Geography.datasets.naturalEarth110,
            tabindex: null,
        });
        globe.angles.bank = 23.44 * Math.PI / 180; 
        globe.rotateMode('azimuth');
        globe.rotateMode('azimuth');
    }());
</script>
<br> 
On 4 September the UN General Assembly adopted resolution [A/RES/80/307](https://docs.un.org/en/A/RES/80/307), brought by Togo for the African Union under the title “Correct the Map”. It encourages the use of equal-area projections such as Equal Earth wherever relative size matters — and, just as importantly, asks that the limits of any flat world map be taught. That second half is what this extension is good at. Switch a map from Mercator to Equal Earth and watch Greenland shrink while Africa grows; the two are not close, Africa is fourteen times larger.

### What it adds

Twelve projections, seven of which can be re-centred on any point of the globe. A projection can be exchanged while the map is running, and the layers morph into place rather than jumping.

<div id="box-post-map" class="jxgbox" style="aspect-ratio: 7 / 5.5; width: 100%;"></div>

<script>
    (function () {
        var board = JXG.board('box-post-map', { boundingbox: [0, 8, 12, 0], showNavigation: false, keepAspectRatio: true     }); 
        var map = board.create('geomap', [[0.2, 0.5], [11.6, 7.9]], {
          data: JXG.Geography.datasets.naturalEarth110,
          tabindex: null,
          projection: 'equalearth'
        });
        board.create('button', [3.75, 0.075, JXG.Geography.projections['mercator'].name.en, function () {
            map.setProjection('mercator', true); 
        }], {
            cssStyle: 'margin: 0px; padding: 1px 5px; border-radius: 999px; border: none    ; background: #ccddee; color: #000000; width: 80px;',
            fixed: true
        });
        board.create('button', [6.5, 0.075, JXG.Geography.projections['equalearth'].name.en, function () { map.setProjection('equalearth', true); }], {
            cssStyle: 'margin: 0px; padding: 1px 5px; border-radius: 999px; border: none    ; background: #ccddee; color: #000000; width: 80px;',
            fixed: true
        });
    }());
</script>
<br>
A globe that inherits from `view3d`, so the sphere shares its space with anything else you draw in three dimensions.

And sixteen drawable elements — points, paths, markers, polygons, triangles, regions, orbits, the day-and-night terminator — none of which knows whether it sits on a sheet or on a sphere. Put a map and a globe on one board and they can drive each other.

### It stays a construction

Nothing here is a picture. Points are draggable, interactions fire events, and measurements are made on the sphere rather than on the screen: a path reports its length in kilometres, a spherical triangle its angle sum and the excess over 180 degrees, a region its true area. That makes it usable for assessment as well as for illustration — every interaction returns a value a system can check.

### One attribute is all it takes
```
var board = JXG.board('box', { boundingbox: [0, 6.1, 12, 0] });
board.create('geomap', [[0.2, 0.2], [11.6, 5.7]], {
  data: JXG.Geography.datasets.naturalEarth110
});
```

Replace `geomap` with `globe3d` and you have a globe. The *Natural Earth* data ships with the extension, so nothing is fetched from a tile server — once the page has loaded, no network connection is needed.

### Where to look

A short demonstration is at [jsxgraph.org/extensions/geo/demo/](https://jsxgraph.org/extensions/geo/demo/); the documentation, with live examples for every option and every element, is at [jsxgraph.org/extensions/geo/](https://jsxgraph.org/extensions/geo/).

This is a first version. It is not cartographic software and does not try to be — the measurements are spherical rather than ellipsoidal, the dataset is generalised at 1:110 million, and a handful of further limits are written down next to the code they apply to. Corrections from anyone who knows their way around maps are very welcome.

The extension is dual licensed under LGPL and MIT, the same terms as JSXGraph itself.

Best regards,  
Carsten