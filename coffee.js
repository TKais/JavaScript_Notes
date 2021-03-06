--JAVASCRIPT EXAMPLE--


var foobar = function(callback) {
    setTimeout(function() {
        // trigger callback after 1000ms
        callback();
    }, 1000);
};

var foo = {
    key: {
      nestedKey: 'value'
    },
    array: [1],
    nestedArray: [1, 2, ['2a', ['2a-I']]]
}

//now that the callback function and object literal are set up, we can call them.

foobar(function() {
    alert(foo.array);
});
//foobar is called and once 1000 milliseconds goes by, the number 1 is alerted. 





--COFFEESCRIPT EXAMPLE--

foobar = (callback) ->
  setTimeout (->
    
    # trigger callback after 1000ms
    callback()
    return
  ), 1000
  return

foo =
  key:
    nestedKey: "value"

  array: [1]
  nestedArray: [
    1
    2
    [
      "2a"
      ["2a-I"]
    ]
  ]

foobar ->
  alert foo.array
  return

---------------------------------------------------------------------------------

COFFEESCRIPT BASICS

()-> //this is a function

coffee = -> //is the same as 
coffee()

coffee = (message) -> //is the same as 
coffee("Yo");

coffee = (message, other) -> //is the same as
coffee("Yo", 2)

*Message and Other above are both parameters being passed to the function

---------------------------------------------------------------------------------

USING DEFAULT PARAMETERS 

coffee = (message = "Ready for some Coffee?") ->
  answer = confirm message
  "Your answer is #{answer}"

alert coffee() //Ready for some Coffee?
alert coffee("Want some decaf?") //Want some decaf?


//It compiles into this JavaScript...

var coffee;
coffee = function(message){
    var answer;
    if(message == null){
        message = "Ready for some Coffee?";
    }
    answer = confirm(message);
    return "Your answer is " + answer;
}

---------------------------------------------------------------------------------

CODE EXAMPLES

1) Define a greet function that takes no argument and alerts "Hello CoffeeScript"

greet = ->
  alert "Hello CoffeeScript"

2) Change greet so that it accepts a single argument and alerts that argument

greet = (message) ->
  alert message

3) Give greet two arguments and alert them both

greet = (message, anothermessage) ->
  alert(message + " " + anothermessage)

4) Give the greet function a default value of "Stranger"

greet = (name = "Stranger") ->
  alert name

5) Use string interpolation instead

greet = (name = "Stranger") ->
  "Hello, #{name}"

6) Write a function named sum with two arguments and have it return the sum of both numbers

greet = (num1, num2) ->
  num1 + num2 

---------------------------------------------------------------------------------

COFFEESCRIPT WITH JQUERY 


*JavaScript Example:

jQuery(function($){
  function changeTab(e){
    e.preventDefault();
    $("#tabs li a.active").removeClass("active");
    $(this).addClass("active");
  }
  $("#tabs ul li a").click(changeTab);
});


*jQuery Example:

jQuery($) ->
  changeTab = (e) ->
    e.preventDefault()
    $("#tabs li a.active").removeClass "active"
    $(@).addClass "active"
  $("#tabs ul li a").click changeTab


NOTE: @ is 'this' in CoffeeScript 

-------------------------------------------------------------------------------------

JQUERY CODE CHALLENGES

*jQuery

 jQuery(function($) {
   $('#newCoffee a').click(function() {
     alert('New coffee added');
   });
 });

 *JavaScript

jQuery(function($) {
  return $('#newCoffee a').click(function() {
    return alert("New coffee added");
  });
});

*CoffeeScript

jQuery ($) ->
  $('#newCoffee a').click () ->
    alert "New coffee added"

//------------------------------------------------

*jQuery

 $('#newCoffee a').click(function() {
   var name = prompt('Name of coffee:');
   alert("New coffee added: " + name);
 });

 *JavaScript

$('#newCoffee a').click(function() {
  var name;
  name = prompt("Name of coffee");
  return alert("New coffee added: " + name);
});

*CoffeeScript

$('#newCoffee a').click ->
  name = prompt "Name of coffee"
  alert "New coffee added: #{name}"

//------------------------------------------------

*jQuery

 $('#newCoffee a').click(function() {
   var coffee, name;
   name = prompt('Name of coffee:');
   coffee = $("<li>" + name + "</li>");
   $('ul.drink').append(coffee);
 });

 *JavaScript

$('#newCoffee a').click(function() {
  var coffee, name;
  name = prompt("Name of coffee:");
  coffee = $("<li>" + name + "</li>");
  return $('ul.drink').append(coffee);
});


*CoffeeScript

$('#newCoffee a').click ->
  name = prompt("Name of coffee:")
  coffee = $("<li>#{name}</li>")
  $('ul.drink').append coffee

//------------------------------------------------

*jQuery

 $('.drink li a').click(function(e) {
   e.preventDefault();
   alert($(this).text());
 });

*JavaScript

$('.drink li a').click(function(e) {
  e.preventDefault();
  return alert($(this).text());
});


*CoffeeScript

$('.drink li a').click (e) ->
  e.preventDefault()
  alert $(@).text()

//------------------------------------------------

*jQuery

  $('.drink li').mouseenter(function() {
   $(this).find('span').show();
 });
 $('.drink li').mouseleave(function() {
   $(this).find('span').hide();
 });

*JavaScript

$('.drink li').mouseenter(function() {
  return $(this).find('span').show();
});
$('.drink li').mouseleave(function() {
  return $(this).find('span').hide();
});


*CoffeeScript

$('.drink li').mouseenter ->
  $(@).find('span').show()
  
$('.drink li').mouseleave ->
  $(@).find('span').hide()

//------------------------------------------------

*jQuery

 $('.drink li').hover(function() {
   $(this).find('span').show();
 }, function() {
   $(this).find('span').hide();
 });  

*JavaScript

$('.drink li').hover(function() {
  return $(this).find('span').show();
}, function() {
  return $(this).find('span').hide();
});


*CoffeeScript

$('.drink li').hover( 
  ->
    $(@).find('span').show()
  ->
    $(@).find('span').hide()
    
  )

-------------------------------------------------------------------------------------

CONDITIONALS AND OPERATORS


****IF****

*JavaScript

if(age<18){
  alert("Under age");
}


*CoffeeScript

if age < 18
  alert "Under age"

OR  

alert "Under age" if age < 18

OR 

if age < 18 then alert "Under age"

//------------------------------------------------

****ELSE****

*JavaScript

if(age<18){
  alert('Under age');
} else {
  alert('Of age');
}


*CoffeeScript

if age < 18
  alert 'Under age'
else
  alert 'Of age'

OR

if age < 18 then alert 'Under age' else alert 'Of age'

//------------------------------------------------

COFFEESCRIPT                     JAVASCRIPT 

==   is                          ===

!=   isnt                        !==

not                              !

and                              &&

OR                               ||

true yes on                      true

false no off                     false

//------------------------------------------------

OPERATORS IN USE 


*JavaScript

if (paid() && coffee() === true){
  pour();
}


*CoffeeScript

if paid() and coffee() is on then pour()

addCaffeine() if not Decaf()

addCaffeine() unless Decaf()

//------------------------------------------------

CHAINED COMPARISONS 


*JavaScript

if(2<newLevel && newLevel < 5){
  alert("In Range!");
}

*CoffeeScript

if 2 < newLevel <5 
  alert "In Range"!

//------------------------------------------------

SWITCH STATEMENTS


*JavaScript

var message = (function(){
  switch(cupsOfCoffee){
    case 0:
    return 'Asleep';
    case 1:
    return 'Eyes Open';
    case 2:
    return 'Buzzed';
    case 3:
    return 'Dangerous';
  }
})();

*CoffeeScript

message = switch cupsOfCoffee
  when 0 then 'Asleep'
  when 1 then 'Eyes Open'
  when 2 then 'Buzzed'
  else 'Dangerous'

-------------------------------------------------------------------------------------

EXISTENTIAL OPERATORS 



*JavaScript

if(typeof cupsOfCoffee != undefined && cupsOfCoffee != null){
  alert("It exists!");
}


*CoffeeScript

if cupsOfCoffee?
  alert 'It exists!'

//------------------------------------------------

//Set a default


*CoffeeScript

if not cupsOfCoffee?
  cupsOfCoffee = 0

OR 

cupsOfCoffee ?= 0 //if it exists and hasn't been previously set, set it to 0

//------------------------------------------------

//Call brew on coffeepot only if it exists

*CoffeeScript

if coffeePot?
  coffeePot.brew()

OR 

coffeePot?.brew()

//------------------------------------------------

//Only call a function if it exists


*CoffeeScript

vehicle.start_engine?().shift_gear?()

//------------------------------------------------

//Examples

*JavaScript

if (caffeineLevel > 5) {
  alert('High Caffeine Level');
}


*CoffeeScript 

alert('High Caffeine Level') if caffeineLevel>5

//------------------------------------------------

//CoffeeScript doesn't have ternary operators, so use if/then/else

*JavaScript

if (caffeineLevel > 5) {
  alert('Too High');
} else {
  alert('OK');
}


*CoffeeScript

if caffeineLevel > 5 
  alert('Too High')
else 
  alert('OK');

//------------------------------------------------

//Use an unless conditional


*JavaScript

if (!coffeeReady) {
  alert("Please wait 5 more minutes");
}


*CoffeeScript

alert "Please wait 5 more minutes" unless coffeeReady

//------------------------------------------------

//Use chained comparisons

*JavaScript

if ((lowLevel < newLevel && newLevel < highLevel)) {
  alert('ok');
} else {
  alert('abnormal caffeine level');
}


*CoffeeScript

if lowLevel < newLevel < highLevel
  alert 'ok'
else
  alert 'abnormal caffeine level'

//------------------------------------------------

//switch statement 

*JavaScript

var message;
message = (function() {
  switch (newLevel) {
    case 1:
      return 'Out of bed yet?';
    case 2:
      return 'Good morning!';
    default:
      return 'You should stop while you can';
  }
})();



*CoffeeScript

message = switch newLevel
  when 1 then 'Out of bed yet?'
  when 2 then 'Good morning!'
  else 'You should stop while you can'

//------------------------------------------------

//Use '?' in coffeescript for existence check


*JavaScript

if (typeof newLevel !== "undefined" && newLevel !== null) {
  checkLevel(newLevel);
} else {
  resetLevel();
}


*CoffeeScript

if newLevel? then checkLevel(newLevel) else resetLevel()

//------------------------------------------------

//check if functions exist

*JavaScript

if (typeof level !== "undefined" && level !== null) {
  if (typeof checkLevel === "function") {
    checkLevel(level);
  }
} else {
  if (typeof resetLevel === "function") {
    resetLevel();
  }
}


*CoffeeScript

if level?
  checkLevel?(level)
else
  resetLevel?()

-------------------------------------------------------------------------------------

ARRAYS


//make an array like this:

storeLocations = ['Orlando', 'SF', 'Detroit']

//OR

storeLocations = [
  "Orlando"
  "SF"
  "Detroit"
  ]

//------------------------------------------------

//Loop through arrays like this

for location in storeLocations
  alert "Location: #{location}"


//List Comprehensions

storeLocations = [
  "Orlando"
  "SF"
  "Detroit"
  ]

"#{loc}, FL" for loc in storeLocations
//OR
storeLocations = ("#{loc}, FL" for loc in storeLocations)
//these parenthesis are important

//------------------------------------------------

//You can use ranges

*JavaScript

var array;
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




*CoffeeScript

array = [1..10]

array = [1...11]

------------------------------------------------------------------------------------------------

OBJECTS 

//Create a variable named coffee which is an object with a name property set to 'Russian', a level property set to 2 and an isRussian property which holds a function that returns true. Use an object literal.


*JavaScript

var coffee;
coffee = {
  name: 'Russian',
  level: 2,
  isRussian: function() {
    return true;
  }
};


*CoffeeScript

coffee =
  name: 'Russian'
  level: 2
  isRussian: -> true

------------------------------------------------------------------------------------------------

FOR IN LOOPS 



*JavaScript

var person, _i, _len;
for (_i = 0, _len = people.length; _i < _len; _i++) {
  person = people[_i];
  if (person.age > 18) {
    console.log(person.name);
  }
}



*CoffeeScript

for person in people
  console.log person.name if person.age >18

------------------------------------------------------------------------------------------------

SPLAT 


*The splat operator allows a function or method to accept multiple arguments. It is indicated with the '...'

EX) 
Forum posters get points for their posts weekly. First gets 10 points, second gets 6 and the third gets 2 points while everyone else gets just 1 point. 

giveKudos = (first, second, third, rest...) ->
  addKudosToUser first, 10
  addKudosToUser second, 6
  addKudosToUser third, 2
    for user in rest
      addKudosToUser user, 1

users = ["Pasan", "Amit", "Jim", "Andrew", "Allison", "Jason", "AJ"]


//CALL IT
giveKudos users...

------------------------------------------------------------------------------------------------

CLASSES


*You can use explicit class names like in Ruby

EX)
class TimeMachine
  constructor: ->

//methods are before a colon and need whitespace before the name


time_machine = new TimeMachine
//To instantiate an instance of an object, use the keyword new followed by the class name

//-------------------------------------------------

INSTANCE VARIALBES

*Instance variables start with an @ symbol

EX)
class TimeMachine
  constructor: (pilot) ->
    @pilot = pilot 

//access them via dot notation

time_machine = new TimeMachine "H. G. Wells"

console.log time_machine.pilot //H. G. Wells


//Can also do shorthand like this

class TimeMachine
  constructor: (@pilot) ->

//-------------------------------------------------

CLASS INHERITENCE 


*Write a subclass using 'extends'


EX)
class DeLorean extends TimeMachine


//Let’s say TimeMachine has a method go with one parameter that gets logged out when the Time Machine is about to travel in time

class TimeMachine
  constructor: (@pilot) ->
  go: (noise) ->
    console.log noise

class DeLorean extends TimeMachine
class Tardis extends TimeMachine

class DeLorean
  go: ->
    super "Buuuuuuuuurrrr"

class Tardis
  go: ->
    super "vorp vorp"


doctors_wife = new Tardis "The Doctor"
doc_browns_wheels = new DeLorean "Marty"

doctors_wife.go()
doc_browns_wheels.go()

//-----------------------------------------------------------------------------

//CONSTRUCTOR
function Car() {
    this.wheels = wheels;
    this.make = make;
    this.model = model;
}

//TRANSLATES TO

Car = ->
  @wheels = wheels
  @make = make
  @model = model
  return




//OBLECT LITERAL

var Car = {
    wheels: 4,
    make: Escape,
    model: Ford
};

//TRANSLATES TO

Car =
  wheels: 4
  make: Escape
  model: Ford


IMPORTANT------
Constructors are used to make other instances of itself while object literals are not meant to do that. Theyre just objects in use for a particular purpose. Also, constructors use prototypical inheritence. 


//REGULAR FUNCTION 

function addTwoNumbers(num1, num2){
  if(typeof num1 === "number" && typeof num2 === "number"){
    return num1 + num2;
  }
};

//TRANSLATES TO

addTwoNumbers = (num1, num2) ->
  num1 + num2 if typeof num1 is "number" and typeof num2 is "number" 


//CLOSURES

var add = (function() {
    var counter = 0;
    return function() {return counter += 1;}
})();

//TRANSLATES TO

add = (->
  counter = 0
  ->
    counter += 1
)()




//USING 'THIS'
function Car() {
    this.wheels = wheels;
    this.make = make;
}

//TRANSLATES TO 
Car = ->
  @wheels = wheels
  @make = make
  return




//Prototypes
Car.prototype.drive = function(){
    var speed = 0;
    speed += 60;
}

//TRANSLATES TO
Car::drive = ->
  speed = 0
  speed += 60
  return




//WHOLE CONSTRUCTOR SETUP WITH PROTOTYPICAL INHERITENCE
function Car(){
    this.make = make;
    this.model = model;
}


Car.prototype.drive = function(){
    var speed = 0;
    speed += 60;
    console.log("I am driving " + speed + " miles per hour");
}

var ford = new Car();
ford.make = "Ford";
ford.model = "Escape";
ford.drive();

//TRANSLATES TO
Car = ->
  @make = make
  @model = model
  return
Car::drive = ->
  speed = 0
  speed += 60
  console.log "I am driving " + speed + " miles per hour"
  return

ford = new Car()
ford.make = "Ford"
ford.model = "Escape"
ford.drive()



//ANOTHER WAY OF THE SAME ^
function Car(make, model){
    this.make = make;
    this.model = model;
}


Car.prototype.drive = function(){
    var speed = 20;
    console.log("I am driving " + speed + " miles per hour");
}

var ford = new Car("Ford", "Escape");
ford.make = "Ford";
ford.model = "Escape";
ford.drive();

//TRANSLATES TO
Car = (make, model) ->
  @make = make
  @model = model
  return
Car::drive = ->
  speed = 20
  console.log "I am driving " + speed + " miles per hour"
  return

ford = new Car("Ford", "Escape")
ford.make = "Ford"
ford.model = "Escape"
ford.drive()














