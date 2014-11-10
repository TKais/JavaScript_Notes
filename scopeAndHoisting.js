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
  name = "Jack"; //global variable name overrides the other global because there's no block-level scope in JS
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

GLOBAL SCOPE
All variables declared outside a function are in the global scope, and are available to the enttire application.
The global context or scope is the window object (or the entire HTML document)

EX)
var myName = "Tiff"; //global

firstName = "Richard"; //also global

var name; 
name;     //also global

*If a variable is initialized (assigned a value) without first being declared with the var keyword, it is automatically added to the global context and it is thus a global variable

function showAge () {
  // Age is a global variable because it was not declared with the var keyword inside this function​
  age = 90;
  console.log(age);// ​
}
​
showAge (); // 90​
​
​// Age is in the global context, so it is available here, too​
console.log(age); // 90


*Weird cases where variables are global:
EX)
// Both firstName variables are in the global scope, even though the second one is surrounded by a block {}. ​
​var firstName = "Richard";
{
​var firstName = "Bob";
}
​
​// The second declaration of firstName simply re-declares and overwrites the first one​
console.log (firstName); // Bob

*For loops outside of a function have global variables too
EX)
for (var i = 1; i <= 10; i++) {
  console.log (i); // outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;​
};
​// The variable i is a global variable and it is accessible in the following function with the last value it was assigned above ​
​function aNumber () {
console.log(i);
}
​// The variable i in the aNumber function below is the global variable i that was changed in the for loop above. Its last value was 11, set just before the for loop exited:​
aNumber ();  // 11​

*Dont create too many global variables! You dont want it to be accessible everywhere in your code or changing things unexpectedly.
-------------------------------------------------------------------------------------------

setTimeout Variables are Executed in the Global Scope

*all functions in setTimeout are executed in the global scope

EX)
var highValue = 200;
var constantVal = 2;
var myObj = {
  highValue: 20,
  constantVal: 5,
  calculateIt: function() {
    setTimeout(function() {
      console.log(this.constantVal * this.highValue);
    }, 2000);
  }
}

//the 'this' in the calculateIt function refers to the global highValue and constantVal (the Window object, not the myObj object).

myObj.calculateIt(); // 400​

-------------------------------------------------------------------------------------------















