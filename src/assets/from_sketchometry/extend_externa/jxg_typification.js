/*
  Copyright 2022

  Andreas Walter

  Center for Mobile Learning with Digital Technologies
  Universität Bayreuth
  Universitätsstraße 30
  95447 Bayreuth

  This code isn't licensed yet.
*/

'use strict';

window.JXG = window.JXG || {};

JXG.extend(JXG, (function () {
    const CLASS_PREFIX = 'OBJECT_CLASS_';
    const TYPE_PREFIX = 'OBJECT_TYPE_';

    let CLASSES = {};
    let TYPES = {};

    let i;

    for (i in JXG) {
        if (!JXG.hasOwnProperty(i))
            continue;
        if (i.startsWith(CLASS_PREFIX))
            CLASSES[JXG[i]] = i;
        if (i.startsWith(TYPE_PREFIX))
            TYPES[JXG[i]] = i;
    }

    return {
        resolveObjectClass: function (objectOrClass, withPrefix = true) {
            let cls = objectOrClass;
            if (JXG.isObject(cls))
                cls = objectOrClass.elementClass;

            if (withPrefix)
                return CLASSES[cls];
            else
                return CLASSES[cls].replace(CLASS_PREFIX, '');
        },

        resolveObjectType: function (objectOrType, withPrefix = true) {
            let type = objectOrType;
            if (JXG.isObject(type))
                type = objectOrType.type;

            if (withPrefix)
                return TYPES[type];
            else
                return TYPES[type].replace(TYPE_PREFIX, '');
        },
    };
})());

JXG.GeometryElement.prototype.resolveClass = function (withPrefix = false) {
    return JXG.resolveObjectClass(this, withPrefix);
};

JXG.GeometryElement.prototype.resolveType = function (withPrefix = false) {
    return JXG.resolveObjectType(this, withPrefix);
};

JXG.GeometryElement.prototype.resolveElType = function () {
    return '' + this.elType;
};