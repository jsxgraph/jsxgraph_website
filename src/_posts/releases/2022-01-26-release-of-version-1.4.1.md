---
layout: post
title: Release of 1.4.1
subtitle: Maintenance release
date: 2022-01-26T09:00:00+00:00
categories:
  - Releases
---

Version 1.4.1 of JSXGraph is mostly a maintenance and bug fix
release. Most notably, quite a few rough edges in the JessieCode math
parser have been polished out.  Resizing of the JSXGraph container
(for example when changing the orientation of a handheld device) is
handled now much better.  Some bugs in the clipping algorithm have
been fixed, more degenerated cases can be handled now.

The TypeScript definition file `index.d.ts` has been much improved and
now runs through the TypeScript compiler without complaints. Thanks
to David Holmes for his valuable contributions.

There are also some changes in the JSXGraph eco system: Since this
version, `terser` is used for minifying and `eslint` for linting.
Further, the obsolete dependency in npm mode on the npm package
`canvas` has been removed.

Enjoy,

Matthias Ehmann, Michael Gerhäuser, Carsten Miller, Andreas Walter, and Alfred Wassermann
