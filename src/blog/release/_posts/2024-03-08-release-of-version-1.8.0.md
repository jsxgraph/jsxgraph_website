---
layout: post
title: Release of 1.8.0
subtitle: Major new release
categories:
  - Releases
---

Dear friends of JSXGraph,

we are very happy to announce the release of JSXGraph v1.8.0!

This release is a massive overhaul of the [`axis` element](https://jsxgraph.org/docs/symbols/Axis.html) with new positioning options like "fixed" and "sticky" that allow the positioning of an axis close to the border of a board. Moreover, non-integer axis [ick labels can now displayed as [fractions](https://jsxgraph.org/docs/symbols/Ticks.html), also TeX fractions are possible. Further, we revived the venerable element `grid` with many additional options. Please, have a look at the [documentation](https://jsxgraph.org/docs/symbols/Grid.html) to get inspired. The possibilities to manipulate 3D scenes have been much improved, too: users can now freely rotate 3D scenes with the pointer device or the keyboard, with no need for the sliders to control azimuth and elevation anymore, see the [documentation](https://jsxgraph.org/docs/symbols/View3D.html)

Additionally, some new methods have been added and a few annoying bugs could be fixed. 

To see a more complete list of changes, please consult [CHANGELOG.md](https://github.com/jsxgraph/jsxgraph/blob/main/CHANGELOG.md).

The new features have mostly been implemented in a student's project in the winter term at the University of Bayreuth.
*Many thanks to all contributors who helped to improve JSXGraph!*

Please keep posting bug reports, feature suggestions, and code improvements. 
In particular, if you have small examples and comments to improve the API reference, 
let us know. Also, TypeScript support of the new features is not up to date. Please, if you are a TypeScript expert, help us to add the new features to `index.d.ts`.

Enjoy,

Carsten Miller, Andreas Walter, and Alfred Wassermann
