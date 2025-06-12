---
id: 346
title: 'JSXCompressor &#8211; zlib compressed JavaScript code'
date: 2009-09-29T10:58:38+00:00
author: alfred
layout: post
guid: http://jsxgraph.uni-bayreuth.de/wp/?p=346
permalink: /2009/09/29/jsxcompressor-zlib-compressed-javascript-code/
categories:
  - JSXCompressor
tags:
  - gunzip
  - JavaScript compressor
  - JavaScript unzip
  - unzip
---
The open source library _JSXGraph_ (http://jsxgraph.org) contains utilities to read files which
  
have been compressed by the ZLIB (http://zlib.org) library. That means, JSXGraph has a pure
  
JavaScript implementation of deflate, unzip and base64_decode. This can be used for delivering compressed JavaScript inside of an HTML file. Of course, with todays browsers it depends on the transmission bandwidth if this is worthwile. If the web server does not support compression of data, then this tool may be an option.

One possibility to compress the JavaScript source on server side is to use PHP. The code below writes the content of a JavaScript file as a compressed, base64 encoded string on-the-fly into the HTML. Then on client side this string can be accessed via the JavaScript variable _jsxcompressed_.

```php
<?php
function jxgcompress($filename) 
{   
    if (file_exists($filename)) {
        $base64 = base64_encode(gzcompress(rawurlencode(file_get_contents($filename)),9));
        echo "var jxgcompressed = " . $base64 . ";\n";
    } else {
        throw new Exception("$filename not found");
    }
}
?>

<?php 
    jxgcompress("./helloworld.js");
?>   
```

To uncompress and run this code on client side, the following code has to be included in the HTML code:

```html
<script src="./jsxcompressor.js" type="text/javascript"></script>
<script type="text/javascript">
    eval(JXG.decompress(jxgcompressed));
</script>
```

Thats all! The compression rate should be fairly good, since the compression algorithm is essentially gzip. There is some additional overhead since the compressed output has additionally to be base64 encoded. 

Of course, this effort is useless, if the web server delivers the content already compressed with gzip.

The zip file jsxcompressor.zip contains two examples: testhelloworld.php and testjsxgraph.php. The jsxcompressor code is open source and can be [downloaded here](/distrib/jsxcompressor.zip). The source code of the minified JavaScript file jsxcompressor.js consists of the file Util.js from the JSXGraph project, prepended by the string

```javascript
JXG = {};
JXG.decompress = function(str) {
    return unescape( 
                (new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(str))).unzip()[0][0]
             );
};
```

The source code of the JSXGraph library can be downloaded from <a href="http://sourceforge.net/projects/jsxgraph/" target="_blank">http://sourceforge.net/projects/jsxgraph/</a>.
  
JSXCompressor is released under the _LGPL_.

Enjoy,
  
Alfred Wassermann
