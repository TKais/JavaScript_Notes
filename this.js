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

//Do this instead----------------------------------
$("button").click(job.randomizer.bind(job)); // AutopilotHQ 2
//this binds the job object to the method so the 'this' can be recognized while preserving the jQuery button object as the object that invokes the 'this'

----------------------------------------------------------------------------------

USING 'THIS' WITH CLOSURES

*Closures cannot access the outer function’s 'this' variable by using the this keyword because the 'this' variable is accessible only by the function itself, not by inner functions

EX)
var user = {
    tournament:"The Masters",
    data      :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
    ],
​
    clickHandler:function () {
    // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.​
    this.data.forEach (function (person) {
    // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.​
    // This inner function cannot access the outer function's "this"​
   
    console.log ("What is This referring to? " + this); //[object Window]​
 
    console.log (person.name + " is playing at " + this.tournament);
    // T. Woods is playing at undefined​
    // P. Mickelson is playing at undefined​
    })
    }
​
    }
​
    user.clickHandler(); // What is This referring to? [object Window]

*'this' within the anonymous function cant access the outer functions 'this', so its bound to the window object.


//Do this instead-----------------------------
var user = {
    tournament:"The Masters",
    data      :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
    ],
​
    clickHandler:function (event) {
    // To capture the value of "this" when it refers to the user object, we have to set it to another variable here:​
    // We set the value of "this" to theUserObj variable, so we can use it later​
    var theUserObj = this;
    this.data.forEach (function (person) {
    // Instead of using this.tournament, we now use theUserObj.tournament​
    console.log (person.name + " is playing at " + theUserObj.tournament);
    })
    }
​
    }
​
    user.clickHandler();
    // T. Woods is playing at The Masters​
    //  P. Mickelson is playing at The Masters

  //we've set the 'this' to a variable before entering the each loop (or in any case, the closure)

























