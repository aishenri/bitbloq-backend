'use strict';

var Component = require('./component.model.js');

exports.getAll = function(next) {
    Component.find({}, next);
};

exports.getAllWithoutDevelopment = function(next) {
    Component.find({})
        .where('underDevelopment').in([false, undefined, null])
        .exec(next);
};

exports.getComponentsInArray = function(arrayId, next) {
    if (arrayId.length > 0) {
        Component.find({})
            .where('_id').in(arrayId)
            .exec(next);
    } else {
        next(null, []);
    }
};
