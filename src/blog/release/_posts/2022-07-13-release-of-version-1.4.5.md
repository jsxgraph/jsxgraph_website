---
layout: post
title: Release of 1.4.5
subtitle: Patch release
date: 2022-07-13T13:00:00+00:00
categories:
  - Releases
---

JSXGraph release v1.4.5 is a patch release, which additionally introduces two new features. 
First, geometry elements have now the new attribute `rotatable`. If set to false, the element can not
be rotated with two fingers on touch devices. The other new feature is the new method `setPosition3D` 
for 3D points.

This release fixes two regressions: the method resizeObserver was broken in 1.4.4. Now, JSXGraph reacts to 
size changes of the hosting div again. Further, snapToGrid works again for lines, too.
The use of JSXGraph in shadowDOM has been improved, it supports now fullscreen mode, too.
Additionally, the handling of MathJax strings has been slightly improved. More bug fixes can be seen in the 
CHANGELOG.

### Reminder 
Don't forget to register for the [3rd international JSXGraph conference](https://jsxgraph.org/conf2022/) (October 4th - 6th, 2022).

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
