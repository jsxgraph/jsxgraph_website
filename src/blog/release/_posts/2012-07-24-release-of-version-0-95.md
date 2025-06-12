---
id: 759
title: Release of version 0.95
date: 2012-07-24T15:13:16+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=759
permalink: /2012/07/24/release-of-version-0-95/
categories:
  - Uncategorized
---
Beside the bug fixes, version 0.95 brings much improved text handling. All texts may now be right aligned or centered. Internal (SVG) texts are much better supported. A much requested new text option is `rotate:degree` for easy rotation of internal texts. With minor and major arcs there are new geometric objects.
  
Also event handling has been improved, JSXGraph does not longer interfere with events from outside and custom event handlers can be introduced much more flexible.

**Important API changes:** 
The `offsets` property for labels has been renamed to `offset`, merged coordinate parameters into arrays for all `setPosition`, `setPositionDirectly`, and `setPositionByTransform` methods. The preferred usage of custom event handlers is now via `on/addEvent` resp. `off/removeEvent`.

Enjoy!