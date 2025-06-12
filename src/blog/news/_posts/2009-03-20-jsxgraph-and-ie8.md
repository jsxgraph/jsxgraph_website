---
id: 158
title: JSXGraph and IE8
date: 2009-03-20T15:52:17+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=158
permalink: /2009/03/20/jsxgraph-and-ie8/
categories:
  - Uncategorized
tags:
  - IE8
  - strict mode
  - VML
---
Yesterday, Internet Explorer 8 was released. Unfortunately, displaying JSXGraph with IE 8 fails, if IE 8 runs in strict mode _and_ the HTML file starts with DOCTYPE. Meanwhile, the problem has been localized: Up to IE7 the VML rendering engine is initialized with the commands

    
    document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
    document.createStyleSheet().addRule("v\\:*", "behavior: url(#default#VML);");
    

In IE8, the wildcard

    
    ...addRule("v\\:*", ...
    

is not longer allowed. <a href="http://jsxgraph.uni-bayreuth.de/~alfred/jsxgraph/branches/0.80/examples/wiki_ie8.html" target="_blank">Here is an example</a>. There are some solutions proposed by several groups, among them people from Microsoft.

- Using

    
    document.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML");
    

does not throw an error, but the dynamically constructed elements are not displayed correctly.

- The other tip was to use

    
    if(!document.documentMode || document.documentMode<8) {
      document.createStyleSheet().addRule("v\\:*", "behavior: url(#default#VML);");
    }
    if(document.documentMode && document.documentMode>=8) {
      document.writeln('');
    }
    

which also did not help.

The quick and dirty workaround for MediaWiki or WordPress is to include

    
    <meta http-equiv="X-UA-Compatible" content="IE=7" />
    

in the template files. This forces IE8 to run in compatibility mode. <a href="http://maps.google.com" target="_blank">Google maps</a> is using it too (as of March 30, 2009).

So, did Microsoft stop to support dynamically generated VML?
  
**UPDATE: No, see below!**
