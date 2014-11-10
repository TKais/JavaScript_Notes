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


2) 











