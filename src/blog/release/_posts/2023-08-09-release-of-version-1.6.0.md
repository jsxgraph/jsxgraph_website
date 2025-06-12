---
layout: post
title: Release of 1.6.0
subtitle: Major new release
date: 2023-08-09T07:00:00+00:00
categories:
  - Releases
---

Dear friends of JSXGraph,

we are thrilled to announce the release of JSXGraph v1.6.0.

New in this release are the long-awaited new elements `vectorfield` and `slopefield`, as well as the new element `smartlabel` for measurements. A big change is the support of *Internationalization*, specifically the possibility to format numbers according to a locale. This affects axis labels, measurements, info box and general texts consisting of numbers.

Another big step forward is the introduction of the new method `board.setAttribute()`. This allows to change board options after initialization of a board. For example, the availability of the selection polygon or visibility of icons in the navigation bar can be controlled with that method.

A much requested feature has finally been added: HTML texts (i.e. texts with default attribute `display:'html'`) can now be rotated, too. Many thanks to the contributor! Meanwhile, also transformations can be applied to these texts (with the restriction to affine transformations, i.e. no finite points are projected to infinite points). There is a new type of elements called `smartlabels`: these are texts bound to elements like segments, circles, points which display measurement data for these points. These HTML texts come with carefully crafted CSS classes in `jsxgraph.css`.

3D support has been gradually improved, but here there is still a lot of work to do. A small, but very helpful new method is `JXG.Math.Numerics.getLangrangePolynomialCoefficients` to get the coefficients of Lagrange polynomials. Other additions are the methods `Circle.Perimeter()`, `Polygon.L()`, `Line.Slope()`, `Sector.setRadius()` and dotted lines (`dash:7`).

The API documentation has been enriched with many examples. Among the many bug fixes, the most notable is that transformations like reflections were broken in v1.5.0 and some numerical instabilities could be fixed. To see the full list of changes, please consult [CHANGELOG.md](https://github.com/jsxgraph/jsxgraph/blob/main/CHANGELOG.md).

As in most recent releases, TypeScript support of the new features is lagging behind. Please, if you are a TypeScript expert, help us to add the new features to `index.d.ts`.

Many thanks to all contributors who helped to improve JSXGraph! Please keep posting bug reports, feature suggestions and - of course - pull requests.

Finally, we want to encourage you to attend the free annually [JSXGraph conference](https://jsxgraph.org/conf2023). Contributions are still welcome.

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann


