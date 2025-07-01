---
id: 520
title: 'JSXGraph &#8211; handling images and texts'
date: 2011-01-02T13:52:23+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=520
permalink: /2011/01/02/jsxgraph-handling-images-and-texts/
categories:
  - Uncategorized
tags:
  - Image
  - text
  - transformation
---
Dear friends of JSXGraph,
  
the upcoming release <del datetime="2011-06-08T09:20:09+00:00">0.83</del> 0.90 of JSXGraph contains the long awaited better support of images. Finally!
  
An image can be included in JSXGraph by specifying an URL of an image, its lower left corner and its height and width. The coordinates and lengths are given in user coordinates, see the [static image example](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Images#Static_image) in our wiki. With version 0.83 all these entries can be given by functions, see the example [Dynamic Image I](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Images#Dynamic_image_I) in our wiki.
  
But not only the position and the dimensions of the image can be given by functions, also the URL and its opacity value accept functions as defining parameter, as demonstrated in [Dynamic Image II](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Images#Dynamic_image_II) in the wiki.

But we even can go further. Since one of the first releases, JSXGraph supports projective transformations applied to points. Starting with version 0.83, transformations may also be applied to images and even texts! Albeit, at the moment only affine transformations, i.e. translation, rotation, reflection, scaling, skew, are supported on images texts.
  
This enables countless new possibilities. There are two examples in our wiki:

  * [Images_and_Transformations](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Images_and_Transformations) Drag, rotate and scale an image with the help of two points. 
  * [Texts_and_Transformations](http://jsxgraph.uni-bayreuth.de/wiki/index.php/Texts_and_Transformations) The first example is a simple rotation of a text by 30°. The second example allows to drag, rotate and scale the text by dragging two points. It is nearly identical to the image example. 

At the moment, there are still restrictions on the use of transformations of texts in JSXGraph:

  * On SVG browsers (I tested Firefox and Chrome) we have to use SVG texts instead of HTML texts. Therefore, we have to set
  
    `JXG.Options.text.defaultDisplay = 'internal';` 
  * On IE, JSXGraph has to determine the size of the VML textbox containing the text string. I do not know how to do this. At the moment the dimensions of the textbox are estimated from the length of the text string and the font size. I would be grateful for hints how to get the exact width and height of the textbox. </ul> 

Happy JSXGraphing,
  
Alfred
