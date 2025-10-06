---
layout: page
title: Docs
subtitle: Dynamic Mathematics with JavaScript
---

## Minimal example

- Load JSXGraph from <https://jsdelivr.com>
- Optionally, include MathJax

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JSXGraph template</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <link href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js" type="text/javascript" charset="UTF-8"></script>

    <!-- The next line is optional: load MathJax -->
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script" async></script>
  </head>
  <body>

  <div id="jxgbox" class="jxgbox" style="width:500px; height:200px;"></div>

  <script>
    var board = JXG.JSXGraph.initBoard('jxgbox', {
            boundingbox: [-5, 2, 5, -2],
            axis:true
        });
    var fun = board.create('functiongraph', ['sin(x)']);
  </script>

  </body>
</html>
```

See it in action at <https://jsxgraph.org/wiki/index.php?title=Function_graph>.

## API reference and examples

* [API reference](/docs/index.html)
* [First steps with many examples](/wiki/index.php/Documentation)
* [All examples](/wiki/index.php/Category:Examples)
* JSXGraph constructions can be generated in various ways.
    * The straight-forward way is to construct directly with JavaScript. In our Wiki we describe [how to do it](//jsxgraph.uni-bayreuth.de/wiki/index.php/Documentation)
    * JSXGraph comes with it's own language [JessieCode](../docs_jessiecode/). You can interactively create JessieCode code with [sketchbin](https://bin.sketchometry.org)
    * [sketchometry](//sketchometry.org) is based on JSXGraph. sketchometry constructions can be exported to JessieCode.
    * [How to](//jsxgraph.org/wiki/index.php/Displaying_GEONExT_constructions) provide a <a href="//geonext.de" target="_blank">GEONExT</a> file (or string). 
    * [How to](//jsxgraph.org/wiki/index.php/Displaying_Intergeo_constructions)[<img  src="//geonext.uni-bayreuth.de/uploads/pics/Banner-Button_120x60_v2_0.png" alt="i2geo" />](http://i2geo.net) provide an <a href="//i2geo.net/" target="_blank">Intergeo</a> file.

All objects of JSXGraph use the namespace `JXG`. Beside `JXG` there are no global variables.

## Webinar: advanced JSXGraph programming

* Notes from the online workshop in fall 2020 and spring 2021
* For announcements of the next webinar sessions see [JSXGraph forum at Google groups](https://groups.google.com/forum/#!forum/jsxgraph)
* **Next webinar: October during the JSXGraph conference**

### Previous webinar sessions:

* Workshop at 1. JSXGraph conference October 2020: [PDF](/webinar/advanced.pdf), [Videos](https://jsxgraph.org/conf/program)
* Vol 1, November 12th, 2020: [PDF](/webinar/advanced1.pdf), 
    <a href="https://www.youtube.com/embed/s3sUJualJJ0" target="_blank">video workshop vol.1 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/s3sUJualJJ0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

* Vol 2, December 16th, 2020: [PDF](/webinar/advanced2.pdf),
<!--
[Zoom link](https://uni-bayreuth.zoom.us/j/92956928761?pwd=VmFaRTNhbUdmQ3g3dFp4amJQT0hPUT09)
-->
    <a href="https://www.youtube.com/embed/ZXEcomaIKmE" target="_blank">video workshop vol.2 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXEcomaIKmE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

* Vol 3, January 20th, 2021: [PDF](/webinar/advanced3.pdf),
    <a href="https://www.youtube.com/embed/rpQc_ZHcgWE" target="_blank">video workshop vol.3 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/rpQc_ZHcgWE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

* Vol 4, February 24th, 2021: [PDF](/webinar/advanced4.pdf),
    <a href="https://www.youtube.com/embed/WcmQbGEqvLA" target="_blank">video workshop vol.4 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/WcmQbGEqvLA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

* Vol 5, March 24th, 2021: [PDF](/webinar/advanced5.pdf),
    <a href="https://www.youtube.com/embed/dPg1Xow4ues" target="_blank">video workshop vol.5 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/dPg1Xow4ues" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

* Vol 6, May 5th, 2021: [PDF](/webinar/advanced6.pdf),
    <a href="https://www.youtube.com/embed/C08MvHLvoYM" target="_blank">video workshop vol.6 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/C08MvHLvoYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

* Vol 7, June 9th, 2021: [PDF](/webinar/advanced7.pdf),
    <a href="https://www.youtube.com/embed/762nj776TIg" target="_blank">video workshop vol.7 (youtube)</a>
    <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/762nj776TIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->

## 1st international JSXGraph conference

The 1st international JSXGraph conference was held online in October 2020. 

* [International sessions](https://jsxgraph.org/conf)
* [German sessions](https://jsxgraph.org/conf.de)

## 2nd international JSXGraph conference (2021)

October 5th - 7th, 2021, [conference home page](https://jsxgraph.org/conf2021)

## 3rd international JSXGraph conference (2022)

October 4th - 6th, 2022, [conference home page](https://jsxgraph.org/conf2022)

## 4th international JSXGraph conference (2023)

October 10th - 12th, 2023, [conference home page](https://jsxgraph.org/conf2023)

## Support

#### Coding help
* [stackoverflow.com](https://stackoverflow.com/search?tab=newest&q=jsxgraph) is the place where you get help with your JSXGraph code.
* [jsfiddle](https://jsfiddle.net/dr63zumf/1/) template for your JSXGraph question.
* [Github bug tracker](https://github.com/jsxgraph/jsxgraph/issues)

#### Discussion of development and future direction of JSXGraph
* The [JSXGraph forum at Google groups](https://groups.google.com/forum/#!forum/jsxgraph) is the place to discuss feature requests and the future of JSXGraph
