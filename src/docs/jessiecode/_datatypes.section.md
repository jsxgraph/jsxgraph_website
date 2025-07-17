# Datatypes

## Boolean

_true_ or _false_ (case insensitive, _tRuE_ is a valid boolean constant).

## Strings

Strings are defined using single quote marks. Quote marks inside a string have to be escaped with a backslash.

## Number

Number corresponds to the JavaScript number datatype.

## Objects

Objects can be created only via object literal notation `<< >>` and the predefined element functions (see below). To access properties and methods the operator is used. Example:

```jessiecode
obj = <<
property: 'string',
    prop: 42,
    method: function (x) {
        return x * x;
    }
>>;
sixteen = obj.method(4);
```

## Functions

Functions are declared with the function operator

```jessiecode
f = function (a, b, c) {
    return a + b + c;
};
```

---

