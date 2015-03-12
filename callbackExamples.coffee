async = require('async')



getMyAge = (name, cb)->
  name = "Tiff"
  age = 28
  console.log "My name is " + name + " and my age is " + age
  cb age

saySomething = (age)->
  console.log age





getMyAge(name, saySomething)


#My name is Tiff and my age is 28
#28


------------------------------------------------


async = require('async')


name = "Tiff"

getMyAge = (name, cb)->
  name = "Alex"
  age = 28
  console.log "My name is " + name + " and my age is " + age
  cb age

saySomething = (age)->
  console.log age





getMyAge(name, saySomething)


#My name is Alex and my age is 28
#28


------------------------------------------------------


async = require('async')


name = "Tiff"

getMyAge = (name, cb)->
  age = 28
  console.log "My name is " + name + " and my age is " + age
  cb age

saySomething = (age)->
  console.log age





getMyAge(name, saySomething)


#My name is Tiff and my age is 28
#28





