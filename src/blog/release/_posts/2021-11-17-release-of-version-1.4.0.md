---
layout: post
title: Release of 1.4.0
subtitle: Major new release
date: 2021-11-17T09:00:00+00:00
categories:
  - Releases
---

We are happy to be able to announce the release of JSXGraph v1.4.0. This new version brings several new elements and methods, as well as many improvements and bug fixes.

The new element `foreignobject` (also available with the shortcut `fo`) allows to embed arbitrary HTML content, including videos and iframes, into JSXGraph constructions. Here, "embed" means that the HTML content can be placed in arbitrary layers. An example would be to include a video and place a curve element "above" the video. See the [API doc](https://jsxgraph.org/docs/symbols/ForeignObject.html) for examples.
For technical reasons, `foreignobject` elements are available with the (default) SVG rendering engine, only.

The other new element is the `boxplot` element. Again, see the [API docs](https://jsxgraph.org/docs/symbols/Boxplot.html) for examples. One possibility is to use it together with the new method [`JXG.Math.statistics.percentile`](https://jsxgraph.org/docs/symbols/JXG.Math.Statistics.html#.percentile). The [API docs](https://jsxgraph.org/docs/symbols/Boxplot.html) contains also an example for an interactive use.

A long requested feature is the possibility to compute the function term of Lagrange polynomials. This is now possible with the new methods `JXG.Math.Numerics.lagrangePolynomialTerm()` or `JXG.Math.Numerics.lagrangePolynomial.geTerm()`, see the [API docs](https://jsxgraph.org/docs/symbols/JXG.Math.Numerics.html#.lagrangePolynomialTerm) for examples.

A convenient alternative to `snapToGrid` is the new point attribute `attractToGrid` ([API docs](https://jsxgraph.org/docs/symbols/Point.html#attractToGrid)).

The new low level method [`Polygon.pnpoly()`](https://jsxgraph.org/docs/symbols/JXG.Polygon.html#pnpoly) determines if (user or screen) coordinates (x, y) are inside of a polygon. It is used e.g. in the method [`Point.isOn()`](https://jsxgraph.org/docs/symbols/JXG.Point.html#isOn).

Surprisingly, in all the years JSXGraph never could intersect circles and curves. This has been changed now.

Version 1.4.0 brings a change in the default colors. Most notably, the green polygon fill color has been replaced by a yellow color tone. We decided to use as new [color palette](https://jsxgraph.org/docs/symbols/JXG.html#.paletteWong) the color scheme developed by Bang Wong which is optimized for various types of color blindness. See also <https://davidmathlogic.com/colorblind/>. If you want to restore the old colors, call `JXG.setClassicColors()` before initializing any board.

Further improvements include better keyboard interaction, extended API documentation with many new examples, and much smoother handling of two finger touches on touch devices. In JessieCode, a security hole in text elements has been fixed.

Beside fixing quite a few bugs, also the JSXGraph ecosystem has been overhauled: The NPM dependencies for development of JSXGraph have been much reduced, Travis testing has been reestablished and unit testing has been reactivated. Now, we use Karma and Jasmine. Developers may try it out by calling `make test`.

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
