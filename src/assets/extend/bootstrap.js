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

var bsAddOns = bsAddOns || {}; // need to use var here

// ensure bsAddOns is really a global symbol
window.bsAddOns = bsAddOns;

/**
 * Object Helper must contain:
 *   - extend(...)
 *   - exists(...)
 *   - isFunction(...)
 */
(function (Helper) {

    let firstInit = true;

    /**
     * Some Bootstrap extensions.
     */
    Helper.extend(bsAddOns, {

        backdropLacyLatency: 500,

        init: async function () {
            let cssRootStyle = getComputedStyle(document.documentElement),
                backdropOffcanvasTimeout,
                breakpointName, value, i;

            if (firstInit) {

                bsAddOns.addModalBackdropSettings();
                bsAddOns.addModalDraggableSettings();

                $(document).on('input change rangechange', 'input, select', function () {
                    let parent = $(this),
                        node = $('.form-control-value[data-for="#' + parent.attr('id') + '"]'),
                        val;

                    node.html('');
                    if (parent.length === 0) return;

                    val = parent.val();
                    if (!Helper.exists(val)) return;

                    if (Helper.isFunction(node.data('convert')))
                        val = node.data('convert')(val);

                    node.html(node.data('prefix') + val + node.data('suffix'));
                });

                $(document).on('click', function (e) {
                    let button = $(e.target).parents('button'),
                        input = $('#' + button.data('for') + '[type="number"]'),
                        direction = button.data('direction'),
                        min = parseFloat(input.attr('min')),
                        max = parseFloat(input.attr('max')),
                        step = parseFloat(input.attr('step')),
                        val = parseFloat(input.val());

                    if (!button.hasClass('form-change-number')) return;

                    if (isNaN(min)) min = -Infinity;
                    if (isNaN(max)) max = Infinity;
                    if (isNaN(step)) step = 1;

                    if (direction > 0 || parseFloat(direction) > 0 || direction === 'plus') {
                        direction = 1;
                        if (!Helper.exists(val) || isNaN(val)) val = 0;
                    } else if (direction < 0 || parseFloat(direction) < 0 || direction === 'minus') {
                        direction = -1;
                        if (!Helper.exists(val) || isNaN(val)) val = 0;
                    } else {
                        direction = 0;
                        val = 0;
                    }

                    if (direction === 1)
                        val = val + step;
                    else if (direction === -1)
                        val = val - step;
                    val = Math.round(val, step.precision());

                    val = Math.min(max, val);
                    val = Math.max(min, val);

                    input.val(val).trigger('change');
                });

                $(document).on('input textareachange', 'textarea.auto-resize, textarea.auto-resize-sm', function () {
                    this.style['height'] = '5px';
                    this.style['height'] = Math.min(this.scrollHeight + 5, $(window).height() / 3 * 2) + 'px';
                    if ($(this).hasClass('auto-resize-to-sm'))
                        this.style['max-height'] = '50vh';
                    else if ($(this).hasClass('auto-resize-to-xs'))
                        this.style['max-height'] = '30vh';
                    else
                        this.style['max-height'] = '80vh';
                });

                $(document).on('scroll', '*', function () {
                    if (Helper.exists(window.scrollbarWidth)) {
                        $('.mt-scrollbar, .my-scrollbar, .m-scrollbar').css('margin-top', scrollbarWidth + 'px');
                        $('.mb-scrollbar, .my-scrollbar, .m-scrollbar').css('margin-bottom', scrollbarWidth + 'px');
                        $('.ms-scrollbar, .mx-scrollbar, .m-scrollbar').css('margin-left', scrollbarWidth + 'px');
                        $('.me-scrollbar, .mx-scrollbar, .m-scrollbar').css('margin-right', scrollbarWidth + 'px');
                        $('.pt-scrollbar, .py-scrollbar, .p-scrollbar').css('padding-top', scrollbarWidth + 'px');
                        $('.pb-scrollbar, .py-scrollbar, .p-scrollbar').css('padding-bottom', scrollbarWidth + 'px');
                        $('.ps-scrollbar, .px-scrollbar, .p-scrollbar').css('padding-left', scrollbarWidth + 'px');
                        $('.pe-scrollbar, .px-scrollbar, .p-scrollbar').css('padding-right', scrollbarWidth + 'px');
                    }
                });

                $(document).on('shown.bs.offcanvas', '.offcanvas[data-bs-backdrop="static"][data-bs-addon-lazy-backdrop="true"]', function () {
                    let offcanvas = this;
                    window.clearTimeout(backdropOffcanvasTimeout);
                    $('.offcanvas-backdrop.show').off('click');
                    backdropOffcanvasTimeout = window.setTimeout(function () {
                        $('.offcanvas-backdrop.show').one('click', function () {
                            $(offcanvas).offcanvas('hide');
                        });
                    }, bsAddOns.backdropLatency);
                });

                $(document).on('submit', 'form.needs-validation', function (event) {
                    let form = $(this);

                    if (!this.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.find(':invalid').scrollIntoView();
                    form.addClass('was-validated');
                });

            }

            $('input, select').trigger('rangechange');
            $('textarea.auto-resize, textarea.auto-resize-sm').trigger('textareachange');
            $('*').last().trigger('scroll');

            $('input[required], select[required], textarea[required]').each(function (_, that) {
                let id = $(that).attr('id'),
                    label = $('label[for="' + id + '"]');
                if (label.find('> *').length > 0)
                    label.find('> *').first().addClass('required');
                else
                    label.addClass('required');
            });

            $('input.readonly, select.readonly, textarea.readonly')
                .off('keydown paste focus mousedown pointerdown')
                .on('keydown paste focus mousedown pointerdown', function (e) {
                    if (e.keyCode !== 9 /* tab */)
                        e.preventDefault();
                });

            bsAddOns.spacer = {
                default: cssRootStyle.getPropertyValue('--bsAddOns-spacer') || '1rem',
                length: parseInt(cssRootStyle.getPropertyValue('--bsAddOns-spacers-length') || '6'),
            };
            for (i = 0; i < bsAddOns.spacer.length; i++) {
                bsAddOns.spacer[i] = cssRootStyle.getPropertyValue('--bsAddOns-spacer-' + i);
                bsAddOns.spacer['factor-' + i] = parseFloat(cssRootStyle.getPropertyValue('--bsAddOns-spacer-factor-' + i));
            }

            bsAddOns.safeArea = {
                topStr: cssRootStyle.getPropertyValue('--safe-area-inset-top') || 0,
                rightStr: cssRootStyle.getPropertyValue('--safe-area-inset-right') || 0,
                bottomStr: cssRootStyle.getPropertyValue('--safe-area-inset-bottom') || 0,
                leftStr: cssRootStyle.getPropertyValue('--safe-area-inset-left') || 0,
            };
            bsAddOns.safeArea.top = Helper.isString(bsAddOns.safeArea.topStr) && bsAddOns.safeArea.topStr.endsWith('px')
                ? parseInt(bsAddOns.safeArea.topStr) : bsAddOns.safeArea.topStr;
            bsAddOns.safeArea.right = Helper.isString(bsAddOns.safeArea.rightStr) && bsAddOns.safeArea.rightStr.endsWith('px')
                ? parseInt(bsAddOns.safeArea.rightStr) : bsAddOns.safeArea.rightStr;
            bsAddOns.safeArea.bottom = Helper.isString(bsAddOns.safeArea.bottomStr) && bsAddOns.safeArea.bottomStr.endsWith('px')
                ? parseInt(bsAddOns.safeArea.bottomStr) : bsAddOns.safeArea.bottomStr;
            bsAddOns.safeArea.left = Helper.isString(bsAddOns.safeArea.leftStr) && bsAddOns.safeArea.leftStr.endsWith('px')
                ? parseInt(bsAddOns.safeArea.leftStr) : bsAddOns.safeArea.leftStr;
            bsAddOns.safeArea.start = bsAddOns.safeArea.left;
            bsAddOns.safeArea.end = bsAddOns.safeArea.right;

            bsAddOns.breakpoints = [];
            for (breakpointName of (cssRootStyle.getPropertyValue('--bsAddOns-breakpoint-names') ?? '').split(', ')) {
                value = {
                    name: breakpointName,
                    minWidth: parseInt(
                        cssRootStyle.getPropertyValue('--bsAddOns-breakpoint-' + breakpointName + '-min'),
                    ),
                    maxWidth: parseInt(
                        cssRootStyle.getPropertyValue('--bsAddOns-breakpoint-' + breakpointName + '-max'),
                    ),
                };
                if (isNaN(value.maxWidth))
                    value.maxWidth = Infinity;
                bsAddOns.breakpoints.push(value);
            }
            bsAddOns.breakpoints.unshift({
                name: '',
                minWidth: 0,
                maxWidth: bsAddOns.breakpoints[0].minWidth - 1,
            });

            let sel = [];
            for (let bp of bsAddOns.breakpoints) {
                sel.push('.table-list' + (Helper.exists(bp.name, true) ? '-' + bp.name : ''));
            }
            $(sel.join(', ')).each(function (_, that) {
                let table = $(that),
                    headers = [],
                    node;
                for (node of table.find('thead tr:first-child th, thead tr:first-child th')) {
                    headers.push($(node).html());
                }
                table.find('tbody tr').each(function (_, that) {
                    let tr = $(that),
                        nodes = tr.find('th, td'),
                        i;
                    for (i = 0; i < nodes.length; i++) {
                        $(nodes[i]).attr('data-bs-table-list-header', headers[i]);
                    }
                });
            });

            firstInit = false;
        },

        enableTooltips: function (selector = '[data-bs-toggle="tooltip"]', options = {}) {
            let tooltipTriggerList, tooltipList;

            tooltipTriggerList = $(selector).toArray();
            tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                if (Helper.exists($(tooltipTriggerEl).attr('data-bs-title'), true))
                    return new bootstrap.Tooltip(tooltipTriggerEl, options);
            });
            return tooltipList;
        },

        enablePopovers: function (selector = '[data-bs-toggle="popover"]', options = {}) {
            let popoverTriggerList, popoverList;

            popoverTriggerList = $(selector).toArray();
            popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl, options);
            });
            return popoverList;
        },

        /**
         * Adds some optional backdrop settings to Modals.
         */
        addModalBackdropSettings: function () {
            $('body').on('show.bs.modal', function (e) {
                let target = $(e.target),
                    classes = '',
                    BACKDROP_COLOR = target.data('backdrop-color'),
                    BACKDROP_OPACITY = target.data('backdrop-opacity');

                $('.bs-special-modal-backdrop').remove();

                if (target.length === 0 || target.data('backdrop') === 'false')
                    return;

                if (typeof BACKDROP_COLOR !== 'undefined')
                    classes +=
                        '.modal-backdrop { background-color: ' + BACKDROP_COLOR + ';} ';
                if (typeof BACKDROP_OPACITY !== 'undefined')
                    classes +=
                        '.modal-backdrop.show{opacity: ' + BACKDROP_OPACITY + ';} ';

                classes = '<style type="text/css" class="bs-special-modal-backdrop">' + classes + '</style>';
                $(classes).insertAfter('head link[type="text/css"]:last');
            });
        },

        /**
         * Adds some optional draggable settings to Modals.
         *
         */
        addModalDraggableSettings: function () {
            $('body').on('show.bs.modal', function (e) {
                let target = $(e.target),
                    content = target.find('.modal-content');

                if (target.length === 0 || !target.hasClass('modal-draggable'))
                    return;

                if (!Helper.exists(content.drags) || !Helper.isFunction(content.drags)) {
                    console.error('$(...).drags function is not defined. You should extend jQuery too!');
                    return;
                }

                if (target.hasClass('modal-draggable-reset'))
                    content.css({
                        top: '',
                        left: '',
                    });

                if (content.hasClass('draggable')) // eventHandler is already bound
                    return;

                content.drags({
                    handle: '.modal-header',
                    inContainer: 'window',
                    opacity: 0.7,
                    cursor: 'move',
                });
            });
        },

        Progress: {
            getValue(selector) {
                let bar = $(selector).find('.progress-bar').addBack('.progress-bar'),
                    minval = bar.attr('aria-valuemin') || 0,
                    maxval = bar.attr('aria-valuemax') || 100,
                    aria_val = bar.attr('aria-valuenow') || 0,
                    css_val = bar[0].style.width;

                minval = parseFloat(minval);
                maxval = parseFloat(maxval);
                aria_val = parseFloat(aria_val);
                css_val = parseFloat(css_val);

                css_val = minval + (maxval - minval) * css_val / 100;

                if (css_val !== aria_val)
                    bar.attr('aria-valuenow', css_val);

                return css_val;
            },

            getPercent(selector) {
                let bar = $(selector).find('.progress-bar').addBack('.progress-bar'),
                    minval = bar.attr('aria-valuemin') || 0,
                    maxval = bar.attr('aria-valuemax') || 100,
                    aria_val = bar.attr('aria-valuenow') || 0,
                    css_val = bar[0].style.width;

                minval = parseFloat(minval);
                maxval = parseFloat(maxval);
                aria_val = parseFloat(aria_val);
                css_val = parseFloat(css_val);

                aria_val = (aria_val - minval) / (maxval - minval) * 100;

                if (css_val !== aria_val)
                    bar.attr('aria-valuenow', minval + (maxval - minval) * css_val / 100);

                return css_val;
            },

            setPercent: function (selector, percent, andSetText = false, valAsText = false, preText = '', postText = '') {
                let bar = $(selector).find('.progress-bar').addBack('.progress-bar'),
                    minval = bar.attr('aria-valuemin') || 0,
                    maxval = bar.attr('aria-valuemax') || 100,
                    value;

                minval = parseFloat(minval);
                maxval = parseFloat(maxval);

                if (percent < 0) percent = 0;
                if (percent > 100) percent = 100;

                value = minval + (maxval - minval) * percent / 100;

                bar.attr('aria-valuenow', value);
                bar.css('width', percent + '%');

                if (andSetText)
                    bsAddOns.Progress.setText(
                        selector,
                        preText + (valAsText ? value : percent + '%') + postText,
                        true,
                    );

                return value;
            },

            setValue: function (selector, value, andSetText = false, valAsText = false, preText = '', postText = '') {
                let bar = $(selector).find('.progress-bar').addBack('.progress-bar'),
                    minval = bar.attr('aria-valuemin') || 0,
                    maxval = bar.attr('aria-valuemax') || 100,
                    percent;

                minval = parseFloat(minval);
                maxval = parseFloat(maxval);

                percent = (value - minval) / (maxval - minval) * 100;

                return bsAddOns.Progress.setPercent(selector, percent, andSetText, valAsText, preText, postText);
            },

            setMin: function (selector, newmin) {
                $(selector).find('.progress-bar').addBack('.progress-bar').attr('aria-valuemin', newmin);
            },

            getMin: function (selector) {
                return $(selector).find('.progress-bar').addBack('.progress-bar').attr('aria-valuemin');
            },

            setMax: function (selector, newmin) {
                $(selector).find('.progress-bar').addBack('.progress-bar').attr('aria-valuemax', newmin);
            },

            getMax: function (selector) {
                return $(selector).find('.progress-bar').addBack('.progress-bar').attr('aria-valuemax');
            },

            setColor: function (selector, color_class) {
                $(selector).find('.progress-bar').addBack('.progress-bar')
                    .removeClass()
                    .addClass('progress-bar ' + color_class);
            },

            getText: function (selector) {
                return $(selector).find('.progress-bar').addBack('.progress-bar').text();
            },

            setText: function (selector, text, html = false) {
                if (html)
                    $(selector).find('.progress-bar').addBack('.progress-bar').html(text);
                else
                    $(selector).find('.progress-bar').addBack('.progress-bar').text(text);
            },
        },

        /**
         * This class ensures that only one modal is open at any given time.
         * If another modal is opened, it remembers the old modal
         * and opens it again as soon as it is closed itself.
         */
        SingleModal: class {

            /**
             * @private
             * @type {String}
             */
            _id = '';
            /**
             * @private
             * @type {String}
             */
            _selector = '';
            /**
             * @private
             * @type {Object}
             */
            _modal = undefined;

            /**
             * @param {String} selector
             * @param {Boolean} andShow
             * @param {Boolean} initializeOnReadyDocument
             */
            constructor(selector, andShow = false, initializeOnReadyDocument = false) {
                let that = this,
                    sel = selector,
                    modal,
                    lastOpenenedModal;

                function init() {
                    modal = $(sel);

                    if (!Helper.exists(sel, true))
                        throw Error('There is no selector given.');
                    if (modal.length === 0)
                        throw Error('There is no object with selector "' + sel + '".');
                    if (!modal.hasClass('modal'))
                        throw Error('Object "' + sel + '" does not have class "modal".');

                    modal = modal.first();
                    that._modal = modal;
                    that._id = modal.attr('id');

                    if (modal.data('bsaddon.singlemodal')) {
                        console.warn('An object of the type SingleModal already exists for the specified modal. This was returned.');
                        return modal.data('bsaddon.singlemodal');
                    }

                    modal
                        .on('show.bs.modal', function () {
                            lastOpenenedModal = $('.modal.show')[0];
                            if (Helper.exists(lastOpenenedModal)) {
                                lastOpenenedModal = $(lastOpenenedModal);
                                lastOpenenedModal.modal('hide');
                            }
                        })
                        .on('hidden.bs.modal', function () {
                            if (Helper.exists(lastOpenenedModal))
                                $(lastOpenenedModal).modal('show');
                        });

                    // final call
                    modal.data('bsaddon.singlemodal', this);
                    if (andShow) this.show();
                }

                // ---------------------
                // define attributes
                // ---------------------

                this._selector = selector;
                this._modal = null;
                this._id = '';

                // ---------------------
                // define methods
                // ---------------------

                /**
                 * @returns {String}
                 */
                this.getSelector = () => {return sel;};

                /**
                 * @returns {jQuery}
                 */
                this.getModaljQuery = () => {return modal;};

                /**
                 * @returns {jQuery}
                 */
                this.getLastOpenedjQuery = () => {return lastOpenenedModal;};

                /**
                 * Shows the modal.
                 */
                this.show = function () {
                    modal.modal('show');
                };

                /**
                 * Ends showing modal. Does not delete the modal HTML element!
                 */
                this.hide = function () {
                    modal.modal('hide');
                };

                /**
                 * Deletes the HTML element and sets Methods to empty methods.
                 *
                 * @param {Boolean} andRemoveModal
                 */
                this.destroy = function (andRemoveModal = true) {
                    let i;

                    that.hide();
                    if (andRemoveModal)
                        window.setTimeout(function () {
                            modal.modal('dispose').remove();
                        }, 800);

                    for (i of that.getMethods())
                        if (i !== 'getMethods' && i !== 'getAttributes')
                            that[i] = function () {
                                throw Error('Object does not exist anymore.');
                            };
                };

                /**
                 * @returns {Array}
                 */
                this.getMethods = function () {
                    let i, result = [];
                    for (i in that)
                        if (Helper.isFunction(that[i]) && i.substr(0, 1) !== '_')
                            result.push(i);
                    return result;
                };

                /**
                 * @returns {Array}
                 */
                this.getAttributes = function () {
                    let i, result = [];
                    for (i in that)
                        if (!Helper.isFunction(that[i]) && i.substr(0, 1) !== '_')
                            result.push(i);
                    return result;
                };

                // ---------------------
                // initialize
                // ---------------------

                if (initializeOnReadyDocument) {
                    $(document).ready(init);
                } else {
                    init();
                }
            }
        },
    });

    Helper.extend(bsAddOns, (function () {
        const contentsAndDefaults = {
            icon: '!',
            title: 'Please Confirm',
            text: '...',
            continue: 'Continue',
            abort: 'Abort',
            backdrop: 'static',
        }, handlersAndDefaults = {
            onOpen: () => {},
            onClose: () => {},
            onContinue: () => {},
            onAbort: () => {},
        }, classesAndDefaults = {
            icon: '',
            continue: 'btn btn-red',
            abort: 'btn btn-grey',
            modal: '',
        }, selectorsAndDefaults = { // Must contain the same keys as contentsAndDefaults
            icon: '.modal-icon',
            title: '.modal-title-text',
            text: '.modal-body',
            continue: 'button.modal-continue',
            abort: 'button.modal-abort',
        };

        let targetForNewModals = 'body';

        let resolve = function (object, defaults) {
            let resolved = {}, id;
            for (id in defaults) {
                resolved[id] = defaults[id];
                if (Helper.exists(object[id])) resolved[id] = object[id];
            }
            return resolved;
        };

        return {
            Confirmer: class extends bsAddOns.SingleModal {

                // Safari does not allow static variables!!

                static getTargetForNewModals() {return targetForNewModals;};

                static setTargetForNewModals(target) {targetForNewModals = target;};

                static getPossibleContents() { return Object.keys(contentsAndDefaults); };

                static getPossibleHandlers() { return Object.keys(handlersAndDefaults);};

                static getPossibleClasses() { return Object.keys(classesAndDefaults);};

                static getPossibleSelectors() { return Object.keys(selectorsAndDefaults);};

                /**
                 * @param {Object} contents For values see {@see bsAddOns.Confirmer.getPossibleContents}.
                 * @param {Object} handlers For values see {@see bsAddOns.Confirmer.getPossiblehHandlers}.
                 * @param {Object} classes  For values see {@see bsAddOns.Confirmer.getPossibleClasses}.
                 * @param {String|undefined} modalSelector If this is undefined a new modal is created and appended to the body.
                 * @param {Object|undefined} innerSelectors Selectors for modal. For values see {@see bsAddOns.Confirmer.getPossibleSelectors}.
                 */
                constructor(contents, handlers, classes, modalSelector = undefined, innerSelectors = undefined) {
                    let modal, key, object;

                    contents = resolve(contents, contentsAndDefaults);
                    handlers = resolve(handlers, handlersAndDefaults);
                    classes = resolve(classes, classesAndDefaults);

                    if (Helper.exists(modalSelector, true)) {
                        // Modal does already exist. Use this and selectors from innerSelectors.

                        innerSelectors = resolve(innerSelectors, selectorsAndDefaults);
                        modal = $(modalSelector);

                    } else {
                        // Use default modal with selectors from selectorsAndDefaults.

                        modalSelector = 'confirmer-' + (new Date).getTime();
                        innerSelectors = selectorsAndDefaults;
                        modal = $( // Attention here have to be used the selectors from selectorsAndDefaults!!!
                            '<div class="modal fade" id="' + modalSelector + '" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true">\n'
                            + '    <div class="modal-dialog modal-dialog-centered" role="document">\n'
                            + '        <div class="modal-content">\n'
                            + '            <div class="modal-header">\n'
                            + '                <h3 class="modal-title d-flex align-items-center">\n'
                            + '                    <span class="modal-icon me-1"></span><span class="modal-title-text"></span>\n'
                            + '                </h3>\n'
                            + '                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n'
                            + '            </div>\n'
                            + '            <div class="modal-body"></div>\n'
                            + '            <div class="modal-footer">\n'
                            + '                <button type="button" class="modal-abort" data-bs-dismiss="modal"></button>\n'
                            + '                <button type="button" class="modal-continue" data-bs-dismiss="modal"></button>\n'
                            + '            </div>\n'
                            + '        </div>\n'
                            + '    </div>\n'
                            + '</div>',
                        );
                        modalSelector = '#' + modalSelector;
                        modal.appendTo(targetForNewModals);
                    }

                    super(modalSelector, false);

                    modal.addClass(classes.modal);

                    for (key in innerSelectors) {
                        object = modal.find(innerSelectors[key]);
                        object.html(contents[key]);
                        if (Helper.exists(classes[key])) {
                            object.removeClass(object.attr('data-bs-used-classes'));
                            object.addClass(classes[key]);
                            object.attr('data-bs-used-classes', classes[key]);
                        }
                    }

                    modal.attr('data-bs-backdrop', contents.backdrop);
                    modal
                        .on('show.bs.modal', handlers.onOpen)
                        .on('hidden.bs.modal', handlers.onClose);
                    modal.find(innerSelectors.continue).on('click', handlers.onContinue);
                    modal.find(innerSelectors.abort).on('click', handlers.onAbort);

                    modal.modal('show');
                }
            },

            /**
             * Author and copyright: Stefan Haack (https://shaack.com)
             * Repository: https://github.com/shaack/bootstrap-detect-breakpoint
             * License: MIT, see file 'LICENSE'
             */
            getBreakpoint: function () {
                let i, bp;

                for (i = this.breakpoints.length - 1; i >= 0; i--) {
                    bp = this.breakpoints[i];
                    if (window.matchMedia('(min-width: ' + bp.minWidth + 'px)').matches) {
                        return bp;
                    }
                }
                return this.breakpoints[0];
            },
        };

    })());

    $(document).ready(bsAddOns.init);
    $(window).resize(bsAddOns.init);

})(JXG);