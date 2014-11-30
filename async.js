// Generated by CoffeeScript 1.8.0
var async, new_async_file, new_parallel, new_series, new_waterfall;

new_async_file = "ASYNC";

new_waterfall = "ASYNC WATERFALL";

async = require('async');

async.waterfall([
  function(callback) {
    return callback(null, "one", "two");
  }, function(arg1, arg2, callback) {
    return callback(null, "three");
  }, function(arg1, callback) {
    return callback(null, "done");
  }
], function(err, result) {
  return console.log(result);
});

new_series = "ASYNC SERIES";

async = require('async');

async.series([
  function(callback) {
    console.log("First function called");
    return callback(null, 'one');
  }, function(callback) {
    console.log("Second function called");
    return callback(null, 'two');
  }
], function(err, results) {
  if (err) {
    console.log("error");
  }
  return console.log(results);
});

async = require('async');

async.series({
  one: function(callback) {
    setTimeout((function() {
      callback(null, 1);
    }), 200);
  },
  two: function(callback) {
    setTimeout((function() {
      callback(null, 2);
    }), 100);
  }
}, function(err, results) {
  if (err) {
    console.log("Error");
  } else {
    console.log(results);
  }
});

new_parallel = "ASYNC PARALLEL";

async = require('async');

async.parallel([
  function(callback) {
    return setTimeout((function() {
      callback(null, "one");
    }), 200);
  }, function(callback) {
    return setTimeout((function() {
      callback(null, "two");
    }), 100);
  }
], function(err, results) {
  if (err) {
    console.log("Error");
  } else {
    console.log(results);
  }
});

async = require('async');

async.waterfall([
  function(cb) {
    console.log("First one");
    return cb(null, 'one');
  }, function(arg1, cb) {
    console.log("Second one");
    return cb(null, 'two');
  }, function(arg2, cb) {
    console.log("Third one");
    return cb(null, 'three');
  }
], function(err, results) {
  if (err) {
    console.log("Error");
  }
  return console.log(results);
});

async.waterfall([
  function(cb) {
    console.log("First one");
    return cb(null, 'one');
  }, function(arg1, cb) {
    console.log(arg1);
    return cb(null, 'two');
  }, function(arg2, cb) {
    console.log(arg2);
    return cb(null, 'three');
  }
], function(err, results) {
  if (err) {
    console.log("Error");
  }
  return console.log(results);
});
