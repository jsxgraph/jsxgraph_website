---
id: 845
title: New moodle plugin
date: 2013-08-13T10:04:58+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=845
permalink: /2013/08/13/new-moodle-plugin/
categories:
  - Uncategorized
---
Finally, the moodle plugin for JSXGraph has been updated to run on moodle 2+. It is available at <a href="http://jsxgraph.uni-bayreuth.de/wp/download/tools/" target="_blank">http://jsxgraph.uni-bayreuth.de/wp/download/tools/</a>. To install, you have to unzip the downloaded file in the subdirectory &#8220;filter&#8221; of your moodle installation and open the admin page of moodle.

Here is a minimal example: Open a page resource in moodle and use the HTML view in the editor to type the following code.

**Example 1**
 
```html
<jsxgraph>
  (function(){ 
      var brd = JXG.JSXGraph.initBoard('box0', {boundingbox:[-5,5,5,-5], axis:true});
      var p = brd.create('point', [1,2]);
  })();
</jsxgraph>
```

**Example 2**

```html
<jsxgraph width="600" height="400" box="mybox">
  (function(){ 
      var brd = JXG.JSXGraph.initBoard('mybox', {boundingbox:[-5,5,5,-5], axis:true});
      var p = brd.create('point', [1,2]);
  })();
</jsxgraph>
```