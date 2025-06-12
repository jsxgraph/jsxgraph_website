---
layout: post
title: Release of 1.00.0
subtitle: Major new release
date: 2020-03-26T09:00:00+00:00
categories:
  - Releases
---
*Here it is:*
The much awaited version **1.00.0** of JSXGraph has been released!
After 12 years of development we think JSXGraph is more than ready to 
leave with version 1.00.0 the unofficial beta-status.

We heartfully thank all the developers out there who use JSXGraph since many years
to produce mathematical visualizations for countless e-learning environments
from primary school to university level.

Also, we want to invite you to the 
[1. JSXGraph conference](https://jsxgraph.org/conf) on 8.-9. October 2020 at the University of Bayreuth, 
Germany. We want to bring together JSXGraph users, developers and content developers to exchange ideas and learn from
each other.

Moreover, at <https://ipesek.github.io/jsxgraphbook/> a tutorial for programming JSXGraph is in development. Stay tuned!

## New in v1.00.0

The last release was version 0.99.7 in May 2018, a big pile of improvements has been incorporated since then.
In this post, we want to give  just a short overview of the changes and improvements since version 0.99.7.
In the following days, we will publish a series of posts where the new possibilities are explained 
together with examples.

### Compatibility

* To the best of our knowledege, version 1.00.0 contains only one change which might request action from content developers: 
JessieCode parse errors are now handed over to the application and can/must be catched by `try {} catch (e) {}`. Before,
just a `console.log()` message was written by JessieCode.
* The good news are that Safari and wkwebview on iOS 13+ switched to pointer events. That is, all major browsers now use pointer event.
* Since Safari 12, `board.renderer.screenshot()` also supports texts in Safari and therefore behaves similar as in Chrome and Firefox.

### New Features and Improvements

* Polygon / curve *clipping* and *boolean operation* on curves are now enabled. 
This allows intersection, union or difference of curves, polygones or circles, see
[API docs](https://jsxgraph.org/docs/symbols/JXG.Math.Clip.html).
* New math functions: *cot*, *acot*, *nthroot*, *cbrt*, *binomial*. Available e.g. as `JXG.Math.cot`.
*nthroot(a, n)* returns the n-th real root of a, where n is an integer. *cbrt* is the cubic root.
* `JXG.Math.pow`: is now able to compute `x^(1/n)` for `x<0` and $n$ an odd integer.
* Add board attributes `showFullscreen` and `fullscreen`, see [API docs](https://jsxgraph.org/docs/symbols/JXG.Board.html#fullscreen).
* New board attribute `maxBoundingBox`, see [API docs](https://jsxgraph.org/docs/symbols/JXG.Board.html#maxboundingbox).
* Faces for hatch marks and ticks `|><`, see [API docs](https://jsxgraph.org/docs/symbols/Hatch).
* Create parabola given by a point and a pair of coordinate pairs.
* Styling and highlighting of navigation bars with CSS
* Add new parameter `delay` for CoordsElement.startAnimation()
* Polar grid
* New attribute `highlightSize` for arrow heads.
* Reflection, mirroring of polygons
* New attribute for labels `autoPosition: true/false` enables automatic positioning of labels which avoids overlapping of labels.
* screenshot and base64 dumps include images now (dumpToURI)
* API documentation contains many new examples and documentation of charts.
* Curve plotting: massive speed improvements and plotting precision
* Multi-touch rotations are much more stable for pointer events
* Pointer events use different precision when using pen, mouse or touch. New events for pen: pendrag, pendown, penmove.
* Massive speed-up if many elements are deleted
* Improved pan / pinch-to-zoom handling

We thank all contributors which supplied patches, bug reports and suggestions for improvements.


For a full list of all changes see the [CHANGELOG](https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md).

Enjoy, 

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, and Alfred Wassermann
