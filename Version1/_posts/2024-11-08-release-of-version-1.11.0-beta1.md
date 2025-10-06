---
layout: post
title: Release of 1.11.0-beta1
subtitle: Beta release
categories:
  - Releases
---

Dear friends of JSXGraph,

today we released JSXGraph v1.11.0-beta1 on our web server and on npm (and therefore on cdnjs, too). At this point we are still at an early development stage of version 1.11. However, this release contains already now three major new developments for which we hope to get your feedback:

- __Accessibility:__ When used with the SVG rendering (i.e. the default), it is now possible to supply ARIA attributes for all JSXGraph elements.
See the [API docs](https://jsxgraph.org/beta/docs/symbols/JXG.GeometryElement.html#aria) for more information. In fact, one can supply all attributes starting with an `aria-`.
Here is an example:

```.javascript
var p = board.create('point', [2, 3], {
    name: 'B',
    size: (self) => Math.abs(self.X()) * 5,
    aria: {
        enabled: true,
        label: (self) => `${self.name} is at ${self.X().toFixed(1)} ${self.Y().toFixed(1)}`,
        live: 'polite'
    }
});
```

See it live at <https://jsfiddle.net/t21mdaqe/1/>.

- __CSS classes for all elements:__ When used with the SVG rendering (i.e. the default), the attributes `cssClass` and `highlightCssClass` are now available for all elements. See the [API docs](https://jsxgraph.org/beta/docs/symbols/JXG.GeometryElement.html#cssClass) for more information. This not only useful to apply CSS properties to JSXGraph elements, it also opens the door to the wonderful world of SVG filters and patterns. At <https://jsfiddle.net/pfskmrh2/1/> is an example which shows the possibilities. 

As of November 2024 this feature is supported by Chrome, Edge and Firefox. Depending on the filters, we could observe massive performance problems on Safari browsers.

- __Attribute functions are executed with the JSXGraph object as parameter:__ If an attribute of a JSXGraph element is determined by a function, the function receives that object as parameter. This feature can be compared with JavaScript event listeners which always receive an object `evt` as parameter. This feature was on our wish list for many years! Here is a simple example:

```.javascript
board.create('point', [0, 0], {
  size: (self) => 2 * Math.abs(self.X())
});
```

That is, the size of the point depends on the horizontal position of the point. For some elements some care is necessary, because a method may not yet exist when the attribute function is called the first time. In such a case, a default value has to be returned like in this example:

```.javascript
var c = board.create('slider', [[1, 4.5], [4, 4.5], [1, 1, 5]], {
    size: (self) => (self.Value !== undefined) ? 3 + 2 * self.Value() : 3
});
```

See it live at <https://jsfiddle.net/416kxcqu/>.

To make these these features possible, the code had to be changed at more than 500 positions, so we are very interested to get bug reports from you.

__Availability of the beta version:__

- jsxgraph.org: <https://jsxgraph.org/beta/jsxgraphcore.js>
- npmjs.org: `npm i jsxgraph@1.11.0-beta1`
- cdnjs: <https://cdn.jsdelivr.net/npm/jsxgraph@1.11.0-beta1/distrib/jsxgraphcore.js>
- source code: Checkout branch `develop` or tag `v1.11.0beta1`

 __24 hours of JSXGraph__

Finally, we want to announce again the first JSXGraph *face-to-face event* __24 hours of JSXGraph__ on February 26./27, 2025 at the University of Bayreuth, Germany. The meeting homepage is <https://jsxgraph.org/24hours2025/>. The event is free of charge and everybody is invited to come and show, learn, do, and discuss JSXGraph related topics.

Enjoy,

Alfred Wassermann



