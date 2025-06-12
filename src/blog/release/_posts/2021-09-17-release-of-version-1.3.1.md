---
layout: post
title: Release of 1.3.1
subtitle: Patch release
date: 2021-09-17T09:00:00+00:00
categories:
  - Releases
---

We are happy to be able to announce the release of JSXGraph v1.3.1.

This release improves the usability in responsive web pages which has been introduced in v.1.3.0.
The main improvement is that JSXGraph scales the board correctly after orientation changes of the device independent from the CSS properties which determine the size of the JSXGraph div. For responsiveness, especially the aspect-ratio property (in new browsers) or the padding-bottom hack (in older browsers) are important. The responsiveness handling in v1.3.0 had broken the full screen mode.

Further, problems with intersection point of certain types of objects have been fixed. As usual, some minor bugs have been fixed and the API documentation has been improved, see CHANGELOG.md.

Thanks to all contributors who have helped to improve JSXGraph!

Please, do not forget to register for the [2nd JSXGraph conference](https://jsxgraph.org/conf2021) (October 5.- 7. 2021).

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
