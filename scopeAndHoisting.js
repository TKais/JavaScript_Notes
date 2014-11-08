--VARIABLE SCOPE--

*A variables scope is the context in which it exists. Its whether or not you have access to it
*JavaScript does not have block-level scope, which means variables scoped to surrounding curly brackets.
*JavaScript has function-level scope instead, where variables declared in a function are local variables and they can only be accessed within that function and by functions in that function.

--------------------------------------------------------------------------------------------

TWO KINDS OF SCOPE

1 - Local

LOCAL SCOPE
Where variables declared in a function are local variables and they can only be accessed within that function and by functions in that function.

EX)
var name = "Tiff";

function showName(){
  var name = "Jack"; // local variable; only accessible in this showName function
  console.log(name); //Jack
}

console.log(name) //Tiff

*Always declare your local variables with a var keyword!!! Else, theyre global.

var name = "Richard"; //local variable name
if(name){
  name = "Jack"; //global variable name overrides the local
  console.log(name);
}

console.log(name); // Jack


2 - Global