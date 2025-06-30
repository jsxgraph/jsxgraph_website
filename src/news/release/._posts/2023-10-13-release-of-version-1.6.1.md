---
layout: post
title: Release of 1.6.1
subtitle: Patch release
date: 2023-10-13T07:00:00+00:02
categories:
  - Releases
---

JSXGraph release v1.6.1 is a patch release which additionally introduces a few new options.

Beside bug fixes, the main improvement in this release is the handling of fullscreen mode: now, fullscreen mode is independent from the CSS styling
of the original JSXGraph board. Additionally, JSXGraph is now able to adapt to orientation changes of a mobile device in fullscreen mode, too.

In Riemann sums, Simpson's rule is now visualized by using a quadratic function which very convincingly shows the power of this approximation method.

New in this release are the attributes `snapValues` and `snapValueDistance` for slider elements to improve positioning sliders at specific positions.
Further, the attributes `autoPositionMinDistance` and `autoPositionMaxDistance` for labels are introduced to better control the automatic positioning of labels.

More bug fixes can be seen in the CHANGELOG.md file.

Many thanks to all contributors who helped to improve JSXGraph! Please keep posting bug reports, feature suggestions and - of course - pull requests.

Enjoy,

Carsten Miller, Andreas Walter, and Alfred Wassermann
