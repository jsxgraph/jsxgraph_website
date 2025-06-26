---
id: 383
title: Release of version 0.78
date: 2009-11-16T16:09:04+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=383
permalink: /2009/11/16/release-of-version-0-78/
categories:
  - Releases
---
The most notable change is that all dependencies of JSXGraph on third-party libraries like jquery or prototype have been removed. JSXGraph is now a stand-alone library. If delivered compressed, its size is only 81 kByte. Now, two possible types of texts are possible: &#8216;html&#8217; which uses an HTML-div element, and &#8216;internal&#8217; which uses the text element of SVG or VML, respectively. The consequence is that on SVG capable browsers it is possible to export a static SVG image from the JSXGraph construction. This can be done for instance by calling &#8220;XMLSerializer().serializeToString(board.renderer.svgRoot);&#8221;
  
The use of ASCIIMathML in texts and labels of type &#8216;html&#8217; has been enabled. Further, the options system has been overhauled. Now, before the initialization of a JSXGraph board options may be set via

    
    JXG.Options.text.useASCIIMathML = true
    

for examples, see <http://jsxgraph.uni-bayreuth.de/wiki/index.php/Options>. JSXGraph is now fully functional on the Internet Explorer 8, even in standard mode. Before, on IE8 JSXGraph had to fall back in compatibility mode. JSXGraph also runs without problems on IE6 and IE7. Gradients in fill colors are possible. As always, bugs have been removed and many new examples have been added to the wiki, especially the [section on charts](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Category:Charts) has been improved.