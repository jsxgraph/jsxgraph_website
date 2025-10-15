---
title: Releases
parent: resources
order: 3
sections:

  - file: server
    layout: text

  - file: releases-list
    layout: text

  - file: debian
    layout: text
---

To work correctly, JSXGraph requires two files:

- `jsxgraphcore.js` contains the complete source code of JSXGraph bundled in one file. All objects of JSXGraph use the namespace `JXG`. Beside `JXG`
  there
  are no global variables.
- Include the CSS commands from `jsxgraph.css` into the web pages.

For ES6 import use the file `jsxgraphcore.mjs` instead of `jsxgraphcore.js`.