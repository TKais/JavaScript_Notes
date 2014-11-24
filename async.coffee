new_async_file = "ASYNC"


#Handles asynchronous calls so that all work is finished before the final callback.

#EX)
# Loop through some items

#------------items.forEach(functiion(item){

  # Call asynchronous function, often a save() to DB

  #---------item.someAsyncCall();
#------------});
 
# At this point, we've fired a bunch of async calls
# but they're probably not all done executing yet
 
# This function is meant to be executed once all the async
# calls above are done, but we dont know if/when they are,
# and therein lies the problem with this approach
#--------------doSomethingOnceAllAreDone();

#-----------------------------------------------------------------------------------------

new_waterfall = "ASYNC WATERFALL"
async = require('async')


#Runs an array of functions in series, each passing their results to the next in the array. However, if any of the functions pass an error to the callback, the next function is not executed and the main callback is immediately called with the error.

async.waterfall [
  (callback) ->
    callback null, "one", "two"
  (arg1, arg2, callback) ->
    callback null, "three"
  (arg1, callback) ->
    callback null, "done"
], (err, result) ->
  console.log result

#-----------------------------------------------------------------------------------------

new_series = "ASYNC SERIES"
async = require('async')

#Works the same as a waterfall, where a series of functions are ran, passing their arguments to callbacks or returning an error. The difference is that a series will take an array or an object while a waterfall will only take an array AND IT PRESERVES ORDER!!!

async.series [
  (callback) ->
    console.log "First function called"
    callback null, 'one'
  (callback) ->
    console.log "Second function called"
    callback null, 'two'
],
  (err, results) ->
    console.log "error" if err
    console.log results #should be ['one', 'two']





























