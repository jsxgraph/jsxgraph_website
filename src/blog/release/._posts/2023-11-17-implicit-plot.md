---
layout: post
title: Implicit plots with JSXGraph
subtitle: beta release
date: 2023-11-17T06:00:00+00:02
categories:
  - Releases
---

Dear friends of JSXGraph,

last week, our aged web server broke down, and we had to make
the - overdue - move to the new web server immediately. As a
positive side effect the mediawiki plug-in for JSXGraph is now
updated and can be used in the latest versions of mediawiki
(it is available in the `develop` branch of JSXGraph at github).

Anyhow, in the meantime we also released the first beta version
of version 1.7.0. As announced in the recent
[JSXGraph conference](https://jsxgraph.org/conf2023), this
beta version contains a first attempt of an implicit plot
algorithm. The beta version is available at <https://jsxgraph.org/beta/jsxgraphcore.js>.

Implicit plot means that the set of solutions of an equation
*f(x,y) = 0* is computed and displayed.
At <https://jsxgraph.org/testbed/implicit.html> you'll find a demo version
with various typical examples, you can also supply your own example
(input language is JessieCode). The algorithm has plenty of parameters, a few of them
can be changed online in this example.

Implicit plotting (in a reasonable time) is a delicate matter. You will
always find equations that will break the algorithm. The paper by Oliver Labs,
[A List of Challenges for Real Algebraic Plane Curve Visualization Software](https://link.springer.com/chapter/10.1007/978-1-4419-0999-2_6) contains a lot of such examples.
At the time being our algorithm will not detect solitary points, i.e.
isolated singular points.

However, if your favorite equation is not plotted correctly, regardless of the parameter values,
please send it to us as a bug report. So far, the algorithm has only a low-level
interface and has to be called inside the `updateDataArray` method, but this will change
before the release of v1.7.0.

Enjoy, Alfred
