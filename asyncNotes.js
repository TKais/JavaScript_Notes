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


NOTE: The async methods take an array of functions to run, and as long as there are no errors (they return null) the results of each function are pushed into an array and returned at the end. But with async.waterfall, you only get the last functions return.

-----------------------------------------------------------------------------------------

ASYNC WATERFALL (tasks, [callback])


*Runs an array of functions in series, each passing their results to the next in the array. However, if any of the functions pass an error to the callback, the next function is not executed and the main callback is immediately called with the error.
*They need to have placeholders in each function argument for the previous functions result. Only the last functions result is returned (not as an array).
*Must have exact number of arguments for each cb function. 


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

ASYNC SERIES (tasks, [callback])


*Works the same as a waterfall, where a series of functions are ran, passing their arguments to callbacks or returning an error. The difference is that a series will take an array or an object while a waterfall will only take an array AND IT PRESERVES ORDER!!!
*Pushes ALL results into an array in order. 


*JavaScript

ARGUMENTS - 
1) tasks - An array or object containing functions to run, each function is passed a callback(err, result) it must call on completion with an error err (which can be null) and an optional result value.
2) callback(err, results) - An optional callback to run once all the functions have completed. This function gets a results array (or object) containing all the result arguments passed to the task callbacks.

async.series([
  function(callback){
    console.log('First function call');
    callback(null, 'one'); //null is the error, 'one' is the first argument
  },
  function(callback){
    console.log('Second function call');
    callback(null, 'two'); //null is the error, 'two' is the second argument
  }

],
// optional callback
   function(err, results){
    console.log(results); //equal to ['one', 'two']
   })

//Basically, run all the tasks in the array and then print out either an error or the results


EX WITH OBJECTS)

async.series({
  one: function(callback){
    setTimeout(function(){
      callback(null, 1)
    }, 200);
  },
  two: function(callback){
    setTimeout(function(){
      callback(null, 2);
    }, 100);
  }
},
function(err, results){
  if(err){
    console.log('Error');
  } else {
    console.log(results);
  }
});


-----------------------------------------------------------------------------------------

ASYNC PARALLEL (tasks, [callback])



*Run the tasks array of functions in parallel, without waiting until the previous function has completed. If any of the functions pass an error to its callback, the main callback is immediately called with the value of the error. Once the tasks have completed, the results are passed to the final callback as an array. It is also possible to use an object instead of an array. Each property will be run as a function and the results will be passed to the final callback as an object instead of an array. This can be a more readable way of handling results from parallel.
*All results will be pushed into an array in order 


*JavaScript

ARGUMENTS - 
1) tasks - An array or object containing functions to run, each function is passed a callback(err, result) it must call on completion with an error err (which can be null) and an optional result value.
2) callback(err, results) - An optional callback to run once all the functions have completed. This function gets a results array (or object) containing all the result arguments passed to the task callbacks.


async.parallel([
  function(callback){
    setTimeout(function(){
      callback(null, 'one');
    }, 200);
  },
  function(callback){
    setTimeout(function(){
      callback(null, 'two');
    }, 100);
  }

],
function(err, results){
  if(err){
    console.log("Error");
  } else {
    console.log(results); //returns ['one', 'two']  even though 'two' has a shorter timeout
  }
});












