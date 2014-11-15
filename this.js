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

 

