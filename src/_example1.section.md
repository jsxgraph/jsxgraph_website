Code-Beispiel ist hier zu finden:

```javascript
var brd = JXG.JSXGraph.initBoard('box-123456789', {boundingbox: [-3, 3, 3, -3]}),
    solveQ2 = function (x1, x2, x3, off) {
        var a, b, c, d;
        a = 0.5;
        b = -(x1 + x2 + x3);
        c = x1 * x1 + x2 * x2 + x3 * x3 - 0.5 * (x1 + x2 + x3) * (x1 + x2 + x3) - off;
        d = b * b - 4 * a * c;
        if (Math.abs(d) < 0.00000001) d = 0.0;
        return [(-b + Math.sqrt(d)) / (2.0 * a), (-b - Math.sqrt(d)) / (2.0 * a)];
    };

// ...
```