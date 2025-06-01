
## JessieCode language reference

---

### Datatypes

#### Boolean

_true_ or _false_ (case insensitive, _tRuE_ is a valid boolean constant).

#### Strings

Strings are defined using single quote marks. Quote marks inside a string have to be escaped with a backslash.

#### Number

Number corresponds to the JavaScript number datatype.

#### Objects

Objects can be created only via object literal notation `<< >>` and the predefined element functions (see below). To access properties and methods the operator is used. Example:

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

#### Functions

Functions are declared with the function operator

```js
f = function (a, b, c) {
return a+b+c;
};
```

---

### Comments

Only one line comments with `//` being the first non-whitespace characters are supported right now.

---

### Operators

#### Logical operators

_OR_ 

`||`

_AND_

`&&`

_NOT_

`!`	

#### Arithmetic operators

_Addition_

`+`

_Subtraction or unary negation_

`-`

_Multiplication_

`*`

_Division_

`/`

_Modulus_

`%`

_Exponentiation_

`^`

#### Assignment operators

_Assignment_

`=`

#### Comparison operators

_Equals_

`==`

_Lesser or equal_

`<=`

_Greater or equal_

`>=`

_Lesser_

`<`

_Greater_

`>`

_Not equal_

`!=`

_Approximately equal_

Can be used to compare two float values.

`~=`

#### String operators

_String concatenation_

`+`

#### Member operators

_Access the object's properties and methods_

`.`

---

### Control structures

The control structures are exactly the same as in JavaScript.

_if_

```js
if (<expression) {
    <Stmt>
} else if (<expression>) {
    <Stmt>
} else {
    <Stmt>
}
```

_while_ loop

```js
while (<expression>) {
    <Stmt>
}
```

_do_ loop

```js
do {
    <Stmt>
} while (<expression>);
```

_for_ loop

```js
for (<assignment>; <expression>; <assignment>) {
    <Stmt>
}
```

---

...

