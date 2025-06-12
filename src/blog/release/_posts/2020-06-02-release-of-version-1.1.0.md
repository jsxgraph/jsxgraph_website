---
layout: post
title: Release of 1.1.0
subtitle: Major new release
date: 2020-06-02T12:00:00+00:00
categories:
  - Releases
---

Version 1.1.0 introduces the new JSXGraph element `polygonalchain` (sometimes also called "polyline"), 
see <https://jsxgraph.org/docs/symbols/PolygonalChain.html> and new attributes for gradient colors. 
Examples can be seen at <https://jsfiddle.net/6wbmvjp3/> for linear gradients and
<https://jsfiddle.net/6wbmvjp3/1/> for radial gradients.
The statistics module received the new method `JXG.Math.statistics.generateGaussian` which generates values 
of a standard normal random variable.
JSXGraph v1.1.0 supports the exciting MathJax v3+ which renders math content much faster than v2.
Following a user request, slider values can now be set by clicking on the slider baseline. 

Further improvements include the `autoposition` feature for labels introduced in v1.0.0 which is now much more stable and arrow heads on curves do now end on the curves' end point. This release contains  a cleanup of the npm repository and - as usual - several bug fixes.

We thank all contributors which supplied patches, bug reports and suggestions for improvements.


For a full list of all changes see the [CHANGELOG](https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md).

Enjoy, 

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, and Alfred Wassermann
