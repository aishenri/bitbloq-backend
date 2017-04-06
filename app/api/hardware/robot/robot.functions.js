'use strict';

var Robot = require('./robot.model.js');

exports.getAll = function(next) {
    Robot.find({}, next);
};

exports.getAllWithoutDevelopment = function(next) {
    Robot.find({})
        .where('underDevelopment').in([false, undefined, null])
        .exec(next);
};

exports.getRobotsInArray = function(arrayId, next) {
    Robot.find({})
        .where('_id').in(arrayId)
        .exec(next);
};