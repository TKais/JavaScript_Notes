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