# JavaScript-Based Compression Tool in JSXGraph

JSXCompressor is a lightweight JavaScript utility that enables the use of compressed JavaScript code within HTML pages, without relying on server-side compression mechanisms. It is part of the open-source JSXGraph library and provides a pure JavaScript implementation of the [ZLIB](http://zlib.org) compression standard, including support for deflate, unzip, and base64_decode. This makes it possible to deliver compressed JavaScript, XML, or JSON content directly in client-side applications, particularly useful when web servers do not support gzip or similar compression natively.

The typical use case involves compressing a JavaScript file on the server side using PHP. A small PHP function reads the contents of a JavaScript file, compresses it using `gzcompress`, encodes the result in base64, and embeds it into the HTML as a JavaScript variable. On the client side, JSXCompressor decompresses this variable and executes it via the `eval()` function, using the `JXG.decompress()` method provided by JSXGraph.

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

This approach can lead to a good compression ratio—comparable to gzip—though it incurs some additional overhead due to the base64 encoding. While modern browsers and servers often handle compression more efficiently through standard HTTP mechanisms, JSXCompressor remains a practical solution in environments where such support is lacking.

```html
<script src="./jsxcompressor.js" type="text/javascript"></script>
<script type="text/javascript">
    eval(JXG.decompress(jxgcompressed));
</script>
```

The JSXCompressor distribution includes example files (`testhelloworld.php`, `testjsxgraph.php`) and the compressed utility script jsxcompressor.js, which combines several modules from the JSXGraph source code, particularly for handling unzip, base64 decoding, and character encoding. The tool is open source and released under the LGPL 3.0 or Apache License 2.0, making it freely available for integration into educational, experimental, or production-level web applications.

```js
JXG = {};
JXG.decompress = function(str) {
    return unescape( 
                (new JXG.Util.Unzip(JXG.Util.Base64.decodeAsArray(str))).unzip()[0][0]
             );
};
```

## Download

[JSXCompressor on GitHub](https://github.com/jsxgraph/jsxgraph/tree/main/JSXCompressor)
