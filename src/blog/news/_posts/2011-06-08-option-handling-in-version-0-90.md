---
id: 552
title: Option handling in version 0.90
date: 2011-06-08T11:10:26+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=552
permalink: /2011/06/08/option-handling-in-version-0-90/
categories:
  - Releases
  - Uncategorized
tags:
  - Options
---
The upcoming version 0.90 is a major rewrite of the complete JSXGraph codebase. Since there are so many changes, we decided to reflect this leap forward already in the version numbering and jump directly from version 0.82 to version 0.90.

The main area of changes is the object JXG.Options. Starting with version 0.90 by changing this object (located in Options.js) it is possible to configure the complete default visual appearance of JSXGraph applications. If you want to override some of the default options but want to (or have to when you use the minified edition) keep the original JXG.Options you can do so by copying the changed options:

```javascript
JXG.Options = JXG.deepCopy(JXG.Options, {
    showNavigation: false,
    point: {
        face: 'x'
    }
}
```

Further, the setting of attributes with the board.create() method is much more powerful than before (and much faster). It is now possible to set attributes for compositions (elements built with several other elements) directly, e.g. use

```javascript
board.create('circumcircle', [p1, p2, p3], {
    strokeColor: 'red',
    point: {
        face: 'x',
        visible: true,
        name: null,
        withLabel: true
    }
});
```

to create a circumcircle and make the center visible, x-faced and labeled. See [Options.js](https://sourceforge.net/apps/trac/jsxgraph/browser/trunk/src/Options.js) for the sub attributes.

Unfortunately, for developer of JSXGraph applications this release cuts off some deprecated features.

* **Point styles:** The _style_-attribute for points has been removed. It is replaced by the combination of the _face_- and _size_-attribute.
* **Axes:** Axis ticks can cover the whole drawing area. This is the case, if majorHeight (or minorHeight, respectively) in JXG.Options.ticks is set to a negative value. In the new version this is the default. So, if you want to use the old ticks sizes, you have to set
  
```javascript
    JXG.Options.axis.ticks.majorHeight = 10;
```

 before calling JXG.JSXGraph.initBoard().

* **Accessing composite elements:** Until 0.82 composition elements usually were plain arrays and the subelements could be accessed using the `[]` operator. From JSXGraph 0.90 on there is one main element and several helper elements, e.g. a circumcircle _c_ is a circle. But to create this circle a midpoint is required which can now be accessed via _c.midpoint_. [See the docs](http://jsxgraph.uni-bayreuth.de/docs/) for subelements on compositions.
* If you ever accessed the fields of the _visProp_ object of an element, please note that the field names are all **lowercase** now. You should consider using _getProperty()_ instead of accessing visProp directly.