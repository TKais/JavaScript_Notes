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

#Basically, run all the tasks in the array, then print out either an error or the results


#EX with objects
async = require('async')

async.series
  one: (callback) ->
    setTimeout (->
      callback null, 1
      return
    ), 200
    return

  two: (callback) ->
    setTimeout (->
      callback null, 2
      return
    ), 100
    return
, (err, results) ->
  if err
    console.log "Error"
  else
    console.log results
  return

#-----------------------------------------------------------------------------------------

new_parallel = "ASYNC PARALLEL"


async = require('async')


async.parallel [
  (callback) ->
    setTimeout (->
      callback null, "one"
      return
    ), 200
  (callback) ->
    setTimeout (->
      callback null, "two"
      return
    ), 100
], (err, results) ->
  if err
    console.log "Error"
  else
    console.log results  #['one', 'two']
  return

#-----------------------------------------------------------------------------------------

#PRACTICE


async = require('async')


async.waterfall [
  (cb) ->
    console.log "First one"
    cb null, 'one'
  (arg1, cb) ->
    console.log "Second one"
    cb null, 'two'
  (arg2, cb) ->
    console.log "Third one"
    cb null, 'three'
], 
  (err, results) ->
    console.log "Error" if err
    console.log results

#Returns: 
# First one
# Second one
# Third one
# three



async.waterfall [
  (cb) ->
    console.log "First one"
    cb null, 'one'
  (arg1, cb) ->
    console.log arg1 #one
    cb null, 'two'
  (arg2, cb) ->
    console.log arg2 #two
    cb null, 'three'
], 
  (err, results) ->
    console.log "Error" if err
    console.log results #three

#Returns: 
# First one
# one
# two
# three




async.series [
  (cb) ->
    console.log "First one"
    cb null, 'one'
  (cb) ->
    console.log "Second one"
    cb null, 'two'
  (cb) ->
    console.log "Third one"
    cb null, 'three'
], 
  (err, results) ->
    console.log "Error" if err
    console.log results

#Returns: 
# First one
# Second one
# Third one
# ['one', 'two', 'three']



async.parallel [
  (callback) ->
    setTimeout (->
      callback null, "one"
      return
    ), 5000
  (callback) ->
    setTimeout (->
      callback null, "two"
      return
    ), 100
], (err, results) ->
  if err
    console.log "Error"
  else
    console.log results  #['one', 'two']
  return


# ------------------------------------------------------------------------------------------------------------------


#EXAMPLE


async = require('async')




async.parallel [
  (cb)->
    console.log "First one"
    hey = "Hey"
    cb null, hey
  (cb)->
    console.log "Second one"
    there = "there"
    cb null, there
  (cb)->
    console.log "Third one"
    name = "Tiff"
    cb null, name
  ], (err, results)->
    cb err if err
    console.log "FINAL RESULTS", results


#First one
# Second one
# Third one
# FINAL RESULTS [ 'Hey', 'there', 'Tiff' ]




async = require('async')




async.waterfall [
  (cb)->
    console.log "First one"
    hey = "Hey"
    cb null, hey
  (arg, cb)->
    console.log "Second one"
    there = "there"
    cb null, there
  (arg, cb)->
    console.log "Third one"
    name = "Tiff"
    cb null, name
  ], (err, results)->
    cb err if err
    console.log "FINAL RESULTS", results



# First one
# Second one
# Third one
# FINAL RESULTS Tiff







async = require('async')




async.series [
  (cb)->
    console.log "First one"
    hey = "Hey"
    cb null, hey
  (cb)->
    console.log "Second one"
    there = "there"
    cb null, there
  (cb)->
    console.log "Third one"
    name = "Tiff"
    cb null, name
  ], (err, results)->
    cb err if err
    console.log results



# First one
# Second one
# Third one
# [ 'Hey', 'there', 'Tiff' ]










