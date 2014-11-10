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

