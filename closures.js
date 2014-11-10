--CLOSURES--

*Closures are functions inside of another function, which has access to its own variables (variables defined between its curly brackets), its outer functions variables AND parameters, and variables in the global scope. 

EX)
function showName(firstName, lastName){
  var introduction = "Your name is ";
  function makeFullName(){
    return introduction + firstName + " " + lastName;
  }
  return makeFullName();
}

showName("Tiff", "Kaiser"); //Your name is Tiff Kaiser

------------------------------------------------------------------------------------------

JQUERY

*Closures are a major part of jQuery as well.

EX)
$(function() {
  var selections = [];
  $(".nines").click(function(){ // this closure has access to the selections variable
    selections.push(this.prop("name")); // update the selections variable in the outer function's scope​
  });
});

------------------------------------------------------------------------------------------

CLOSURE RULES

1) Closures have access to the outer function’s variable even after the outer function returns, meaning that even after the outer function has returned, the inner function still has access to the outer function’s variables -- and you can call them later in the program.

EX)
function showName(firstName){
  var nameIntro = "My name is ";
  function fullName(lastName){
    return nameIntro + firstName + " " + lastName;
  }
  return fullName;
}

var myName = showName("Tiff"); //shows the function layout
myName("Kaiser"); //My name is Tiff Kaiser


2) Closures store references to the outer functions variables, not the actual value. Closures have access to updated values in its outer functions, so as those change, so do the values in the closures. 

EX)
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions​
    // All the inner functions have access to the outer function's variables​
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable​
            // It will return the current value of celebrityID, even after the changeTheID function changes it​
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime​
            celebrityID = theNewID;
        }
    }
​
}
​
​var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.​
mjID.getID(); // 999​
mjID.setID(567); // Changes the outer function's variable​
mjID.getID(); // 567: It returns the updated celebrityId variable 


3) IIFE (Immediately Invoked Function Expression)
A big issue with closures can be that they access outer function variables or global variables that changed before even being invoked. Like this: 

EX)
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}
​
​var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
​
​var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
​
​var stalloneID = createIdForActionCelebs [0];  console.log(stalloneID.id()); // 103


*IIFEs immediately invoke the closure functions, like this: 

EX)
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE​
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array​
            } () // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.​
        } (i); // immediately invoke the function passing the i variable as a parameter​
    }
​
    return theCelebrities;
}
​
​var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
​
​var createIdForActionCelebs = celebrityIDCreator (actionCelebs);
​
​var stalloneID = createIdForActionCelebs [0];
 console.log(stalloneID.id); // 100​
​
​var cruiseID = createIdForActionCelebs [1]; console.log(cruiseID.id); // 101









