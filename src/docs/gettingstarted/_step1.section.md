# Step 1 – Include JSXGraph

You can work with JSXGraph either directly in a web browser using online resources, or offline by downloading the required files on your local machine. 

We recommend using a modern code editor to write and test your HTML file with the JSXGraph code efficiently.

## JSXGraph hosted via CDN

The preferred way is to include JSXGraph online from one of the CDNs (Content Delivery Network).
Add the following lines into the HTML document head:

```html
<script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" 
      href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
```

#### HTML template – JSXGraph hosted via CDN

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css">
</head>
<body>
    ...
</body>
</html>
```

## JSXGraph locally hosted

If you want to include a local copy of JSXGraph in your HTML file,
download the two following JSXGraph files

- <https://jsxgraph.org/distrib/jsxgraphcore.js>
- <https://jsxgraph.org/distrib/jsxgraph.css>

and add the following lines into the document head:

```html
<script src="jsxgraphcore.js"></script>
<link rel="stylesheet" type="text/css" href="jsxgraph.css">
```

#### HTML template – JSXGraph locally hosted

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My JSXGraph Example</title>
    <script src="jsxgraphcore.js"></script>
    <link rel="stylesheet" type="text/css" href="jsxgraph.css">
</head>
<body>
    ...
</body>
</html>
```




