---
id: 816
title: JSXGraph and AMD
date: 2013-03-14T12:10:49+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=816
permalink: /2013/03/14/jsxgraph-and-amd/
categories:
  - Howto
  - Releases
tags:
  - AMD
  - require.js
---
Version 0.97 introduces module definitions as defined by the [AMD API](https://github.com/amdjs/amdjs-api/wiki/AMD). This only enforces the module and namespace pattern we were using in JSXGraph for years.

## Do I have to change my code? {#do-i-have-to-change-my-code}

In most cases: No. We made these changes with backwards compatibility in mind. Just load your copy of `jsxgraphcore.js` or &#8211; if you want to debug your construction or patch JSXGraph &#8211; `loadjsxgraph.js`. They will behave like before and load all modules synchronously.

The (hopefully) only thing that changes is the definition of a theme or when you change/patch internal structures of JSXGraph. If you created your own theme you problably merge our `JXG.Options` object with your changes using `JXG.deepCopy()`:

```javascript
    JXG.Options = JXG.deepCopy(JXG.Options, {...});
```

From 0.97 on you&#8217;ll have to use `JXG.merge()`:

```javascript
    JXG.Options = JXG.merge(JXG.Options, {...});
```

The difference between these methods is that `deepCopy()` merges the contents of the second parameter into _a copy_ of the first parameter. `merge()` merge the contents of the second parameter directly into the first parameter and returns the reference to the first parameter. So,

```javascript
    JXG.merge(JXG.Options, {...});
```

will have the same effect as the other `merge()` example above.

The problem is, the `base/board` module depends on the `options` module that returns a reference to `JXG.Options`. That means that the board module holds a reference to our original options object even if you substitute it from outside:

```javascript
    JXG.Options = {};
```

JSXGraph will still work and use our default options. So, if you manipulate the internal structures from the outside, make sure you don&#8217;t change the references.

## What is it good for? {#what-is-it-good-for}

Now we have a strict definition of a module and a module&#8217;s dependencies. Using an AMD loader like [require.js](http://requirejs.org/) enables us to resolve all dependencies automatically.

## How can I use it? {#how-can-i-use-it}

You&#8217;ll need [require.js](http://requirejs.org/) (should work with any another amd loader, too):

```html
    <script type="text/javascript" src="require.js"></script>
```

Configure _requirejs_, define dependencies and create your construction:

```javascript
    require.config({ baseUrl: "path/to/JSXGraph/src/" }); 
    require(['jsxgraph', 'base/line', 'base/curve'], 
    function (JSXGraph, Line, Plot) { 
        var board = JSXGraph.initBoard('box', {...}), 
            p = board.create('plot', [Math.sin]); 
    });
```