--ASYNC--


*Handles asynchronous calls so that all work is finished before the final callback.

//EX)
// Loop through some items
items.forEach(functiion(item){
  // Call asynchronous function, often a save() to DB
  item.someAsyncCall();
});
 
// At this point, we've fired a bunch of async calls
// but they're probably not all done executing yet
 
// This function is meant to be executed once all the async
// calls above are done, but we dont know if/when they are,
// and therein lies the problem with this approach
doSomethingOnceAllAreDone();

-----------------------------------------------------------------------------------------

ASYNC WATERFALL


*Runs an array of functions in series, each passing their results to the next in the array. However, if any of the functions pass an error to the callback, the next function is not executed and the main callback is immediately called with the error.


*JavaScript

ARGUMENTS - 
1) tasks - An array of functions to run, where each function is passed a callback(err, result1, result2, ...) it must call on completion. The first argument is an error (which can be null if there are no errors) and any further arguments will be passed as arguments in order to the next task.
2) callback(err,[results]) is an optional callback to run once all of the functions have completed. This will be passed the results of the last tasks callback.

async.waterfall([
  function(callback){
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback){
    // arg1 now equals 'one' and arg2 now equals 'two'
    callback(null, 'three');
  },
  function(arg1, callback){
    //arg1 now equals 'three'
    callback(null, 'done');
  }
], function(err, result){
  //result now equals 'done'
});



*CoffeeScript

async.waterfall [
(callback) ->
  callback null, "one", "two"

(arg1, arg2, callback) ->
  callback null, "three"

(arg1, callback) ->
  callback null, "done"
], (err, result) ->


//Another JavaScript example for reference

var create = function(req, res) {
  async.waterfall([
    _function1(req),
    _function2,
    _function3
  ], function(error, success){
    if(error){ alert("Something went wrong!");}
    return alert("Done!");
  });
};

function _function1(req){
  return function(callback) {
    var something = req.body;
    callback(null, something);
  }
}

function _function2(something, callback){
  return function(callback) {
    var somethingelse = function(){
      console.log("Made it this far");
      callback(err, somethingelse);
    }
  }
}

function _function3(something, callback){
  return function(callback){
    var somethingmore = function(){
      console.log("Made it to the end!");
      callback(err, somethingmore);
    }
  }
}


-----------------------------------------------------------------------------------------
















