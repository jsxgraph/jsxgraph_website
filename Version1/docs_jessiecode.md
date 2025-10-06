---
layout: page
title: JessieCode 
subtitle: 
---
# JessieCode language reference

## Datatypes

- **Boolean**, *true* or *false* (case insensitive, *tRuE* is a valid boolean
  constant).

- **Strings** are defined using single quote marks. Quote marks inside a string
  have to be escaped with a backslash.

- **Number**, corresponds to the JavaScript *number* datatype.

- **Objects**, can be created only via object literal notation **\<\< \>\>** and
  the predefined element functions (see below). To access properties and
  methods the operator is used. Example:

```js
obj = <<
  property: 'string',
  prop: 42,
  method: function (x) {
      return x*x;
  }
>>;
sixteen = obj.method(4);
```

- **Functions** are declared with the *function* operator

```js
f = function (a, b, c) {
  return a+b+c;
};
```

## Comments

Only one line comments with // being the first non-whitespace characters are
supported right now.

## Operators

### Logical operators

| Operator | Description |
|:---------|:------------|
| \|\|     | OR          |
| &&       | AND         |
| !        | NOT         |

### Arithmetic operators

| Operator | Description                   |
|:---------|:------------------------------|
| \+       | Addition                      |
| \-       | Subtraction or unary negation |
| \*       | Multiplication                |
| /        | Division                      |
| %        | Modulus                       |
| ^        | Exponentiation                |

### Assignment operators

| Operator | Description |
|:---------|:------------|
| =        | Assignment  |

### Comparison operators

| Operator | Description                                                   |
|:---------|:--------------------------------------------------------------|
| ==       | Equals                                                        |
| <=       | Lesser or equal                                               |
| \>=      | Greater or equal                                              |
| \<       | Lesser                                                        |
| \>       | Greater                                                       |
| !=       | Not equal                                                     |
| \~=      | Approximately equal, can be used to compare two float values. |

### String operators

| Operator | Description          |
|:---------|:---------------------|
| \+       | String concatenation |

### Member operators

| Operator | Description                                 |
|:---------|:--------------------------------------------|
| .         | Access the object\'s properties and methods |

## Control structures

The control structures are exactly the same as in JavaScript.

### If

```js
if (<expression) {
  <Stmt>
} else if (<expression>) {
  <Stmt>
} else {
  <Stmt>
}
```

### While loop

```js
while (<expression>) {
  <Stmt>
}
```

### Do loop

```js
do {
  <Stmt>
} while (<expression>);
```

### For loop

```js
for (<assignment>; <expression>; <assignment>) {
  <Stmt>
}
```

## Predefined constants

| Name     | Description                                            |
|:---------|:-------------------------------------------------------|
| \$board  | Reference to the currently accessed board.             |
| LN2      | Natural logarithm of 2                                 |
| LN10     | Natural logarithm of 10                                |
| LOG2E    | Base 2 logarithm of EULER                              |
| LOG10E   | Base 10 logarithm of EULER                             |
| PI       | Ratio of the circumference of a circle to its diameter |
| EULER    | Euler\'s number e = 2.718281828459045                  |
| SQRT1\_2 | Square root of 1/2                                     |
| SQRT2    | Square root of 2                                       |

## Predefined functions

### Math functions

| Function           | Description                                                      |
|:-------------------|:-----------------------------------------------------------------|
| cos(x)             | Cosine of x                                                      |
| cosh(x)            | Hyperbolic cosine of x                                           |
| pow(b, e)          | e to the b                                                       |
| log(x), ln(x)      | Natural logarithm                                                |
| log(x, b)          | Logarithm to base b                                              |
| log2(x), lb(x)     | Logarithm to base 2                                              |
| log10(x), ld(x)    | Logarithm to base 10                                             |
| tan(x)             | Tangent of x                                                     |
| cot(x)             | Cotangent of x                                                   |
| sqrt(x)            | Square root of x                                                 |
| cbrt(x)            | Cube root of x                                                   |
| nthroot(x)         | n-th root of x                                                   |
| ceil(x)            | Get smallest integer n with n \> x.                              |
| asin(x)            | arcsine                                                          |
| abs(x)             | Absolute value of x                                              |
| max(a, b, c, \...) | Maximum value of all given values.                               |
| min(a, b, c, \...) | Minimum value of all given values.                               |
| exp(x)             | EULER to the x                                                   |
| atan2(y, x)        | Returns the arctangent of the quotient of its arguments.         |
| random()           | Generate a random number between 0 and 1.                        |
| randint(min, max, step = 1) | Generate a random number between min and max in steps step. |
| round(v)           | Returns the value of a number rounded to the nearest integer.    |
| floor(x)           | Returns the biggest integer n with n \< x.                       |
| acos(x)            | arccosine of x                                                   |
| atan(x)            | arctangent of x                                                  |
| acot(x)            | arccotangent of x                                                |
| sin(x)             | sine of x                                                        |
| sinh(x)            | Hyperbolic sine of x                                             |
| factorial(n)       | Calculates n!                                                    |
| trunc(v, p = 0)    | Truncate v after the p-th decimal.                               |
| V(s)               | Returns the value of the given element, e.g. sliders and angles. |
| L(s)               | Calculates the length of the given segment.                      |
| X(P), Y(P)          | Returns the x resp. y coordinate of the given point.             |
| area(o), A(o)      | Compute the area of a circle or polygon.                         |
| dist(P, Q)         | Compute the distance of two points.                              |
| radius(o), R(o)    | Compute the radius of a circle or sector.                        |
| deg(A, B, C)       | Calculate the angle of three points in degree.                   |
| rad(A, B, C)       | Calculate the angle of three points in rad.                      |
| getName(o, useId = false) | Return the name of an object. If no name is given an useId is true the id is returned. |
| \$(id)             | Look up the element to the given element id.                     |

### \$board methods

| Method                                       | Description                                                                                                                                                                                                                                         |
|:---------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| update()                                     | Update all dependencies and redraw the board.                                                                                                                                                                                                       |
| on(event, handler, context=board)            | Register an event handler for the given event.                                                                                                                                                                                                      |
| off(event, handler=)                         | Deregister a given event handler or deregister all event handlers.                                                                                                                                                                                  |
| setView(array, keepaspectratio=false)        | Changes the viewport. An array with 4 numbers is expected, the four numbers represent the left, upper, right and lower bound of the viewport. If keepaspectratio is true, the viewport is adjusted to the same aspect ratio as the board container. |
| setBoundingbox(array, keepaspectratio=false) | See setView.                                                                                                                                                                                                                                        |
| migratePoint(P, Q)                           | Exchange point P by point Q.                                                                                                                                                                                                                        |
| colorblind(type)                             | Emulate color blindness. Possible types are*protanopia, tritanopia,* and*deuteranopia.*                                                                                                                                                             |

### Element functions

Every element known to the loaded JSXGraph version is available inside Jessie
by its element type, e.g. points can be created by calling point()

```js
A = point(1, 2);
```

The given parameters correspond to the parents array of the JXG.Board.create()
method. Attributes are given after the function call itself in an object:

```js
A = point(1, 2) << strokeColor: 'red', face: '[]', size: 7, fillColor: 'black' >>;
```

For a possibly incomplete list including documentation, see [the JSXGraph
docs](//jsxgraph.uni-bayreuth.de/docs/); For a complete list see the
**Element reference** section below.

## Accessing elements

### Variable assignment

```js
A = point(1, 2);
A.strokeColor = '#123456';
```

### \$

```js
point(1, 2) << id: 'foo', name: 'bar' >>;
$('foo').strokeColor = '#654321';
```

### Id

```js
point(1, 2) << id: 'foo', name: 'bar' >>;
foo.strokeColor = '#f00f00';
```

This is possible only if **foo** is not used as a variable. This won\'t work:

```js
foo = 1;
(function () {
  point(1, 2) << id: 'foo' >>;
  return foo.X();
})();
```

### Name

```js
point(1, 2) << id: 'foo', name: 'bar' >>;
bar.strokeColor = '#541541';
```

This is possible only if there is not a variable called **bar** in the current
or any higher scope. See **Id** above for an example.

## Element reference

<https://jsxgraph.uni-bayreuth.de/docs/>

### Attributes

Attributes are set like object properties

```js
A.size = 10;
A.face = '[]';
```

See [the JSXGraph docs](//jsxgraph.uni-bayreuth.de/docs/) for available
attributes. Texts and Points have two special attributes **X** and **Y** to set
their coordinates.

### Subelements

Subelements like labels for points or the baseline in sliders or the dot
indicating an angle element is a right angle can be accessed like properties

```js
A.label.strokecolor = 'red';
```

The names used to access subelements correspond to their names used to set
their attributes in`board.create`.

### Methods

Not all methods of an element class are accessible in Jessie. Currently these
methods are available:

- all elements
  - setLabelText
- point
  - move
  - glide
  - free
  - X
  - Y
- glider
  - all from point
  - setPosition
- text
  - setText
  - free
  - move
- slider
  - Value
- angle
  - Value

