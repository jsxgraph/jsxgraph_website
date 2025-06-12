---
layout: post
title: Release of 1.9.2
subtitle: Patch release
categories:
  - Releases
---

Dear friends of JSXGraph,

JSXGraph v1.9.2 is the next patch release, fixing a couple of errors, but also introducing a few new features.

This release contains incremental improvements of 3D handling. The trackball navigation has been much improved, there is now a third slider `bank` to control the view port, and first attempts to order elements according to their z-value have been implemented. Thanks go to @Vectornaut for doing this incredibly valuable work. 

Beside 3D support, there is a new attribute `nonnegativeOnly` which controls how a negative circle radius or negative segment length should be treated. Previously, the absolute value was taken. Now, also the maximum of 0 and this value can be taken.

The most notable fixes are addressing a regression in construction of parallelograms,  displaying of axis labels as fractions, automatic label placement, infinite growing of a JSXGraph container, and tangents on arcs and sectors. Moreover, printing support has been improved, as well as resizing of the JSXGraph container in general.

*Thanks again to all contributors for programming, reporting bugs, and providing valuable suggestions.*

If there are new regressions, please, do not hesitate to submit a report on [github](https://github.com/jsxgraph/jsxgraph).

Finally, do not forget to submit talks and register for 5th JSXGraph conference on October 8-10, 2024 (online and free). The conference homepage is <https://jsxgraph.org/conf2024/>. Everybody is invited to show her/his work with JSXGraph. Also, there will be a workshop with new features of JSXGraph in 2024.


Enjoy, 

Carsten Miller, Andreas Walter, and Alfred Wassermann

