---
id: 658
title: JSXGraph is in the cloud!
date: 2011-09-07T15:51:51+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=658
permalink: /2011/09/07/jsxgraph-is-in-the-cloud/
categories:
  - Uncategorized
tags:
  - CDN
---
Now it is official: JSXGraph is hosted by the [CDN](http://de.wikipedia.org/wiki/Content_Distribution_Network) (content delivery network) [cdnjs](http://www.cdnjs.com/). A CDN is a world wide network of servers. If your web browser requests a file from this network, that file will be delivered to your computer from the nearest server of this network. This should speed up web pages containing JSXGraph considerably. If you are using JSXGraph in your web project we encourage you to include JSXGraph by following these two simple steps:

Include JSXGraph in your web pages always with this URL: [Now it is official: JSXGraph is hosted by the [CDN](http://de.wikipedia.org/wiki/Content_Distribution_Network) (content delivery network) [cdnjs](http://www.cdnjs.com/). A CDN is a world wide network of servers. If your web browser requests a file from this network, that file will be delivered to your computer from the nearest server of this network. This should speed up web pages containing JSXGraph considerably. If you are using JSXGraph in your web project we encourage you to include JSXGraph by following these two simple steps:

  1. Include JSXGraph in your web pages always with this URL:](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.91/jsxgraphcore.js) 
  2. Include the content of <http://jsxgraph.uni-bayreuth.de/distrib/jsxgraph.css> directly in your web page inside a <style type=&#8221;text/css&#8221;>&#8230;</style> tag instead of using a <link> tag. Alternatively, you can include the content of <http://jsxgraph.uni-bayreuth.de/distrib/jsxgraph.css> in one of your own css files. 
That&#8217;s it!
    
Of course, you still can include the two files jsxgraphcore.js and jsxgraph.css by using the old address <http://jsxgraph.uni-bayreuth.de/distrib/>. <del datetime="2011-09-09T08:47:26+00:00">In the case that <a href="http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.91/jsxgraphcore.js">http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.91/jsxgraphcore.js</a> is too long for you, Marc Grober has generated a shortened version: instead of http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.91/jsxgraphcore.js you can use <a href="http://bit.ly/jsxgraph">http://bit.ly/jsxgraph</a>.</del> 
    
Happy JSXGraphing,
  
Alfred