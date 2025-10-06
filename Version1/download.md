---
layout: page
title: Download
subtitle: Latest version v1.11.1
---

**JSXGraph** needs two files:

1. Link the file `jsxgraphcore.js` into your web pages. This file has been minified using the terser compressor. `jsxgraphcore.js` contains the complete source code of JSXGraph bundled in one file. All objects of JSXGraph use the namespace `JXG`. Beside `JXG` there are no global variables.
2. Include the css commands from `jsxgraph.css` into the web pages. It can be downloaded from <https://jsxgraph.org/distrib/jsxgraph.css> or from <https://github.com/jsxgraph/jsxgraph>.

### CDN

The easiest way to use JSXGraph is to link directly to the public installation available through a Content Distribution Network (CDN).
Put one of the following code snippets into the `<head>` block of your document:

```html
<script type="text/javascript" charset="UTF-8"
 src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
```

This uses always the latest version of JSXGraph.
To get a specific version, please specify e.g.:

```html
<script type="text/javascript" charset="UTF-8"
 src="https://cdn.jsdelivr.net/npm/jsxgraph@{{ site.version_number }}/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph@{{ site.version_number }}/distrib/jsxgraph.css" />
```

or

```html
<script type="text/javascript" charset="UTF-8"
 src="//cdnjs.cloudflare.com/ajax/libs/jsxgraph/{{ site.version_number }}/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/jsxgraph/{{ site.version_number }}/jsxgraph.css" />
```

### ES6 import

Importing JSXGraph as ES6 module is possible with the file `jsxgraphcore.mjs`:

```html
<script type="module">
import JXG from 'https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.mjs';
</script>
```


### JSXGraph site
Download the latest version {{ site.version_number }} from the JSXGraph home page: [js file](https://jsxgraph.org/distrib/jsxgraphcore.js),
[mjs file](https://jsxgraph.org/distrib/jsxgraphcore.mjs)


### Plug-ins

- [JSXGraph plug-in for Moodle](https://github.com/jsxgraph/moodle-jsxgraph-plugin)
- [JSXGraph MediaWiki extension](https://github.com/jsxgraph/jsxgraph){:target="_blank"}
- [JSXGraph plug-in for WordPress](https://wordpress.org/extend/plugins/jsxgraph){:target="_blank"}
- [JSXGraph plug-in for Drupal](https://drupal.org/project/jsxgraph){:target="_blank"}

### Source code

* The JSXGraph source code is hosted on [GitHub](https://github.com/jsxgraph/jsxgraph)
* [Bug tracker](https://github.com/jsxgraph/jsxgraph/issues)

### Nightly builds

The latest development version can always be downloaded/used from <https://jsxgraph.uni-bayreuth.de/~michael/jsxgraph-nightly/>.
Beware, there may be untested features (bugs)!

### Previous releases

[Here are links to older versions of JSXGraph.](https://jsxgraph.org/wp/previousreleases/)
