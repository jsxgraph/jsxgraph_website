---
id: 228
title: Release of version 0.73
date: 2009-06-29T10:42:43+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=228
permalink: /2009/06/29/release-of-version-073/
categories:
  - Releases
tags:
  - bounding box
  - locii
---
The release 0.73 of the JavaScript plotting and Geometry library JSXGraph contains bug fixes and some speed improvements. There are also **major feature enhancements**:

* _Runge-Kutta method_ to solve ordinary differential equations numerically, see this [example](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Predator-Prey_equations). 
* _Tangents_ and _normals_ are now also possible for data plots and turtle graphics. 
* Introduced the _HSV color scheme_ (Hue, Saturation and Value). It can be used with JXG.hsv2rgb(h,s,v). h is a value between 0 and 360, s, v are values between 0 and 1. 
* All elements may have a label now. Only point labels are shown by default. All other elements need the attribute withLabel:true. 
* _Integer sliders_ are possible now (and other step widths too): The attribute snapWidth:val has to be supplied for sliders. snapWidth:1 are integer sliders, but val can be an arbitrary numerical value. See this [example](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Power_series_for_the_exponential_function). 
* Setting the visible area of the board can now be done by supplying a _bounding box_: boundingbox:[-2,3,10,-4] will set the units and the origin such that the top left corner of the drawing panel corresponds to the point (-2,3) and the lower right corner to the point (10,-4). If not otherwise specified the units in horizontal and vertical directions may be different. This is acceptable for data plots and function graphs, but not for Geometry, because circles may be displayed as ellipses. To avoid this, the attribute &#8220;keepaspectratio:true&#8221; has to be supplied. [Here is an example](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Bounding_box). 
* The bounding box can be changed after intialization: board.setBoundingBox([x1,y,1,x2,y2], true) with the optional parameter keepaspectratio:true/false 
* Exact (symbolic) of computation locii using a server based _Groebner basis algorithm_. 
                                
**Minor changes and improvements**:
                                
* Change of the API: slider.X() is no longer correct, use slider.Value() instead. 
* The board has two optional attribute: _showCopyright_ and _showNavigation_ (both are boolean) 
* Highlighting of curves coming from data plots and turtle graphics now working
