---
id: 574
title: Release of version 0.90
date: 2011-06-08T11:11:24+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=574
permalink: /2011/06/08/release-of-version-0-90/
categories:
  - Releases
  - Uncategorized
tags:
  - Canvas
  - Image
  - Options
  - texts
---
The jump of the version numbering from 0.90 to 0.82 is justified by a major rewrite of the JSXGraph code base. After gaining experience through the last couple of months we know where to go and we tried to make the source code ready for future developments. In this release, practically all source files have been refactored. The result is a smaller code base by more than 10 per cent and much improved and more complete documentation. One other benefit is the new, quite flexible handling of options. Now, a developer has total control over the visual appearance of JSXGraph constructions. One possibility to do this is to adapt the source file &#8220;Options.js&#8221; and load it after &#8220;jsxgraphcore.js&#8221;.
  
Beside the usual bug fixes, this release contains feature requests by users and a significantly improved loading time of constructions.
  
The most notable new features are Board.zoomElements(elements) which sets the bounding box such that the all elements of the supplied elements list become visible. The actual visible area can be accessed by the method Board.getBoundingBox().
  
The preferred graphic engine of JSXGraph is still SVG, but VML is 100% supported and with this release also the HTML5 canvas element ist supported to a very high degree (one feature that is not supported is dashed lines). This means also the handling of texts and images is streamlined for all three graphics engines, [see this post for more information](http://jsxgraph.uni-bayreuth.de/wp/2011/01/02/jsxgraph-handl…ages-and-texts/). The nice consequence is, transformations like rotations and reflections now work for images and texts inside JSXGraph constructions, too.
  
There are some things power users should pay attention too: The setting of properties for composite objects like perpendicular lines has been changed slightly. Please, have a look at [the new doc files](http://jsxgraph.uni-bayreuth.de/docs/) and at the file Options.js. The other thing to notice is that internally all property names are lowercase letters. So, if you ever accessed the visProp-object directly, from version 0.90 on all key names are in lowercase. In case, you want to see a list of groups, now it is available in Board.groups.
  
Further, some features which have been declared deprecated since several releases have been removed now. The most notable example is the &#8220;style&#8221; property for points which has been superseded by the combination of &#8220;face&#8221; and &#8220;size&#8221; properties.
  
Another change in the API is the handling of composite elements like a perpendicular line. Composite elements are elements which generate on creation more than one elements. When calling the Board.create() method for these elements the attributes objects and the return objects have changed slightly. See the API docs and the file Options.js for a detailed explanation.

Happy JSXGraphing,
  
Alfred and Michael