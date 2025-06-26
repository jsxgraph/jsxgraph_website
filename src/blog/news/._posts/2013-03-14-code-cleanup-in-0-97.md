---
id: 819
title: Code cleanup in 0.97
date: 2013-03-14T12:13:27+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=819
permalink: /2013/03/14/code-cleanup-in-0-97/
categories:
  - Uncategorized
---
While we implemented the AMD pattern in JSXGraph version 0.97 we also cleaned up our code base. There were a few math functions which you could access as &#8220;shortcuts&#8221; as methods of our `JXG.Board` class defined in `src/Wrappers.js`.

`Wrappers.js` is gone now and the shortcuts were moved to more appropriate locations. This blog post lists all board method wrappers that were removed and where you can find the original functions if you used the wrappers.

## JavaScript `Math` methods {#javascript-math-methods}

Math functions that are available in plain JavaScript should be used directly. There used to be wrappers for these `Math` functions in `JXG.Board`:

> round, abs, acos, asin, atan, ceil, cos, exp, floor, log, max, min, random, pow, sin, sqrt, tan

**Example**

```javascript
    var i = Math.sin(Math.PI);
```

## General math functions in `JXG.Math` {#general-math-functions-in-jxg.math}

We provide a collection of general Math routines in our `JXG.Math` namespace. Please use them directly if you used to access these functions via the board wrapper:

> factorial, binomial, cosh, sinh

**Example**

```javascript
    var b = JXG.Math.binomial(4, 3);
```

## Geometry helper functions {#geometry-helpers}

Functions related to geometric calculations can be found in the `JXG.Math.Geometry` namespace. This is where you can find these methods now if you did use the corresponding board wrappers before:

> angle, rad, distance

**Example**

```javascript
    var r = JXG.Math.Geometry.rad(A, B, C);
```

## Numerical algorithms {#numerical-algorithms}

There were also a few numerical algorithm wrappers you can now only use directly via _JXG.Math.Numerics_:

> D, I, root, lagrangePolynomial, neville, riemannsum

### Example {#example-3}

```javascript
    var Df = JXG.Math.Numerics.D(f); board.create('plot', [Df]);
```

## Removed or renamed {#removed-an-renamed}

* `JXG.Board.trunc()` was removed, please use `Math.floor()` instead.
* The `JXG.Board.sgn()` wrapper was removed.
* The board methods `intersection, intersectionFunc,` and `otherintersection` were removed. Instead we now provide two elements _intersection_ and _otherintersection_.