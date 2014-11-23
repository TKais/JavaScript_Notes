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



















