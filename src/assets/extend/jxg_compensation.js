let MAIN = {};

MAIN.supportsES6 = function () {
    try {
        new Function('(a = 0) => a');
        return true;
    } catch (err) {
        return false;
    }
}();

MAIN.extend = function (object, extension, onlyOwn = false, toLower = false) {
    let e, e2;

    // the purpose of this for...in loop is indeed to use hasOwnProperty only if the caller
    // explicitly wishes so.
    for (e in extension) {
        if (!onlyOwn || (onlyOwn && extension.hasOwnProperty(e))) {
            if (toLower) {
                e2 = e.toLowerCase();
            } else {
                e2 = e;
            }

            object[e2] = extension[e];
        }
    }
};

MAIN.defineConstant = function (object, name, value) {
    Object.defineProperty(object, name, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false,
    });
};

MAIN.extendConstants = function (object, constants, onlyOwn, toUpper) {
    var e, e2;

    onlyOwn = onlyOwn || false;
    toUpper = toUpper || false;

    // The purpose of this for...in loop is indeed to use hasOwnProperty only if the caller explicitly wishes so.
    for (e in constants) {
        if (!onlyOwn || (onlyOwn && constants.hasOwnProperty(e))) {
            if (toUpper) {
                e2 = e.toUpperCase();
            } else {
                e2 = e;
            }

            this.defineConstant(object, e2, constants[e]);
        }
    }
};

MAIN.exists = function (variable, prove_empty_string = false) {
    let from_jxg = function (t) {return !(void 0 === t || null === t);};

    if (prove_empty_string)
        return from_jxg(variable) && variable !== '';
    else
        return from_jxg(variable);
};

MAIN.isEmpty = function (object) {
    return Object.keys(object).length === 0;
};

/**
 * Checks if the value of a given variable is of type string.
 * @param v A variable of any type.
 * @returns {Boolean} True, if v is of type string.
 */
MAIN.isString = function (v) {
    return typeof v === 'string';
};

/**
 * Checks if the value of a given variable is of type number.
 * @param v A variable of any type.
 * @param {Boolean} [acceptStringNumber=false] If set to true, the function returns true for e.g. v='3.1415'.
 * @param {Boolean} [acceptNaN=true] If set to false, the function returns false for v=NaN.
 * @returns {Boolean} True, if v is of type number.
 */
MAIN.isNumber = function (v, acceptStringNumber, acceptNaN) {
    var result = (
        typeof v === 'number' || Object.prototype.toString.call(v) === '[Object Number]'
    );
    acceptStringNumber = acceptStringNumber || false;
    acceptNaN = acceptNaN === undefined ? true : acceptNaN;

    if (acceptStringNumber) {
        result = result || ('' + parseFloat(v)) === v;
    }
    if (!acceptNaN) {
        result = result && !isNaN(v);
    }
    return result;
};

/**
 * Checks if a given variable references a function.
 * @param v A variable of any type.
 * @returns {Boolean} True, if v is a function.
 */
MAIN.isFunction = function (v) {
    return typeof v === 'function';
};

/**
 * Checks if a given variable references an array.
 * @param v A variable of any type.
 * @returns {Boolean} True, if v is of type array.
 */
MAIN.isArray = function (v) {
    var r;

    // use the ES5 isArray() method and if that doesn't exist use a fallback.
    if (Array.isArray) {
        r = Array.isArray(v);
    } else {
        r =
            v !== null &&
            typeof v === 'object' &&
            typeof v.splice === 'function' &&
            typeof v.join === 'function';
    }

    return r;
};

/**
 * Tests if the input variable is an Object
 * @param v
 */
MAIN.isObject = function (v) {
    return typeof v === 'object' && !this.isArray(v);
};

MAIN.genUUID = function (digits = 36) {
    // constants
    let uuidCharsStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        uuidChars = uuidCharsStr.split('');

    let r, i,
        uuid = [],
        rnd = 0;

    for (i = 0; i < 36 && i < digits; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid[i] = '-';
        } else if (i === 14) {
            uuid[i] = '4';
        } else {
            if (rnd <= 0x02) {
                rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
            }

            r = rnd & 0xf;
            rnd = rnd >> 4;
            uuid[i] = uuidChars[(i === 19) ? (r & 0x3) | 0x8 : r];
        }
    }

    return uuid.join('');
};

var JXG = JXG || MAIN;
window.JXG = JXG;
