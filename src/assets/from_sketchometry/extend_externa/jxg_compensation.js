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

MAIN.isString = function (v) {
    return typeof v === 'string';
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
