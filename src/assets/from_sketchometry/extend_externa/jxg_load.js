/*
  Copyright 2024

  Andreas Walter

  Center for Mobile Learning with Digital Technologies
  Universität Bayreuth
  Universitätsstraße 30
  95447 Bayreuth

  This code isn't licensed yet.
*/

'use strict';

window.JXG = window.JXG || {};

JXG.Load = (function () {
    function createHTMLElement(tagName, attr) {
        var el = document.createElement(tagName), i,
            a_name, a_value, a_object;

        for (i = 0; i < Object.keys(attr).length; i++) {
            a_name = Object.keys(attr)[i];
            a_value = attr[a_name];

            a_object = document.createAttribute(a_name);
            a_object.nodeValue = a_value;
            el.setAttributeNode(a_object);
        }

        return el;
    }

    var allowDocumentWrite = true;

    window.onload = function () {
        allowDocumentWrite = false;
    };

    (function () {
        var scripts, reg, i, s;

        scripts = document.getElementsByTagName('script');
        reg = new RegExp('jxg_load.js(\\?.*)?$');

        for (i = 0; i < scripts.length; i++) {
            s = scripts[i];
            if (s.src && s.src.match(reg)) {
                if (s.type === 'module')
                    allowDocumentWrite = false;
                break;
            }
        }
    })();

    var requirePathLocation = 'href';

    return {
        requirePath: window.location.href,

        setRequirePathToScriptFile: function (filename) {
            var scripts, reg, i, s, requirePath = '';

            if (requirePathLocation === filename) {
                return;
            }

            scripts = document.getElementsByTagName('script');
            reg = new RegExp(filename + '(\\?.*)?$');

            for (i = 0; i < scripts.length; i++) {
                s = scripts[i];
                if (s.src && s.src.match(reg)) {
                    requirePath = s.src.replace(reg, '');
                    JXG.Load.requirePath = requirePath;
                    requirePathLocation = filename;
                    break;
                }
            }
        },

        setRequirePathToHref: function () {
            JXG.Load.requirePath = window.location.href;
            requirePathLocation = 'href';
        },

        JSfiles: function (fileArray, preventCaching, root, loadAsModule = false, strictOrder = false) {
            var postfix = '', i, file;

            preventCaching = preventCaching || false;
            if (preventCaching) {
                postfix = '?v=' + (new Date()).getTime();
            }
            root = root || JXG.Load.requirePath;
            if (root.substr(-1) !== '/') {
                root += '/';
            }

            for (i = 0; i < fileArray.length; i++) {
                file = fileArray[i];

                if (file.substr(-2) !== 'js') {
                    file += '.js';
                }
                (function (include) {
                    var src = root + include + postfix,
                        el, head;
                    if (JXG.isMetroApp() || !allowDocumentWrite) {
                        el = createHTMLElement('script', {
                            type: loadAsModule ? 'module' : 'text/javascript',
                            src: src,
                        });
                        if (strictOrder) {
                            el.defer = true;
                            el.async = false;
                        }
                        head = document.getElementsByTagName('head')[0];
                        head.appendChild(el);
                    } else {
                        // avoid inline code manipulation
                        document.write('<script type="' + (loadAsModule ? 'module' : 'text/javascript') + '" src="' + src + '"><\/script>');
                    }
                }(file));
            }
        },

        CSSfiles: function (fileArray, preventCaching, root) {
            var postfix = '', i, file;

            preventCaching = preventCaching || false;
            if (preventCaching) {
                postfix = '?v=' + (new Date()).getTime();
            }
            root = root || JXG.Load.requirePath;
            if (root.substr(-1) !== '/') {
                root += '/';
            }

            for (i = 0; i < fileArray.length; i++) {
                file = fileArray[i];

                if (file.substr(-3) !== 'css') {
                    file += '.css';
                }
                (function (include) {
                    var href = root + include + postfix,
                        el = createHTMLElement('link', {
                            rel: 'stylesheet',
                            type: 'text/css',
                            href: href,
                        }),
                        head = document.getElementsByTagName('head')[0];
                    head.appendChild(el);
                }(file));
            }
        },

        HTMLfileASYNC: function (file, innerHTMLof, doAfter, preventCaching, root) {
            var postfix = '';

            doAfter = doAfter || function () {};
            preventCaching = preventCaching || false;
            if (preventCaching) {
                postfix = '?v=' + (new Date()).getTime();
            }
            root = root || JXG.Load.requirePath;
            if (root.substr(-1) !== '/') {
                root += '/';
            }

            if (file.substr(-4) !== 'html') {
                file += '.html';
            }
            (function (include) {
                var url = root + include + postfix;

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            innerHTMLof.innerHTML = xhr.responseText;
                            doAfter();
                        }
                    }
                };

                xhr.open('POST', url, true);
                xhr.send();
            }(file));
        },
    };
})();