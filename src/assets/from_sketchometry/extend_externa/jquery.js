/*
 Copyright 2011-2025

 Alfred Wassermann,
 Andreas Walter,
 Michael Gerhaeuser,
 Carsten Miller,
 Matthias Ehmann,
 Heiko Vogel

 This code isn't licensed yet.
 */

(function ($) {

    /* Enable the text selection functionality */
    // $.fn.enableSelection = function () {
    //     return this.each(function () {
    //         $(this).removeAttr('unselectable')
    //             .css({
    //                 '-moz-user-select': 'text',
    //                 '-webkit-user-select': 'text',
    //                 '-khtml-user-select': 'text',
    //                 '-o-user-select': 'text',
    //                 'user-select': 'text'
    //             });
    //
    //     });
    // };

    /* Disable the text selection functionality */
    $.fn.disableSelection = function () {
        return this.each(function () {
            $(this).attr('unselectable', 'on')
                .css({
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    '-khtml-user-select': 'none',
                    '-o-user-select': 'none',
                    'user-select': 'none',
                });

        });
    };

    /* Compute the height of an elements margins, borders and paddings */
    $.fn.mbpHeight = function () {
        var height = parseInt(this.css('padding-top'));
        height += parseInt(this.css('padding-bottom'));
        height += parseInt(this.css('margin-top'));
        height += parseInt(this.css('margin-bottom'));
        height += parseInt(this.css('border-top-width'));
        height += parseInt(this.css('border-bottom-width'));
        return height;
    };

    /* Compute the width of an elements margins, borders and paddings */
    $.fn.mbpWidth = function () {
        var width = parseInt(this.css('padding-left'));
        width += parseInt(this.css('padding-right'));
        width += parseInt(this.css('margin-left'));
        width += parseInt(this.css('margin-right'));
        width += parseInt(this.css('border-left-width'));
        width += parseInt(this.css('border-right-width'));
        return width;
    };

    /* Compute the outer height of an element including its margins, paddings and borders */
    /*$.fn.outerHeight = function () {
        return parseInt(this.css('height')) + this.mbpHeight();
    };*/

    /* Compute the outer width of an element including its margins, paddings and borders */
    /*$.fn.outerWidth = function () {
        return parseInt(this.css('width')) + this.mbpWidth();
    };*/

    $.fn.first = function () {
        return $(this.toArray().first());
    };

    $.fn.middle = function () {
        return $(this.toArray().middle());
    };

    $.fn.last = function () {
        return $(this.toArray().last());
    };

    $.fn.findSelf = function (selector) {
        return this.find(selector).addBack().filter(selector);
    };

    $.fn.outerHTML = function () {
        let el, str = '';

        for (el of this) {
            str += $(el).clone().wrap('<div/>').parent().html();
        }

        return str;
    };

    $.fn.toString = function () {
        return this.outerHTML();
    };

    /**
     * Use this extension to avoid having to import the entire jQuery UI library,
     * as this could lead to cross-reactions.
     *
     * https://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
     * with adaptions
     */
    $.fn.drags = function (opt) {
        var $el, that = this,
            down_events = 'mousedown pointerdown touchstart',
            move_events = 'mousemove pointermove touchmove',
            up_events = 'mouseup pointerup touchend';

        opt = $.extend({
            handle: false,
            cursor: 'auto',
            inContainer: false, // [ top, right, bottom, left ] || false || 'window'
            opacity: false,
            zIndex: 1050,
        }, opt);

        if (opt.handle === false) {
            $el = this;
        } else {
            $el = this.find(opt.handle);
        }

        this
            .addClass('draggable')
            .css('z-index', opt.zIndex);

        $(window).resize(function () {
            let pos = that.offset();
            pos = checkIfInBox(pos.top, pos.left, that.outerHeight(), that.outerWidth(), opt.inContainer);
            that.offset({
                top: pos.top,
                left: pos.left,
            });
        });

        $el
            .css('cursor', opt.cursor)

            .on(down_events, function (e) {
                var $drag;

                if (opt.handle === '') {
                    $drag = $(this).addClass('dragged');
                } else {
                    $drag = $(this).addClass('active-handle').parent().addClass('dragged');
                }

                var z_idx = $drag.css('z-index'),
                    drg_h = $drag.outerHeight(),
                    drg_w = $drag.outerWidth(),
                    pos_y = $drag.offset().top + drg_h - e.pageY,
                    pos_x = $drag.offset().left + drg_w - e.pageX;

                $drag
                    .css('z-index', opt.zIndex)
                    .css('opacity', opt.opacity)
                    .parents()
                    .on(move_events, function (e) {
                        var top = e.pageY + pos_y - drg_h,
                            left = e.pageX + pos_x - drg_w,
                            pos;

                        pos = checkIfInBox(top, left, drg_h, drg_w, opt.inContainer);

                        $('.dragged')
                            .offset({
                                top: pos.top,
                                left: pos.left,
                            })
                            .on(up_events, function () {
                                $(this)
                                    .removeClass('dragged')
                                    .css('z-index', z_idx)
                                    .css('opacity', 1);
                            });
                    });
                e.preventDefault(); // disable selection
            })

            .on(up_events, function () {
                if (opt.handle === '') {
                    $(this).removeClass('dragged');
                } else {
                    $(this).removeClass('active-handle').parent().removeClass('dragged');
                }
            });

        function checkIfInBox(top, left, height, width, container) {
            let box, t, l;

            switch (container) {
                case false:
                    return {
                        top: top,
                        left: left,
                    };
                case 'window':
                    box = [0, $(window).width(), $(window).height(), 0];
                    break;
                default:
                    box = container;
            }
            /** box = [ top, right, bottom, left ] */

            t = top;
            l = left;

            if (top < box[0]) t = box[0];
            if (left < box[3]) l = box[3];
            if (top + height > box[2]) t = box[2] - height;
            if (left + width > box[1]) l = box[1] - width;

            return {
                top: t,
                left: l,
            };
        }

        return $el;
    };

    // Escape regex chars with \
    var escape = function (text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    };

    // For those who need them (< IE 9), add support for CSS functions
    var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
    if (!isStyleFuncSupported) {
        CSSStyleDeclaration.prototype.getPropertyValue = function (a) {
            return this.getAttribute(a);
        };
        CSSStyleDeclaration.prototype.setProperty = function (styleName, value, priority) {
            this.setAttribute(styleName, value);
            var priority = typeof priority != 'undefined' ? priority : '';
            if (priority != '') {
                // Add priority manually
                var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
                    '(\\s*;)?', 'gmi');
                this.cssText =
                    this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
            }
        };
        CSSStyleDeclaration.prototype.removeProperty = function (a) {
            return this.removeAttribute(a);
        };
        CSSStyleDeclaration.prototype.getPropertyPriority = function (styleName) {
            var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
                'gmi');
            return rule.test(this.cssText) ? 'important' : '';
        };
    }

    // The style function
    $.fn.cssStyle = function (styleName, value, priority) {
        // DOM node
        var node = this.get(0);
        // Ensure we have a DOM node
        if (typeof node == 'undefined') {
            return this;
        }
        // CSSStyleDeclaration
        var style = this.get(0).style;
        // Getter/Setter
        if (typeof styleName != 'undefined') {
            if (typeof value != 'undefined') {
                // Set style property
                priority = typeof priority != 'undefined' ? 'important' : '';
                style.setProperty(styleName, value, priority);
                return this;
            } else {
                // Get style property
                return style.getPropertyValue(styleName);
            }
        } else {
            // Get CSSStyleDeclaration
            return style;
        }
    };

    $.fn.scrollIntoView = function (options = {}, index = 0) {
        return this.get(index).scrollIntoView(options);
    };

})(jQuery);
