---
id: 388
title: 'JSXCompressor &#8211; Python script'
author: Alfred Wassermann
category: Example
tags:
  - JSXCompressor
  - gunzip
  - JavaScript
  - unzip
---
A simple Python script to compress a file to be uncompressed by the JavaScript JSXCompressor is the following:

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import os
import urllib
import base64
import zlib

if __name__ == '__main__':
    if len(sys.argv)&lt;1:
        sys.stderr.write("call: python compress.py filename\n")
        sys.exit(0) 
    filename = sys.argv[1]
    if not os.path.exists(filename):
        sys.stderr.write("file '%s' not found\n" % filename)
        sys.exit(0) 
    f = open(filename, "r")
    text = f.read()
    text = base64.b64encode(zlib.compress(urllib.quote(text)))
    print text
```

It can be [downloaded here](http://jsxgraph.uni-bayreuth.de/distrib/compress.py).