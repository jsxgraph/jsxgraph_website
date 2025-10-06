---
layout: post
title: Release of 1.4.6
subtitle: Patch release
date: 2022-09-30T13:00:00+00:00
categories:
  - Releases
---

JSXGraph release v1.4.6 is a patch release which additionally introduces a few new options and incrementally improves the 3D functionality (which is still consider experimental).

Beside bug fixes mainly concerning a conflict between ARIA and text input, polygonal chains, and integral elements, this release improves clipping of elements and fullscreen mode on webkit browsers.
New is that polygons are now filled by the even-odd rule. 

New features are:

- Curves accept the attribute `hasInnerPoints`, i.e. like circles, curves can be dragged by clicking on interior points.
- The new ticks attribute `ticksPerLabel` allows labels also for minor ticks
- Labels for checkbox, input and button elements can now be functions.
- The navigation buttons come with ids: The naming scheme is `{boardid}_navigation_{name}` where `{name}` is:
  - cleartraces
  - reload
  - screenshot
  - fullscreen
  - out
  - 100
  - in
  - left
  - top
  - down
  - right 

Further, the 3D API has been reworked. Details will be discussed in the 3. JSXGraph conference (Oct. 4.-6., 2022, <https://jgsxraph.org/conf2022>).

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
