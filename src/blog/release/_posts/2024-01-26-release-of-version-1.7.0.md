---
layout: post
title: Release of 1.7.0
subtitle: Major new release
categories:
  - Releases
---

Dear friends of JSXGraph,

we are very happy to announce the release of JSXGraph v1.7.0!

__New elements__

The most notable new feature of this release is the very long awaited ability to plot
*implicitly defined curves*, i.e. the the curve is the set of solutions of
an equation *F(x, y) = 0*. JSXGraph offers the new curve
element `implicitcurve` for this feature.
At <https://jsxgraph.org/testbed/implicit.html> you'll find a demo version
with various typical examples, while you can also supply your own example
(input language is JessieCode).

Implicit plotting (in a reasonable time) is a delicate matter.
The algorithm has plenty of parameters, a few of them can be changed online
in the above example site.
Unfortunately, for every algorithm one can always find equations that will break that algorithm. The paper by Oliver Labs, [A List of Challenges for Real Algebraic Plane Curve Visualization Software](https://link.springer.com/chapter/10.1007/978-1-4419-0999-2_6) contains a lot of such examples.
This said, at the time being our algorithm will not detect solitary points, i.e.
isolated singular points.

If the curve defined by your favorite equation is not plotted correctly, regardless of the parameter values, please send it to us as a bug report.

Further new elements are `parallelogram` (see [API reference](https://jsxgraph.org/docs/symbols/Parallelogram.html)) and `vectorfield3D`
(see [API reference](https://jsxgraph.org/docs/symbols/Vectorfield3D.html)). The latter marks one more step in the gradual improvement
of 3D support in JSXGraph. Another new element is `measurement` which enables
display of measurements and expressions thereof. This is a very specific element
tailored for the use in the upcoming new release of our interactive geometry system
[sketchometry](https://sketchometry.org). We will explain its possibilities in
a future blog post.

The __mathematical foundation__ of JSXGraph is extended by several new functions:

- `JXG.Math.Numerics.polzeros`: computes all zeros (including the complex ones) of a polynomial. It uses Weierstrass iteration, attributed also to Aberth and Ehrlich.
- `JXG.Math.Numerics.glomin`: Brent's global minimizer of a function in one variable.
- `JXG.Math.hypot`: Euclidean length of an arbitrary number of parameters.
- `JXG.Math.hstep`: Heaviside unit step function
- `JXG.Math.Geometry.distPointSegment`: computes distance point from segment.
- For fast access to a curve, a new quadtree implementation `JXG.Math.BoxQuadtree`
has been developed.

__Themes__

Starting with this release it is possible to use themes which control the visual appearance
of JSXGraph elements. Changing the visual appearance has been possible before
by tweaking the options object. However, this was somewhat complex. In v1.7.0 there is the
new theme `mono_thin` available. It can be activated with the board attribute
`theme:'mono_thin'`, see 
[API reference](https://jsxgraph.org/docs/symbols/JXG.Board.html#theme). 
Hopefully, more themes will be contributed by the user community.
If this is the case, new themes will probably not be part of `jsxgraphcore.js`,
but we will try to set up a repository with available themes. However, the `mono-thin` will
be part of the core to serve as an example.

__STACK support__

Good news for users of the JSXGraph plug-in in the popular question type
[STACK](https://stack-assessment.org/) for e-assessment in [moodle](https://moodle.org)
and [ILIAS](https://www.ilias.de/):

- The JessieCode parser in JSXGraph now understands now the symbols `x^2` 
as well as `x**2` for exponentiation.
- JSXGraph offers the function `JXG.stack2jsxgraph(string)` 
([API reference](https://jsxgraph.org/docs/symbols/JXG.html#.stack2jsxgraph)) 
which expects a string containing MAXIMA syntax and 
returns a JavaScript / JessieCode string or array. *Example:*

```javascript
var code = JXG.stack2jsxgraph("[%pi*(x**2 - 1), %phi*(x - 1), %gamma*(x+1)]");
// returns
["PI*(x**2 - 1)", "1.618033988749895*(x - 1)", "0.5772156649015329*(x+1)"]
```
- Please give us feedback if you have specific request for this feature.

__More__

Further, this release contains many bug fixes and improvements. Mots notably,
a quadratic runtime in `board.removeObject()` could finally removed. Deleting
many objects at once should now work sufficiently fast. Other improvements:

- Arrowheads can now switched with `setAttribute`
- The method `Value` of angle, sector and arc has been extended by the parameter 'unit'
- Fullscreen support should now work everywhere (beside iphones, where it is forbidden)
- Each of the navigation buttons for zooming, ... has now its own CSS class
- The coordinates of points, texts, and image can now be accessed with `element.Coords()`
instead of the slightly more cumbersome `[element.X(), element.Y()]`
- The mediawiki plug-in works with the latest mediawiki version

To see a more complete list of changes, please consult [CHANGELOG.md](https://github.com/jsxgraph/jsxgraph/blob/main/CHANGELOG.md).

As in most recent releases, TypeScript support of the new features is lagging behind. Please, if you are a TypeScript expert, help us to add the new features to `index.d.ts`.

*Many thanks to all contributors who helped to improve JSXGraph!*
Please keep posting bug reports, feature suggestions, and code improvements. 
In particular, if you have small examples and comments to improve the API reference, 
let us know. Also, TypeScript support of the new features is lagging behind. Please, if you are a TypeScript expert, help us to add the new features to `index.d.ts`.

Enjoy,

Carsten Miller, Andreas Walter, and Alfred Wassermann
