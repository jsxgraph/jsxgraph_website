---
id: 726
title: CDN updated to v0.94
date: 2012-05-14T09:39:35+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=726
permalink: /2012/05/14/cdn-updated-to-v0-94/
categories:
  - cdnjs
  - Releases
  - Uncategorized
---
After a some delay, jsxgraphcore.js version 0.94 is now available at the CDN: 

* <http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.94/jsxgraphcore.js>

Further, the reader software for other file formats is available there, too:
    
* <http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.94/GeonextReader.min.js>
* <http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.94/IntergeoReader.min.js>

We tried &#8211; without success &#8211; to persuade the people behind cdnjs to let us introduce a &#8220;latest&#8221;-directory. Thanks to Marc Grober for permanentely insisting on this feature. For some reasons cdnjs does not want this. Of course, we have to accept their decision. JSXGraph still appreciates the benefits of cdnjs, it is a great project.
  
As a workaround we have a directory &#8220;`latest`&#8221; on our web server which redirects to cdnjs. That means, one can use the following links
            
* <http://jsxgraph.uni-bayreuth.de/latest/jsxgraphcore.js> 
* <http://jsxgraph.uni-bayreuth.de/latest/GeonextReader.min.js>
* <http://jsxgraph.uni-bayreuth.de/latest/IntergeoReader.min.js>
                        
For the CSS file, we recommend to include it in your own CSS file. It contains only a few lines of code, which are not worth opening a separate http connection.
  
Best wishes, Alfred