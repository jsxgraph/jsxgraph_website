---
layout: post
title: Release of 0.99.5
subtitle: Major new release
date: 2016-07-05T11:15:08+00:00
categories:
  - Releases
---
Version 0.99.5 of JSXGraph has just been released! This release contains mostly bug fixes. Most of them have been reported by careful users. The most important change is that now (hopefully) all types of devices are supported. Previously, there was a problem if the web page allowed scaling by the user, i.e. if the html file contained a line

    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    
Further, we prepared JSXGraph as a nodejs package. Now, we will try to get published as an official npm package.
Also, the [documentation](http://jsxgraph.uni-bayreuth.de/docs) has been improved considerably: more examples and less broken links.
    
For a full list of all changes see the [CHANGELOG](https://github.com/jsxgraph/jsxgraph/blob/master/CHANGELOG.md).

Enjoy, Alfred

