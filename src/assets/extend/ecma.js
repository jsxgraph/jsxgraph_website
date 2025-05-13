/*
 Copyright 2011-2024

 Alfred Wassermann,
 Andreas Walter,
 Michael Gerhaeuser,
 Carsten Miller,
 Matthias Ehmann,
 Heiko Vogel

 This code isn't licensed yet.
 */

Array.prototype.dist = function (v) {
    let i, dist = 0;
    for (i = 0; i < this.length; i++)
        dist += Math.pow((this[i] - v[i]), 2);
    return Math.sqrt(dist);
};

Array.prototype.first = function () {
    if (this.length === 0)
        return undefined;
    else
        return this[0];
};

Array.prototype.middle = function () {
    let mid = Math.floor((this.length - 1) / 2);
    if (this.length === 0)
        return undefined;
    else
        return this[mid];
};

Array.prototype.last = function () {
    let len = this.length;
    if (len === 0)
        return undefined;
    else
        return this[len - 1];
};

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.trimTrailZeroes = function () {
    return this.replace(/(.\d*?)0+$/, '$1').replace(/\.$/, '');
};

String.prototype.sanitize = function () {
    return this.replace(/\n/g, ' ').replace(/\r/g, '').replace(/\t+/, '').replace(/ +/g, ' ').trim();
};

String.prototype.splice = function (start, deleteCount = 0, insert = '') {
    return this.substring(0, start) + insert + this.substring(deleteCount + start);
};

String.prototype.isHTML = function () {
    return /<\/?[a-z][\s\S]*>/i.test(this);
};

String.prototype.cleanTerm = function () {
    let ret = this.replace(/\n/g, '').replace(/\r/g, '');

    //ret = ret.replace(/^ *function *\( *x* *\) *\{ *return *\( *1 *\* */, "").replace(/\)[ ;]*\} *$/, "");
    ret = ret.replace(/^ *function *\( *x* *\) *\{ *return *(.*) *; *\} *$/, '$1');
    //ret = ret.replace(/^\((.*)\)$/, "$1");
    //ret = ret./*replace(/;/g, "").*/replace(/"/g, "&quot;");

    return ret;
};

String.prototype.join = function () { // fix call join on strings instead of array
    return '' + this;
};

String.prototype.nl2br = function (is_xhtml = true) {
    let breakTag = is_xhtml ? '<br />' : '<br>';
    return this.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
};

String.prototype.decodeEntities = function () {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = this;
    return textArea.value;
};

String.prototype.encodeEntities = function () {
    const textArea = document.createElement('textarea');
    textArea.innerText = this;
    return textArea.innerHTML.split('<br>').join('\n');
};

String.prototype.hexEncode = function () {
    var hex, i;

    var result = '';
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += '&#x' + ('000' + hex).slice(-4) + ';';
    }

    return result;
};

String.prototype.hexDecode = function () {
    var j;
    var hexes = (this.replace(/[&#x]|;/g, ''))
        .match(/.{1,4}/g) || [];
    var back = '';
    for (j = 0; j < hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }

    return back;
};

String.prototype.br2nl = function () {
    return this.replace(/<\s*\/?br\s*[\/]?>/gi, '\n');
};

String.prototype.capitalize = function () {
    return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
        return p1 + p2.toUpperCase();
    });
};

String.prototype.$substr = String.prototype.substr;
/**
 *
 * @param {Number} from
 * @param {Number}  [length]
 * @returns {String}
 */
String.prototype.substr = function (from, length) {
    if (from < 0)
        from = this.length + from;
    if (length < 0)
        return this.substring(from, this.length + length);
    else if (length === 0 || length === undefined)
        return this.substring(from, this.length);
    else
        return this.substring(from, from + length);
};

String.prototype.toCurrency = function (sign = '€', nbsp = false, decimalSep = ',', thousandSep = '.') {
    return parseFloat(this).toCurrency(sign, nbsp, decimalSep, thousandSep);
};

Math.$round = Math.round;
Math.round = function (x, digits = 0) {
    var ten = Math.pow(10, digits);
    return Math.$round(x * ten) / ten;
};

Number.prototype.precision = function () {
    return ((this + '').split('.')[1] ?? '').length;
};

Number.prototype.trimTrailZeroes = function () {
    return parseFloat(('' + this).trimTrailZeroes());
};

Number.prototype.checksum = function () {
    var arr = this.toString().split('');
    var checksum = 0;
    for (var i = 0; i < arr.length; i++) {
        checksum += Number(arr[i]);
    }
    return checksum;
};

/**
 * Turns a number into a string with leading zeros.
 * @return {String}
 */
Number.prototype.toNumberOfDigits = function (n = 1) {
    let result = '', i;

    for (i = 10; i < Math.pow(10, n); i *= 10) {
        if (this < i)
            result += '0';
    }

    return result + this;
};

Number.prototype.toPrecision = Number.prototype.toFixed;

Number.prototype.addSeparators = function (decimalSep = ',', thousandSep = '.', fixedDigits = -1) {
    var string, i, doit, n;

    if (fixedDigits >= 0)
        string = this.toFixed(fixedDigits);
    else
        string = this.toFixed(100).trimTrailZeroes();
    string = string.replace('.', decimalSep);

    doit = string.indexOf(decimalSep) === -1;
    n = 1;

    for (i = string.length - 1; i > 0; i--) {
        if (string.charAt(i) === decimalSep) {
            doit = true;
            n = 0;
        }
        if (doit) {
            if (n === 3) {
                n = 1;
                string = string.splice(i, 0, thousandSep);
            } else {
                n++;
            }
        }
    }

    return string;
};

Number.prototype.toCurrency = function (sign = '€', nbsp = false, decimalSep = ',', thousandSep = '.') {
    var string = this.addSeparators(decimalSep, thousandSep, 2);

    if (sign !== '') {
        string = string + (nbsp ? '&nbsp;' : ' ') + sign;
    }

    return string;
};

Math.randint = function (min, max, step = 1) {
    return Math.round(Math.random() * (max - min) / step) * step + min;
};

Element.prototype.getCaretPos = function () {
    if (!(
        // inputs
        (this.tagName === 'INPUT' && (
            this.type === 'email' || this.type === 'month' || this.type === 'number' ||
            this.type === 'password' || this.type === 'search' || this.type === 'tel' ||
            this.type === 'text' || this.type === 'time' || this.type === 'url' || this.type === 'week'
        )) ||
        // textarea
        (this.tagName === 'TEXTAREA') ||
        // DOM contenteditable
        (this.getAttribute('contenteditable') === true || this.getAttribute('contenteditable') === 'true')
    )) {
        console.warn('operation not possible');
        return;
    }

    var doc = this.ownerDocument || document,
        win = doc.defaultView || doc.parentWindow,
        sel, range, preCaretRange, textRange, preCaretTextRange,
        strPos = 0;

    if (this.selectionStart || this.selectionStart === '0') {

        strPos = this.selectionStart;

    } else if ((sel = doc.selection) && sel.type !== 'Control') {

        textRange = sel.createRange();
        preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(this);
        preCaretTextRange.setEndPoint('EndToEnd', textRange);
        strPos = preCaretTextRange.text.length;

    } else if (typeof (sel = win.getSelection()) !== 'undefined') {

        if (sel.rangeCount > 0) {
            range = win.getSelection().getRangeAt(0);
            preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(this);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            strPos = preCaretRange.toString().length;
        }
    }

    return strPos;
};

Element.prototype.setCaretPos = function (strPos) {
    if (!(
        // inputs
        (this.tagName === 'INPUT' && (
            this.type === 'email' || this.type === 'month' || this.type === 'number' ||
            this.type === 'password' || this.type === 'search' || this.type === 'tel' ||
            this.type === 'text' || this.type === 'time' || this.type === 'url' || this.type === 'week'
        )) ||
        // textarea
        (this.tagName === 'TEXTAREA') ||
        // DOM contenteditable
        (this.getAttribute('contenteditable') === true || this.getAttribute('contenteditable') === 'true')
    )) {
        console.warn('operation not possible');
        return;
    }

    var doc = this.ownerDocument || document,
        win = doc.defaultView || doc.parentWindow,
        sel, range, value;

    if (this.tagName === 'INPUT' || this.tagName === 'TEXTAREA') {
        value = this.value;
    } else if (this.getAttribute('contenteditable') === true || this.getAttribute('contenteditable') === 'true') {
        value = this.textContent;
    }
    strPos = Math.min(value.length, strPos);

    if (this.selectionStart || this.selectionStart === '0') {

        this.selectionStart = strPos;
        this.selectionEnd = strPos;
        this.focus();

    } else if ((sel = doc.selection) && sel.type !== 'Control') {

        this.focus();
        range = sel.createRange();
        range.moveStart('character', -text.value.length);
        range.moveStart('character', strPos);
        range.moveEnd('character', 0);
        range.select();

    } else if (typeof (sel = win.getSelection()) !== 'undefined') {

        range = doc.createRange();
        range.setStart(this.childNodes[0], strPos);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);

    }
};

Element.prototype.insertAtCaret = function (text) {
    if (!(
        // inputs
        (this.tagName === 'INPUT' && (
            this.type === 'email' || this.type === 'month' || this.type === 'number' ||
            this.type === 'password' || this.type === 'search' || this.type === 'tel' ||
            this.type === 'text' || this.type === 'time' || this.type === 'url' || this.type === 'week'
        )) ||
        // textarea
        (this.tagName === 'TEXTAREA') ||
        // DOM contenteditable
        (this.getAttribute('contenteditable') === true || this.getAttribute('contenteditable') === 'true')
    )) {
        console.warn('operation not possible');
        return;
    }

    var scrollPos = this.scrollTop,
        strPos,
        value,
        front, back;

    strPos = this.getCaretPos();
    if (this.tagName === 'INPUT' || this.tagName === 'TEXTAREA') {
        value = this.value;
    } else if (this.getAttribute('contenteditable') === true || this.getAttribute('contenteditable') === 'true') {
        value = this.textContent;
    }

    front = value.substring(0, strPos);
    back = value.substring(strPos, value.length);
    value = front + text + back;
    strPos = strPos + text.length;

    if (this.tagName === 'INPUT' || this.tagName === 'TEXTAREA') {
        this.value = value;
    } else if (this.getAttribute('contenteditable') === true || this.getAttribute('contenteditable') === 'true') {
        this.textContent = value;
    }
    this.setCaretPos(strPos);

    this.scrollTop = scrollPos;
};

Element.prototype.backwardDel = function () {
    if (this.tagName != 'INPUT' || this.type != 'text')
        return;

    var scrollPos = this.scrollTop,
        strPos,
        front, back;

    strPos = this.getCaretPos();
    front = (this.value).substring(0, strPos - 1);
    back = (this.value).substring(strPos, this.value.length);
    this.value = front + back;
    strPos = strPos - 1;
    this.setCaretPos(strPos);

    this.scrollTop = scrollPos;
};

// MouseEvent Polyfill used in addGalleryHelpEvent
(function (window) {
    try {
        new MouseEvent('test');
        return false; // No need to polyfill
    } catch (e) {
        // Need to polyfill - fall through
    }

    // Polyfills DOM4 MouseEvent
    let MouseEvent = function (eventType, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
        };
        let mouseEvent = document.createEvent('MouseEvent');
        mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

        return mouseEvent;
    };

    MouseEvent.prototype = Event.prototype;

    window.MouseEvent = MouseEvent;
})(window);

document.addEventListener('DOMContentLoaded', function () {
    // Calc scrollbar width
    var scrollDiv = document.createElement('div');
    scrollDiv.style = 'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    window.scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
});

document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === 'complete') {  // or at "complete" if you want it to execute in the most last state of window.
        $('img[data-lazysrc]').each(function () {
                $(this).attr('src', $(this).attr('data-lazysrc'));
            },
        );
    }
});