---
id: 312
title: Release of version 0.76
date: 2009-08-21T10:37:17+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=312
permalink: /2009/08/21/release-of-version-0-76/
categories:
  - Releases
---
Version 0.76 of the JavaScript plotting and Geometry library [JSXGraph](http://jsxgraph.org) contains major improvements. First, the display quality has been improved greatly. Curves are much more smooth now and use the full power of the vector graphics capabilities of SVG and VML. 

Then, eye candy like shadows and gradient filling has been introduced. Unfortunately, browser support for shadows exists only partially, yet. Chrome, Safari and Opera still have problems displaying shadows based on SVG filters. Hopefully, with the new Webkit version this may change. You can admire examples at &#8220;[shadow example](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Shadows)&#8221; and &#8220;[pie chart](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Pie_chart)&#8220;. Additionally, this pie chart example uses the new feature that meanwhile every JSXGraph element has its own highlight method, which can be overwritten. This enables a wide range of new possibilities for visualization. 

Mathematically, the 0.76 release introduces new elements: circumcircle arc, circumcircle sector, semicircle and [regression polynomials of arbitrary degree](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Polynomial_regression_II).

Internally, there are also many improvements and bug fixes. Computationally expensive functions can be implemented much more efficient now (see the polynomial regression example). Optionally it is possible to activate the [Ramen, Douglas, Peuker algorithm](http://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm) for curve smoothing.

This release also introduce some API changes. By default, multiple boards in one html file are independent from each other now. They may be connected by `brd1.addChild(brd2);`
  
`JXG.GetReferenceFromParameter()` has been shortened to `JXG.getReference()`.

Last but not least, a lot of work has been spent on improving the [documentation](http://jsxgraph.uni-bayreuth.de/docs/index.html) and filling the [wiki](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Category:Examples) with many new examples.