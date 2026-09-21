# A Geography Extension

JSXGraph GEO is an extension that adds two elements to JSXGraph. It is not part of the core library and must be loaded separately.

<img src="{{ relBase }}/media/logos-external/logo-geo.png" class="w-50 w-40-over-lg">

`globe3d` keeps the geometry on the sphere. It inherits from View3D, meaning the globe shares its coordinate space with any other three-dimensional construction. The result is a perspective view of a sphere, with the usual consequences: foreshortening towards the rim and half of the Earth always being turned away.

<div id="box-post-globe" class="jxgbox" style="aspect-ratio: 3 / 2; width: 100%;"></div>

<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-geography.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-globe3d.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-geomap.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/jxg-geoelements.js"></script>
<script src="https://jsxgraph.org/extensions/geo/distrib/dataset.js"></script>
<script>
    (function () {
        var BOX = 'box-post-globe';
        var board = JXG.board(BOX, {
            boundingbox: [0, 8, 12, 0],
            keepaspectratio: true,
            axis: false,
            grid: false,
            showCopyright: true,
            showNavigation: false,
            showInfobox: false,
            pan: {enabled: false},
            zoom: {enabled: false}
        });

        var globe = board.create('globe3d', [[2.6, 0.6], [6.8, 6.8]], {
            data: JXG.Geography.datasets.naturalEarth110,
            tabindex: null,
            body: {
                center:                 [0, 0, 0],
                fillColor:              '#337799',
                fillOpacity:            .75
            },
            land: {
                visible:                true,
                fillColor:              '#cddc39'
            },
            farSide: {
                visible: true,
                fillColor:              '#dcd3bf',
                fillOpacity:            0.35,
                strokeColor:            '#ff0000'
            },
            graticule: {
                visible: true,
                strokeColor: '#ffffff'
            }
        });

        globe.angles.bank = 23.44 * Math.PI / 180;
        globe.rotateMode('azimuth');

        if (typeof globe.geoPoint !== 'function' && JXG.Geography.attachElements) {
            JXG.Geography.attachElements(globe);
        }
        if (typeof globe.geoPoint !== 'function') {
            return;
        }

        var PLACES = [[8.57, 50.03, 'From'], [-73.78, 40.64, 'To']];

        var points = PLACES.map(function (a) {
            return globe.geoPoint(a[0], a[1], {fillColor: '#ff00ff'});
        });


        var route = globe.geoPath(points[0], points[1], {
            mode: 'greatcircle',
            strokeColor: '#224466',
            strokeWidth: 2
        });

        var plane = globe.geoMarker(route, {size: 1.2});
        globe.geoTrail(plane, {length: 0.25});

        // Now that the route exists, the ends can be made draggable.
        points.forEach(function (p, k) {
            globe.geoLabel(p, PLACES[k][2],{
                anchorX: 'left',
                anchorY: 'bottom',
                cssStyle:
                    'border: 1px solid #000000bb; ' +
                    'border-radius: 15px; ' +
                    'margin: 2px; ' +
                    'padding: 0px 8px; ' +
                    'background-color: #ffffffbb;',
                strokeColor:'#000000'
            });
            globe.geoHandle(p, {onMove: function () { }});
        });

        route.animate({
            duration: 9000,
            loop: true,
            onFrame: function (m, u) {}
        });
    }());
</script>
<br>
`geomap`  draws the Earth on a plane using one of twelve different projections. While the map is running, the projection can be exchanged; the layers move into their new positions rather than jumping, making the difference between two projections visible as a transformation rather than as two separate images.

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