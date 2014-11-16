--THIS--

*References an object (the subject in context, or the subject of the executing code)
*Think of 'this' as a pronoun that refers to a noun.

EX) 
"Tiff is running fast because she is trying to catch a plane"
'Tiff' is the object, and 'he' is the 'this'. 
ELSE
"Tiff is running fast because Tiff is trying to catch a plane"
//too redundant, we need pronouns. And we need 'this'


EX)
var girl = {
  firstName: "Tiff",
  lastName: "Kaiser",
  fullName: function(){
    console.log(this.firstName + " " + this.lastName); //synonymous with girl.firstName and girl.lastName //you NEED 'this' here before firstName and lastName because functions dont automatically see the other variables in the object -- must reference the object
  }
}

*The 'this' keyword not only refers to the object, but it also contains the value of the object.

----------------------------------------------------------------------------------

 THIS BASICS

 *All functions in JavaScript have properties, just as objects have properties. And when a function executes, it gets the 'this' property, which is a variable with the value of the object that invokes the function where 'this' is used.

*'this' always refers to an object and is usually found in a function or method.

*'this' will be equal to undefined in strict mode in global functions or anonymous functions without objects.

*'this' is really just a shortcut reference for the invoking object.

----------------------------------------------------------------------------------

JQUERY AND 'THIS'

EX)
$("button").click(function(event){ //$("button") is an object because it's wrapped in a jQuery function $()...this makes it a jQuery object
  console.log($(this).prop("name"));
});


In the above example, $(this) -- which is jQuerys syntax for the 'this' keyword -- refers to $("button") because it refers to the object that invokes the click method. 

----------------------------------------------------------------------------------

MOST IMPORTANT THING TO REMEMBER ABOUT 'THIS'

*'This' is not assigned a value until an object invokes the function where 'this' is defined. So, 'this' is not automatically referring to the object where it is defined. Its assignmnet is based only on the object that invokes the function where 'this' resides. 

----------------------------------------------------------------------------------

HOW 'THIS' WORKS WITH DIFFERENT OBJECTS INVOKING IT 

EX)
var job = {
  name: "AutopilotHQ",
  location: "San Francisco, CA",
  type: "Marketing Software",
  CEO: "Mike Sharkey",
  showNameAndLocation: function(){
    console.log(this.name + " is a company located in " + this.location);
  }
}

job.showNameAndLocation(); //AutopilotHQ is a company located in San Francisco, CA

var anotherJob = {
  name: "CoPilot",
  location: "Oakland, CA",
  type: "Marketing Software",
}

job.showNameAndLocation.apply(anotherJob); //CoPilot is a company located in Oakland, CA 

*Different objects invoking the 'this' changes the context of 'this'

----------------------------------------------------------------------------------

USING 'THIS' WITH CALLBACKS

var job = {
  data:[
  {name: "AutopilotHQ", age: 2},
  {name: "CoPilot", age: 2}
  ],
  randomizer: function(event){
    var randomNumber = ((Math.random() * 2 | 0) + 1) - 1;
    console.log(this.data[randomNumber].name + " " + this.data[randomNumber].age);
  }
}


$("button").click(job.randomizer); //Cannot read property '0' of undefined






































