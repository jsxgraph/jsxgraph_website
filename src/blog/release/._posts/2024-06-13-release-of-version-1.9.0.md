---
layout: post
title: Release of 1.9.0
subtitle: Major new release
categories:
  - Releases
---

Dear friends of JSXGraph,

we are very happy to announce the release of JSXGraph v1.9.0!

This release contains many, very valuable enhancements to 3D handling: Besides *parallel projection*, also *central projection* is now supported. This was already available secretly in v1.8.0, but now it is official. Further, 3D views can now be controlled with three degrees of freedom with the virtual trackball model that can be en/-disabled with the `view3d` attribute `trackball`. The alternative is to use the default model that allows the control of azimuth and elevation.
Moreover, we have quite a few more 3D elements, namely `sphere3d`, `intersectionline3d`, `circle3d`, `glider3d`, `intersectioncircle3d`, and polygon3d`. Thanks to @vectornaut for all these contributions!

In 2D geometry, the element `otherintersection` has been overhauled. Now it is possible to supply an array of points as "forbidden" intersection points. This makes it very convenient to visualize situations where more than two intersections arise.
Label positioning for one-dimensional objects like lines, circles, and curves has been improved: it is now possible to position the element's label to the left or right of the element and at a certain distance from its start.

JSXGraph's statistics module has been expanded with random number generators for the following distributions: uniform, normal, exponential, beta, gamma, chi-square, F, T, binomial, geometric, hypergeometric, Poisson distribution. Further, there is a new function `JXG.Math.Statistics.histogram` that does not plot anything but puts data in bins in preparation for a histogram plot. Additionally, there is the new function `JXG.Math.gamma`.

As usual, the API documentation has been enhanced in this release, several bugs were fixed. The most annoying one was that input fields were unusable when keyboard control was activated. The grid element, which had been completely refactored in v1.8.0, had some regressions which could be fixed. Also, `String.at()`has been replaced by other methods, which made JSXGraph unusable in certain browsers and certain versions of moodle. For developers the new version comes with a large internal change: all JavaScript imports include the file name extension `.js`. This simplifies the development workflow.

Some default values for attributes have been changed:

- grid: new default is `drawZero:false`
- text: if a text consists of a number the new default is 'formatNumber:false'
- click and double click: by default, a double click event is followed by two click events - as in JavaScript. This can be changed with the attribute `dblClickSuppressClick`

For more information about the new release see the CHANGELOG.

*Thanks again to all contributors for programming, reporting bugs, and providing valuable suggestions.*

Finally, we want to announce the 5th JSXGraph conference on October 8-10, 2024 (online and free). The conference homepage is <https://jsxgraph.org/conf2024/>. Everybody is invited to show her/his work with JSXGraph. Also, there will be a workshop with new features of JSXGraph in 2024.

Enjoy, 

Carsten Miller, Andreas Walter, and Alfred Wassermann


