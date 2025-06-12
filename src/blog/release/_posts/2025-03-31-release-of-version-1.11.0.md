---
layout: post
title: Release of 1.11.0
subtitle: Major release
categories:
  - Releases
---

Dear friends of JSXGraph,

We are excited to announce the release of JSXGraph v1.11.0, a major update that brings significant improvements to 3D functionality. This new version introduces a [new element called `polyhedron3d`](https://jsxgraph.org/docs/symbols/Polyhedron3D.html), which allows for the creation of 3D polyhedra, enabling the creation of complex 3D polyhedra with ease. The element supports [shading effects](https://jsxgraph.org/docs/symbols/Face3D.html#shader) on 3D faces, taking the realism of your 3D scenes to the next level.

In addition, the depth ordering of 3D elements has been extended to include polyhedra, making it simpler to create convincing 3D scenes. [Depth ordering](https://jsxgraph.org/docs/symbols/View3D.html#depthOrder) is now organized layer-wise and set as attribute of the 3D view. Elements in different layers are not compared. The internal 3D element structure has also been completely refactored, improving performance and flexibility.

The update also introduces [3D transformations](https://jsxgraph.org/docs/symbols/Transformation3D.html), making it easier to create complex 3D animations and interactions. With these transformations, you can now rotate, scale, and translate 3D objects with precision and control.

One of the key strengths of JSXGraph is its flexible attribute system, which allows for seamless embedding of constructions into any design. This flexibility has been further extended in version 1.11.0, with the ability to pass the hosting element as a parameter to functions given as values of attributes. This simplifies the creation of visualizations where colors or other attributes depend on the object's position or other properties. See the attributes `fillColor` and `size` in this [heat map example](https://jsxgraph.org/share/example/heat-map).

In addition to these exciting new features, JSXGraph v1.11.0 also includes support for all [ARIA attributes](https://jsxgraph.org/docs/symbols/JXG.GeometryElement.html#aria) in all JSXGraph elements, as well as the ability to set [CSS classes](https://jsxgraph.org/docs/symbols/JXG.GeometryElement.html#cssClass) bound to all JSXGraph elements. This enables the use of SVG filters, further enhancing the [capabilities of your visualizations](https://jsxgraph.org/share/example/svg-filter-and-css-classes). These features are available for the default SVG rendering.
New math methods have been added for handling matrices and testing of a point set for convexity. The update also includes a much-requested feature: the ability to construct curves by supplying a list of coordinates, rather than separate arrays of x-coordinates and y-coordinates. This feature has also been added to 3D curves. 

Finally, the release contains numerous bug fixes and improvements to the API documentation, ensuring that you have the best possible experience with JSXGraph v1.11.0. Overall, this new release is a major step forward in the development of this powerful graphing library, and we are excited to see the new possibilities it will enable for users.

For more improvements and bug fixes see the CHANGELOG and the blog posts on the [beta1](https://jsxgraph.org/wp/2024-11-08-release-of-version-1.11.0-beta1/) and [beta2](https://jsxgraph.org/wp/2025-02-24-release-of-version-1.11.0-beta2/) releases of v1.11.0.

Many thanks for all contributors who made this release possible.

__API Changes:__

- `depthOrder` instead of `depthOrderPoints`


Enjoy,

Alfred Wassermann



