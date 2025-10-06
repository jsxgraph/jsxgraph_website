---
layout: page
title: JSXCompressor
subtitle: unzip/gunzip/deflate with JavaScript
---
The open source library _JSXGraph_ (<http://jsxgraph.org>) contains utilities to read
<a href="http://zlib.org" target="_blank">ZLIB</a> compressed files. That means, JSXGraph has a pure JavaScript implementation of _deflate_, _unzip_ and _base64_decode_. This can be used for delivering compressed JavaScript inside of an HTML file. Another application is transmission of compressed XML or JSON data with AJAX. Of course, with todays browsers it depends on the transmission bandwidth if this is worthwile. If the web server does not support compression of data, then this tool may be an option.

One possibility to compress the data on server side is to use PHP. The code below writes the content of a JavaScript file as a compressed, base64 encoded string on-the-fly into the HTML. Then on client side this string can be accessed via the JavaScript variable _jsxcompressed_.

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

The zip file `jsxcompressor.zip` contains two examples: `testhelloworld.php` and `testjsxgraph.php`.

The jsxcompressor code is open source and can be [downloaded here](/distrib/jsxcompressor.zip). The source code of the minified JavaScript file jsxcompressor.js consists of a few files from the JSXGraph project:

  * [src/jxg.js](https://github.com/jsxgraph/jsxgraph/blob/master/src/jxg.js)
  * [src/utils/zip.js](https://github.com/jsxgraph/jsxgraph/blob/master/src/utils/zip.js)
  * [src/utils/base64.js](https://github.com/jsxgraph/jsxgraph/blob/master/src/utils/base64.js)
  * [src/utils/encoding.js](https://github.com/jsxgraph/jsxgraph/blob/master/src/utils/encoding.js)

The source code of the JSXGraph library can be downloaded from <a href="https://github.com/jsxgraph/jsxgraph" target="_blank">https://github.com/jsxgraph/jsxgraph</a>.

JSXCompressor is released under the [LGPL 3.0](http://www.gnu.org/licenses/lgpl.txt) or the [Apache License 2.0](http://www.apache.org/licenses/).
