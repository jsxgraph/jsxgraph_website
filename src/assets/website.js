'use strict';

(function () {
    window.JXG = window.JXG || {};
    JXG.website = {};

    //////////////////////////////////////////
    ///             private                ///
    //////////////////////////////////////////

    let _cache = {};

    function load(templateName) {
        let element;

        if (!JXG.exists(_cache[templateName], true)) {
            element = document.getElementById(templateName);
            if (!JXG.exists(element)) return undefined;

            _cache[templateName] = trim(element.innerHTML);
        }

        return _cache[templateName];
    }

    function trim(str) {
        str = str.replace(/^\s+/, '');
        str = str.replace(/\s+$/, '');

        return str;
    }

    function renderMathJax(stringOrNode) {
        let wasString = JXG.isString(stringOrNode),
            node;

        if (wasString)
            node = $('<div></div>').append(stringOrNode);
        else
            node = stringOrNode;

        node.findSelf('tex').each(function (_, node) {
            node.outerText = $(node).outerHTML();
        });

        try {
            if (MathJax)
                if (MathJax.typeset) {
                    // Version 3
                    MathJax.typeset([node[0]]);
                } else {
                    // Version 2
                    MathJax.Hub.Queue(['Typeset', MathJax.Hub, node[0]]);
                }
        } catch (e) {
            console.warn(e);
        }

        if (wasString)
            return $(node).html();
        else
            return node;
    }

    //////////////////////////////////////////
    ///              public                ///
    //////////////////////////////////////////

    /**
     * Copies content to system clipboard.
     *
     * Copied from JSXGraph share.
     *
     * @param {String|Blob} content
     * @param {String|jQuery} [successAnchor=undefined]
     * @param {'bg-color'|'popup'|'tooltip'|'text'|'html'|'append'|'off'} [successType=undefined]
     * @param {String} [successMessage=undefined]
     * @param {Number} [successDuration=1800]
     */
    JXG.website.copyToClipboard = function (
        content,
        successAnchor = undefined,
        successType = undefined,
        successMessage = undefined,
        successDuration = 1800,
    ) {
        let el, successFunc = function () { };

        if (JXG.exists(successAnchor) && JXG.exists(successMessage)) {
            successFunc = function () {
                let obj, backup;

                switch (successType) {
                    case 'bg-color':
                        obj = $(successAnchor);

                        if (obj.attr('data-copy-blocked') === 'true')
                            return;
                        obj.attr('data-copy-blocked', 'true');
                        obj.addClass(successMessage);
                        window.setTimeout(() => {
                            obj.removeClass(successMessage);
                            obj.attr('data-copy-blocked', 'false');
                        }, successDuration);
                        break;

                    case 'popup':
                    case 'tooltip':
                        obj = bsAddOns.enableTooltips(successAnchor, {
                            title: successMessage,
                            trigger: 'manual',
                            placement: 'top',
                        })[0];
                        obj.show();
                        window.setTimeout(() => {
                            obj.hide();
                        }, successDuration);
                        break;

                    case 'text':
                        obj = $(successAnchor);
                        backup = obj.text();
                        if (obj.attr('data-copy-blocked') === 'true')
                            return;
                        obj.attr('data-copy-blocked', 'true');
                        obj.text(successMessage);
                        window.setTimeout(() => {
                            obj.text(backup);
                            obj.attr('data-copy-blocked', 'false');
                        }, successDuration);
                        break;

                    case 'html':
                        obj = $(successAnchor);
                        backup = obj.html();
                        if (obj.attr('data-copy-blocked') === 'true')
                            return;
                        obj.attr('data-copy-blocked', 'true');
                        obj.html(successMessage);
                        window.setTimeout(() => {
                            obj.html(backup);
                            obj.attr('data-copy-blocked', 'false');
                        }, successDuration);
                        break;

                    case 'append':
                        obj = $(successAnchor);
                        backup = obj.html();
                        if (obj.attr('data-copy-blocked') === 'true')
                            return;
                        obj.attr('data-copy-blocked', 'true');
                        obj.html(backup + successMessage);
                        window.setTimeout(() => {
                            obj.html(backup);
                            obj.attr('data-copy-blocked', 'false');
                        }, successDuration);
                        break;

                    case 'off':
                        obj = $(successAnchor);
                        obj.removeClass('off');
                        window.setTimeout(() => {
                            obj.addClass('off');
                        }, successDuration);
                        break;
                }
            };
        }

        if (!navigator || !navigator.clipboard || !navigator.clipboard.write || !ClipboardItem) {
            console.log('Copied to clipboard via textarea');
            el = document.createElement('textarea');
            el.value = string;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

            successFunc();

        } else if (JXG.isString(content)) {
            console.log('Copied to clipboard via navigator text');
            navigator.clipboard.writeText(content)
                .then(function () {
                    successFunc();
                })
                .catch(function (e) {
                    /*
                    Workaround:
                    Safari needs to have navigator.clipboard.write in an eventhandler directly.
                     */
                    console.warn(e);
                });
        } else {
            console.log('Copied to clipboard via navigator ClipboardItem');
            navigator.clipboard.write([new ClipboardItem({[content.type]: content})])
                .then(function () {
                    successFunc();
                })
                .catch(function () {
                    /*
                    Workaround:
                    Safari needs to have navigator.clipboard.write in an eventhandler directly.
                     */
                    console.warn(e);
                });
        }
    };

    /**
     * Generates a string from a template and uses variables.
     *
     * Copied from sketchometry.
     *
     * @param {String} templateName
     * @param {Object} variables
     * @returns {String|jQuery}
     */
    JXG.website.renderTemplate = function (templateName, variables) {
        let tmpl, re;

        tmpl = load(templateName) || 'Template \'' + templateName + '\' not found';

        // replace variables
        re = /%(.*?)%/;
        while (re.test(tmpl)) {
            tmpl = tmpl.replace(re, (typeof variables[RegExp.$1] !== 'undefined' && variables[RegExp.$1] !== null ? variables[RegExp.$1] : ('#!$' + RegExp.$1 + '#!$')));
        }

        // replace the temp #!$ by % again
        re = /#!\$/g;
        tmpl = tmpl.replace(re, '%');

        tmpl = $('<div></div>').append(tmpl);
        tmpl = renderMathJax(tmpl);

        return $($(tmpl).html());
    };

})();
