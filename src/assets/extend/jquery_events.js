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

(function ($) {
    const EVENT_NAME = {
        HOLD: 'hold',
        HOLD_ABORT: 'holdabort',
        SWIPE: 'swipe',
        SWIPE_UP: 'swipeup',
        SWIPE_DOWN: 'swipedown',
        SWIPE_LEFT: 'swipeleft',
        SWIPE_RIGHT: 'swiperight',
    };

    const $document = $(document);

    function triggerCustomEvent(object, eventType, event, bubble = false) {
        event.type = eventType;
        if (bubble)
            $.event.trigger(event, undefined, object);
        else
            $.event.dispatch.call(object, event);
    }

    $.isBrowser = function () {
        return typeof window === 'object' && typeof document === 'object';
    };

    $.supportsPointerEvents = function () {
        return !!(
            $.isBrowser() &&
            window.navigator &&
            (
                window.PointerEvent || // Chrome/Edge/IE11+
                window.navigator.pointerEnabled || // IE11+
                window.navigator.msPointerEnabled
            )
        );
    };

    $.isTouchDevice = function () {
        return $.isBrowser() && window.ontouchstart !== undefined && 'ontouchend' in document;
    };

    const BASIC = (function () {
        if ($.supportsPointerEvents())
            return {
                DOWN: 'pointerdown',
                UP: 'pointerup',
                MOVE: 'pointermove',
                CLICK: 'click',
            };
        else if ($.isTouchDevice())
            return {
                DOWN: 'touchstart',
                UP: 'touchend',
                MOVE: 'touchmove',
                CLICK: 'click',
            };
        else
            return {
                DOWN: 'mousedown',
                UP: 'mouseup',
                MOVE: 'mousemove',
                CLICK: 'click',
            };
    })();

    // setup new event shortcuts
    ////////////////////////////

    $.each(Object.values(EVENT_NAME), function (i, name) {
        $.fn[name] = function (fn) {
            return fn ? this.bind(name, fn) : this.trigger(name);
        };
    });

    $.event.special[EVENT_NAME.HOLD] = {
        /**
         * Duration of holding.
         */
        duration: 1000,

        /**
         * Maximal movement in pixels.
         * If set to 0 no movement is allowed.
         * If set to -1 every movement is allowed.
         */
        maxMovement: 0,

        /**
         * Define, what to do on a second down event.
         * Possible values: 'abort' (default), 'ignore', 'continue' (be careful!)
         */
        doOnSecondDown: 'abort',

        setup: function () {
            let that = this,
                $this = $(that),
                downHandler, upHandler, moveHandler, clickHandler,
                downEvent, moveEvent,
                timer = null,
                isHold = false;

            function clearTimer() {
                if (timer) {
                    clearTimeout(timer);
                    $this.on(BASIC.CLICK, clickHandler);
                    timer = null;
                    triggerCustomEvent(that, EVENT_NAME.HOLD_ABORT, downEvent);
                }
                downEvent = undefined;
                $this.unbind(BASIC.MOVE, moveHandler);
            }

            downHandler = function (event) {
                if (downEvent) {
                    switch ($.event.special[EVENT_NAME.HOLD].doOnSecondDown) {
                        case 'ignore':
                            return;
                        case 'continue':
                            break;
                        case'abort':
                        default:
                            clearTimer();
                            return;
                    }
                }

                downEvent = event;

                $this.on(BASIC.MOVE, moveHandler);
                $this.on(BASIC.UP, upHandler);

                timer = setTimeout(function () {
                    timer = null;
                    triggerCustomEvent(that, EVENT_NAME.HOLD, downEvent);
                }, $.event.special[EVENT_NAME.HOLD].duration);
            };

            upHandler = function (event) {
                clearTimer();
            };

            moveHandler = function (event) {
                let t, sum = 0;
                moveEvent = event;

                if (
                    $.event.special[EVENT_NAME.HOLD].maxMovement >= 0 &&
                    downEvent && downEvent.clientX &&
                    moveEvent && moveEvent.clientX
                ) {
                    t = downEvent.clientX - moveEvent.clientX;
                    sum += t * t;
                    t = downEvent.clientY - moveEvent.clientY;
                    sum += t * t;
                    if (Math.sqrt(sum) > $.event.special[EVENT_NAME.HOLD].maxMovement)
                        clearTimer();
                }
            };

            clickHandler = function (event) {
                clearTimer();
                $this
                    .off(BASIC.CLICK, clickHandler)
                    .off(BASIC.UP, upHandler);

                if (isHold)
                    event.preventDefault();
            };

            $this.on(BASIC.DOWN, downHandler);
        },

        teardown: function () {
            let $this = $(this);
            $this
                .unbind(BASIC.DOWN)
                .unbind(BASIC.UP)
                .unbind(BASIC.MOVE)
                .unbind(BASIC.CLICK);
        },
    };

    // Also handles swipeup, swipedown, swipeleft, swiperight
    $.event.special[EVENT_NAME.SWIPE] = {

        /**
         * More than this horizontal displacement, and we will suppress scrolling.
         */
        scrollSupressionThreshold: 30,

        /**
         * More time than this, and it isn't a swipe.
         */
        durationThreshold: 1000,

        /**
         * Swipe horizontal displacement must be more than this.
         */
        horizontalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

        /**
         * Swipe vertical displacement must be less than this.
         */
        verticalDistanceThreshold: window.devicePixelRatio >= 2 ? 15 : 30,

        getLocation: function (event) {
            var winPageX = window.pageXOffset,
                winPageY = window.pageYOffset,
                x = event.clientX,
                y = event.clientY;

            if (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY) ||
                event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX)) {

                // iOS4 clientX/clientY have the value that should have been
                // in pageX/pageY. While pageX/page/ have the value 0
                x = x - winPageX;
                y = y - winPageY;
            } else if (y < (event.pageY - winPageY) || x < (event.pageX - winPageX)) {

                // Some Android browsers have totally bogus values for clientX/Y
                // when scrolling/zooming a page. Detectable since clientX/clientY
                // should never be smaller than pageX/pageY minus page scroll
                x = event.pageX - winPageX;
                y = event.pageY - winPageY;
            }

            return {
                x: x,
                y: y,
            };
        },

        start: function (event) {
            var data = event.originalEvent.touches ?
                    event.originalEvent.touches[0] : event,
                location = $.event.special[EVENT_NAME.SWIPE].getLocation(data);
            return {
                time: (new Date()).getTime(),
                coords: [location.x, location.y],
                origin: $(event.target),
            };
        },

        stop: function (event) {
            var data = event.originalEvent.touches ?
                    event.originalEvent.touches[0] : event,
                location = $.event.special[EVENT_NAME.SWIPE].getLocation(data);
            return {
                time: (new Date()).getTime(),
                coords: [location.x, location.y],
            };
        },

        handleSwipe: function (start, stop, thisObject, origTarget) {
            var direction;
            if (stop.time - start.time < $.event.special[EVENT_NAME.SWIPE].durationThreshold &&
                Math.abs(start.coords[0] - stop.coords[0]) > $.event.special[EVENT_NAME.SWIPE].horizontalDistanceThreshold &&
                Math.abs(start.coords[1] - stop.coords[1]) < $.event.special[EVENT_NAME.SWIPE].verticalDistanceThreshold) {
                direction = start.coords[0] > stop.coords[0] ? 'swipeleft' : 'swiperight';

                triggerCustomEvent(thisObject, 'swipe', $.Event('swipe', {target: origTarget, swipestart: start, swipestop: stop, direction: direction.replace('swipe', '')}), true);
                triggerCustomEvent(thisObject, direction, $.Event(direction, {target: origTarget, swipestart: start, swipestop: stop, direction: direction.replace('swipe', '')}), true);
                return true;
            } else if (stop.time - start.time < $.event.special[EVENT_NAME.SWIPE].durationThreshold &&
                Math.abs(start.coords[0] - stop.coords[0]) < $.event.special[EVENT_NAME.SWIPE].horizontalDistanceThreshold &&
                Math.abs(start.coords[1] - stop.coords[1]) > $.event.special[EVENT_NAME.SWIPE].verticalDistanceThreshold) {
                direction = start.coords[1] > stop.coords[1] ? 'swipeup' : 'swipedown';

                triggerCustomEvent(thisObject, 'swipe', $.Event('swipe', {target: origTarget, swipestart: start, swipestop: stop, direction: direction.replace('swipe', '')}), true);
                triggerCustomEvent(thisObject, direction, $.Event(direction, {target: origTarget, swipestart: start, swipestop: stop, direction: direction.replace('swipe', '')}), true);
                return true;
            }
            return false;

        },

        // This serves as a flag to ensure that at most one swipe event event is
        // in work at any given time
        eventInProgress: false,

        setup: function () {
            var events,
                thisObject = this,
                $this = $(thisObject),
                context = {};

            // Retrieve the events data for this element and add the swipe context
            events = $.data(this, 'mobile-events');
            if (!events) {
                events = {length: 0};
                $.data(this, 'mobile-events', events);
            }
            events.length++;
            events.swipe = context;

            context.start = function (event) {

                // Bail if we're already working on a swipe event
                if ($.event.special[EVENT_NAME.SWIPE].eventInProgress) {
                    return;
                }
                $.event.special[EVENT_NAME.SWIPE].eventInProgress = true;

                var stop,
                    start = $.event.special[EVENT_NAME.SWIPE].start(event),
                    origTarget = event.target,
                    emitted = false;

                context.move = function (event) {
                    if (!start || event.isDefaultPrevented()) {
                        return;
                    }

                    stop = $.event.special[EVENT_NAME.SWIPE].stop(event);
                    if (!emitted) {
                        emitted = $.event.special[EVENT_NAME.SWIPE].handleSwipe(start, stop, thisObject, origTarget);
                        if (emitted) {

                            // Reset the context to make way for the next swipe event
                            $.event.special[EVENT_NAME.SWIPE].eventInProgress = false;
                        }
                    }
                    // prevent scrolling
                    if (Math.abs(start.coords[0] - stop.coords[0]) > $.event.special[EVENT_NAME.SWIPE].scrollSupressionThreshold) {
                        event.preventDefault();
                    }
                };

                context.stop = function () {
                    emitted = true;

                    // Reset the context to make way for the next swipe event
                    $.event.special[EVENT_NAME.SWIPE].eventInProgress = false;
                    $document.off(touchMoveEvent, context.move);
                    context.move = null;
                };

                $document.on(touchMoveEvent, context.move)
                    .one(touchStopEvent, context.stop);
            };
            $this.on(touchStartEvent, context.start);
        },

        teardown: function () {
            var events, context;

            events = $.data(this, 'mobile-events');
            if (events) {
                context = events.swipe;
                delete events.swipe;
                events.length--;
                if (events.length === 0) {
                    $.removeData(this, 'mobile-events');
                }
            }

            if (context) {
                if (context.start) {
                    $(this).off(touchStartEvent, context.start);
                }
                if (context.move) {
                    $document.off(touchMoveEvent, context.move);
                }
                if (context.stop) {
                    $document.off(touchStopEvent, context.stop);
                }
            }
        },
    };
    /* $.each({
         swipeleft: 'swipe.left',
         swiperight: 'swipe.right',
         swipeup: 'swipe.up',
         swipedown: 'swipe.down',
     }, function (event, sourceEvent) {

         $.event.special[event] = {
             setup: function () {
                 $(this).bind(sourceEvent, $.noop);
             },
             teardown: function () {
                 $(this).unbind(sourceEvent);
             },
         };
     }); */

    return $.event.special;
})(jQuery);
