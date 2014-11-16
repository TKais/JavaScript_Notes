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





















