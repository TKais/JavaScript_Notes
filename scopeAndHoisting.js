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

var name = "Richard"; //global variable name because it's outside of the function, but var declares it
if(name){
  name = "Jack"; //global variable name overrides the local
  console.log(name);
}

console.log(name); // Jack

EX)
​var name = "Michael Jackson";
​
​function showCelebrityName () {
  console.log (name);
}
​
​function showOrdinaryPersonName () { 
  name = "Johnny Evers";
  console.log (name);
}
showCelebrityName (); // Michael Jackson​
​
​// name is not a local variable, it simply changes the global name variable​
showOrdinaryPersonName (); // Johnny Evers​
​
​// The global variable is now Johnny Evers, not the celebrity name anymore​
showCelebrityName (); // Johnny Evers​
​
​// The solution is to declare your local variable with the var keyword​
​function showOrdinaryPersonName () { 
  var name = "Johnny Evers"; // Now name is always a local variable and it will not overwrite the global variable​
  console.log (name);
}


*Local Variables Have Priority Over Global Variables in Functions
If you declare a global variable and a local variable with the same name, the local variable will have priority when you attempt to use the variable inside a function (local scope).

EX)
var name = "Paul"; //global scope
​
​function users () {
​var name = "Jack";  // Here, the name variable is local and it takes precedence over the same name variable in the global scope​
​
​// The search for name starts right here inside the function before it attempts to look outside the function in the global scope​
console.log (name); 
}
​
users (); // Jack



2 - Global