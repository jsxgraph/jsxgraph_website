Use the [JSXGraph Book](https://ipesek.github.io/jsxgraphbook/) for a comprehensive introduction to JSXGraph.

### Step 1 – Include JSXGraph

#### Online Usage

The preferred way is to include JSXGraph online from one of the CDNs (Content Delivery Network).
Add the following lines into the document head:

```html
<script type="text/javascript" charset="UTF-8" 
        src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" 
      href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
```

#### Local Usage

If you want to include a local copy of JSXGraph in your HTML file,
download the two following JSXGraph files

- <https://jsxgraph.org/distrib/jsxgraphcore.js>
- <https://jsxgraph.org/distrib/jsxgraph.css>

and add the following lines into the document head:

```html
<link rel="stylesheet" type="text/css" href="jsxgraph.css" />
<script type="text/javascript" src="jsxgraphcore.js"></script>
```

#### Complete HTML File (online)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script type="text/javascript" charset="UTF-8"
            src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />
</head>
<body>

</body>
</html>
```



