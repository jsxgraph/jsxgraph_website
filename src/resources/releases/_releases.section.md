To work correctly, JSXGraph requires two files:

- `jsxgraphcore.js` contains the complete source code of JSXGraph bundled in one file. All objects of JSXGraph use the namespace JXG. Beside JXG there are no global variables.
- Include the css commands from `jsxgraph.css` into the web pages.

For ES6 import use the file `jsxgraphcore.mjs` instead of `jsxgraphcore.js`.



# Server

JSXGraph can be downloaded at least  from:
- [jsDelivr](https://jsdelivr.com) 
- [cdnjs](https://cdnjs.cloudflare.com/)
- [npm/nodejs](https://www.npmjs.com) 
- [JSXGraph Server](https://jsxgraph.org)

The links always have a specific structure. For permanent hosting of the
library `jsxgraphcore.js` we highly recommend either local hosting or CDN
hosting at jsDelivr or cdnjs.

## Latest Version

`https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js`

`https://jsxgraph.org/distrib/jsxgraphcore.js`

## Specific Version 

To use a specific version, include one of the following links with the corresponding version number:

#### jsDelivr

`https://cdn.jsdelivr.net/npm/jsxgraph@`***`<version number>`***`/distrib/jsxgraph.css`

`https://cdn.jsdelivr.net/npm/jsxgraph@`***`<version number>`***`/distrib/jsxgraphcore.js`

`https://cdn.jsdelivr.net/npm/jsxgraph@`***`<version number>`***`/distrib/jsxgraphcore.mjs`


#### cdnjs

`https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/`***`<version number>`***`/jsxgraph.css`

`https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/`***`<version number>`***`/jsxgraphcore.js`

`https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/`***`<version number>`***`/jsxgraphcore.mjs`

#### University of Bayreuth 

`https://jsxgraph.uni-bayreuth.de/distrib/jsxgraph.css`  

`https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-`***`<version number>`***`.js`  

`https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-`***`<version number>`***`.mjs`  

## Example

For example, include `jsxgraphcore.js` version 1.9.2 using one of the following links:  

`https://cdn.jsdelivr.net/npm/jsxgraph@1.9.2/distrib/jsxgraphcore.js`

`https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js`

`https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.9.2.js`

# List of Releases

[//]: # (Header row of table will not be shown)

| Version       | jsDelivr                                                                         | cdnjs                                                                           | JSXGraph server                                                                    |
|---------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| ***v1.11.0*** | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.11.0/distrib/jsxgraphcore.js) | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.11.0/jsxgraphcore.js) | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.11.0.js) |
| ***v1.10.1*** | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.10.1/distrib/jsxgraphcore.js) | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.10.1/jsxgraphcore.js) | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.10.1.js) |
| ***v1.10.0*** | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.10.0/distrib/jsxgraphcore.js) | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.10.0/jsxgraphcore.js) | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.10.0.js) |
| ***v1.9.2***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.9.2/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.9.2.js)  |
| ***v1.9.1***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.9.1/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.1/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.9.1.js)  |
| ***v1.9.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.9.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.9.0.js)  |
| ***v1.8.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.8.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.8.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.8.0.js)  |
| ***v1.7.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.7.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.7.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.7.0.js)  |
| ***v1.6.2***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.6.2/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.6.2/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.6.2.js)  |
| ***v1.6.1***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.6.1/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.6.1/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.6.1.js)  |
| ***v1.6.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.6.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.6.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.6.0.js)  |
| ***v1.5.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.5.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.5.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.5.0.js)  |
| ***v1.4.6***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.6/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.6/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.6.js)  |
| ***v1.4.5***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.5/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.5/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.5.js)  |
| ***v1.4.4***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.4/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.4/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.4.js)  |
| ***v1.4.3***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.3/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.3/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.3.js)  |
| ***v1.4.2***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.2/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.2/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.2.js)  |
| ***v1.4.1***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.1/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.1/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.1.js)  |
| ***v1.4.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.4.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.4.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.4.0.js)  |
| ***v1.3.2***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.3.2/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.3.2/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.3.2.js)  |
| ***v1.3.1***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.3.1/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.3.1/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.3.1.js)  |
| ***v1.3.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.3.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.3.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.3.0.js)  |
| ***v1.2.3***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.2.3/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.2.3/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.2.3.js)  |
| ***v1.2.2***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.2.2/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.2.2/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.2.2.js)  |
| ***v1.2.1***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.2.1/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.2.1/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.2.1.js)  |
| ***v1.2.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.2.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.2.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.2.0.js)  |
| ***v1.1.0***  | [jsDelivr](https://cdn.jsdelivr.net/npm/jsxgraph@1.1.0/distrib/jsxgraphcore.js)  | [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.1.0/jsxgraphcore.js)  | [JSXGraph server](https://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.1.0.js)  |
| ***v1.0.0***  | —                                                                                | —                                                                               | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-1.00.0.js)  |
| ***v0.99.7*** | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.7/jsxgraphcore.js)  | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.99.7.js)  |
| ***v0.99.5*** | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.5/jsxgraphcore.js)  | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.99.5.js)  |
| ***v0.99.4*** | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.4/jsxgraphcore.js)  | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.99.4.js)  |
| ***v0.99.3*** | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.3/jsxgraphcore.js)  | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.99.3.js)  |
| ***v0.99.2*** | —                                                                                | —                                                                               | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.99.2.js)  |
| ***v0.99.1*** | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.99.1/jsxgraphcore.js)  | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.99.1.js)  |
| ***v0.98***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.98/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.98.js)    |
| ***v0.97***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.97/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.97.js)    |
| ***v0.96***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.96/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.96.js)    |
| ***v0.95***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.95/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.95.js)    |
| ***v0.94***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.94/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.94.js)    |
| ***v0.93***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.93/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.93.js)    |
| ***v0.92***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.92/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.92.js)    |
| ***v0.91***   | —                                                                                | [cdnjs](http://cdnjs.cloudflare.com/ajax/libs/jsxgraph/0.91/jsxgraphcore.js)    | [JSXGraph server](http://jsxgraph.uni-bayreuth.de/distrib/jsxgraphcore-0.91.js)    |

<button type="button" colorclass="outline-primary" class="w-fix-lg mx-auto" id="releases-all">Show all releases</button>
<style>
#section-releases table thead,
#section-releases table tbody td:before {
    display: none;
}

#section-releases table td {
    white-space: nowrap;
}
</style>

<script type="text/javascript">
(function() {
    $('#section-releases table tbody tr').each(function(i, that) {
        if(i > 5)
            $(that).addClass('off');
    });

    $('#releases-all').on('click', function () {
        $('#section-releases table tbody tr').removeClass('off');
        $(this).addClass('off');
    });
})();
</script>

# Debian Support

JSXGraph (incl. source code) is also available as a Debian `deb`-package:

[JSXGraph at Debian](https://packages.debian.org/search?keywords=jsxgraph)
