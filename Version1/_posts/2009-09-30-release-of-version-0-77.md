---
id: 360
title: Release of version 0.77
date: 2009-09-30T13:29:31+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=360
permalink: /2009/09/30/release-of-version-0-77/
categories:
  - Releases
tags:
  - animation
  - Bezier curve
  - chart
  - jsxgraph
---
Version 0.77 of the JavaScript plotting and Geometry library [JSXGraph](http://jsxgraph.org) contains many improvements and feature enhancements. Beside of bug fixes the performance could also be improved considerably, again. The visual appearance of JSXGraph is another area where great progress could be achieved. The main issues were the automatic labeling of axes, the default colors of geometric elements, [gradient filling](/wiki/index.php/The_HSV_color_scheme), improved, animated highlighting, [flexible animations](/wiki/index.php/Animations). A forthcoming blog entry will be devoted to animations in greater detail. The algorithm for curve plotting has been completely rewritten. Now, function graphs having discontinuities and poles are displayed correctly in most cases. New elements are [cubic Bezier curves](/wiki/index.php/Bezier_curves), [&#8220;the other intersection point&#8221;](/wiki/index.php/Circum_circles_of_subtriangles), improved [charts](/wiki/index.php/Category:Charts), [tangent from point to circle](/wiki/index.php/Tangents_on_circle).
  
Further, a spin off product [JSXCompressor](/wp/2009/09/29/jsxcompressor-zlib-compressed-javascript-code/) has been released. It uses our JavaScript implementation of gunzip and zip to deliver compressed JavaScript in an HTML file.