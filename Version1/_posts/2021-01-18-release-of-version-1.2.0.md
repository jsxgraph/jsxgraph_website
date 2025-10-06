---
layout: post
title: Release of 1.2.0
subtitle: Major new release
date: 2021-01-18T12:00:00+00:00
categories:
  - Releases
---

JSXGraph version v1.2.0 contains many improvements over previous versions. Most notably is the support of the [METAPOST](https://www.tug.org/docs/metapost/mpman.pdf) path algorithm, see also <https://bosker.wordpress.com/2013/11/13/beyond-bezier-curves/>.
The METAPOST paths were readily used to define new arrow heads (types 4, 5, 6). METAPOST paths can be used with the new element `metapostspline`. Ticks and hatches can now be set on arbitrary curves. Root finding has been improved considerably, and there is a new, still experimental plot algorithm which will offer function plots of higher quality (use it by setting the attribute `plotVersion:4)`. For this, we implemented interval arithmetics in JSXGraph, which - up to now - can be used via JessieCode. 

Further improvements include initial support of ARIA tags, better polygon / curve clipping, many bug fixes and lots of additions to the API docs.

This version received input (suggestions, bug reports, pull requests) from quite a few users. Many thanks to all of you! Special thanks goes to the guys from <https://classcalc.com/> for many helpful suggestions and bug reports.

For a more detailed list of changes see <https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md>.

Enjoy, 

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
