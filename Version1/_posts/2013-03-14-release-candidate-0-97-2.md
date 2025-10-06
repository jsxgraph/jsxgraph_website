---
id: 822
title: Release candidate 0.97
date: 2013-03-14T12:35:37+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=822
permalink: /2013/03/14/release-candidate-0-97-2/
categories:
  - Uncategorized
---
Version 0.97 is a complete overhaul of JSXGraph code base. It brings a lot of changes which in some cases might break your code. So, even if this version is already well tested internally, we decided to start with a release candidate. Please, test it carefully against your code base and give us feedback.

You can test this the release candidate of version 0.97 by including

> <http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.97.min.js>

The most radical changes which might affect applications are:

* Implementation of the AMD pattern to actually enforce the module pattern that only existed theoretically before. Please read [this blog post](http://jsxgraph.uni-bayreuth.de/wp/2013/03/14/jsxgraph-and-amd/) for more information about these changes.
* Removal of some wrapper functions in JXG.Board. [This post](http://jsxgraph.uni-bayreuth.de/wp/2013/03/14/code-cleanup-in-0-97/) has more information what methods were removed and where you can find the unwrapped versions.
* Several board attributes in `JXG.Options` were moved to a subspace called `board` including
`showCopyright, showNavigation, takeSizeFromFile, renderer, takeFirst, animationDelay, zoom, pan`

To deactivate the navigation buttons you now have to set

```javascript
    JXG.Options.board.showNavigation = false;
```

If you created your own JSXGraph theme(s) using `JXG.deepCopy()` you have to replace `deepCopy()` with `merge()`:

```javascript    
    // 0.96 and before 
        JXG.Options = JXG.deepCopy(JXG.Options, {...}); 
    // 0.97+ 
        JXG.Options = JXG.merge(JXG.Options, {...});
```

* Many bugfixes and new features (among them: <a href="http://jsxgraph.uni-bayreuth.de/wiki/index.php/Tape_measure" target="_blank"><span style="color: #888888;">tape measure</span></a>, <a href="http://jsxgraph.uni-bayreuth.de/docs/symbols/Hash.html" target="_blank">line hashes</a>). A complete list of changes can be found in section 0.97 of our [CHANGELOG.md](https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md#097).
* Several CSS transformations can now be applied to the JSXGraph board without breaking the event handling. This ensure better compatiobility with EaselJS.
* Experimental support for the new Pointer API used in IE10.
* Rewrite of our make scripts. How to build JSXGraph and JSXCompressor is documented in the [README.md](https://github.com/jsxgraph/jsxgraph/blob/master/README.md).
