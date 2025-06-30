---
id: 762
title: 'Howto: Export JSXGraph constructions'
date: 2012-11-02T12:35:22+00:00
author: michael
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=762
permalink: /2012/11/02/howto-export-jsxgraph-constructions/
categories:
  - Howto
tags:
  - Canvas
  - export
  - howto
  - jsxgraph
  - png
  - svg
---
You created a wonderful mathlet and now you want to include it into a static environment like a pdf document. To do so you have to export the construction into a format that can be processed by e.g. your word processor. Based on the rendering techniques used in JSXGraph to display the graphics you have the choice between SVG and PNG. In this post we will describe several methods how you can extract a JSXGraph construction into either a _SVG_ or _PNG_ encoded static image.

Regardless of the export format the results always show almost every element present on the board. One exception are text elements. This is because JSXGraph is using HTML text elements to display all kinds of texts like element labels and text elements. But HTML texts won&#8217;t show up in the exported image (except the screenshot method) so we have to set the text display to internal before we initialize the board with `JXG.JSXGraph.initBoard()`:

```javascript
JXG.Options.text.display = 'internal';
```

But texts with the display property set `'internal'` can&#8217;t process HTML entities and tags.

## Screenshot (quick&#8217;n'dirty)

Make a screenshot and crop the resulting image if necessary. The advantage of this approach is that you do not lose the text elements if the text display type is set to &#8216;html&#8217;. There are plenty of instructions about how to make a screenshot for your favorite operating system so we won&#8217;t cover it here as it is not in the scope of this article.

## PNG

One of the rendering techniques JSXGraph uses is the canvas element. This element allows the user to save the current display as a png file. See [this table](http://caniuse.com/canvas) to make sure your browser supports the canvas element. To enforce the canvas renderer we set 

```javascript
JXG.Options.renderer = 'canvas';
```

before initializing the board with `JXG.JSXGraph.initBoard()`. To save the construction as a PNG file right click on the board and choose &#8220;Save image as&#8221;. To access the png data from JavaScript use the `toDataURL()` method of the canvas element:

```javascript
var board = JXG.JSXGraph.initBoard(...);
...
board.renderer.canvasRoot.toDataURL();
```

The result is a [Base64](http://en.wikipedia.org/wiki/Base64) encoded PNG file with a [Data URI scheme](http://en.wikipedia.org/wiki/Data%20URI%20scheme) prefix.

This method also works with _node.js_ if the [canvas package](https://npmjs.org/package/canvas) is installed. To store the image directly into a file you can use `createPNGSTream()`

```javascript
var fs = require('fs'),
    out = fs.createWriteStream(__dirname + '/mathlet.png'),
    stream = board.renderer.canvasRoot.createPNGStream();
    
stream.on('data', function(chunk){
  out.write(chunk);
});
```

## SVG

To export a JSXGraph mathlet to SVG you need to make sure that the renderer used is in fact the SVG renderer (which is the default renderer). You can do this by looking at

```javascript
board.renderer.type
```

which should equal `'svg'`, or by enforcing the SVG renderer by setting `JXG.Options.renderer` to `'svg'`. Check [this table](http://caniuse.com/svg) to see if your browser supports SVG.

To export the mathlet to SVG we are going to use the XMLSerializer:

```javascript
var svg = new XMLSerializer().serializeToString(board.renderer.svgRoot);
```

This will get you the whole SVG tree you can save in a .svg file.

## PNG from SVG rendered mathlet

If we set the `xmlns` attribute of the SVG root element

```javascript
board.renderer.svgRoot.setAttribute("xmlns", "http://www.w3.org/2000/svg");
```

and export it to an SVG string using the method described above, we can copy the mathlet onto a canvas and export it to PNG:

```javascript
var timg = new Image(600, 450), 
    ctx = canvas.getContext('2d');
    
timg.onload = function () {
    pos = board.getMousePosition(e);
    ctx.clearRect(0, 0, 600, 450);
    ctx.drawImage(timg, 0, 0);
};
timg.src = 'data:image/svg+xml,' + svg;

var png = canvas.toDataURL();
```
