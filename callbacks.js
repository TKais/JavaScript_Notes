--CALLBACKS--

A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction

*We can pass functions around like variables and return them in other functions.

------------------------------------------------------------------------

HOW CALLBACKS WORK

*When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis () like we do when we are executing a function

*since the containing function has the callback function in its parameter as a function definition, it can execute the callback anytime. IT IS NOT EXECUTED IMMEDIATELY.

*Even anonymous functions are called back later not immediately.

------------------------------------------------------------------------

CALLBACKS === CLOSURES

*Like closures, the callback function can access the containing functions’ variables, and even the variables from the global scope

------------------------------------------------------------------------

NAMED OR ANONYMOUS FUNCTIONS CAN BE CALLBACKS

EX) ANONYMOUS
var friends = ["Mike", "Stacy", "Andy", "Rick"];
​
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});

---

EX) NAMED
 // global variable​
​var allUserData = [];
​
​// generic logStuff function that prints to console​
​function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }
​
    }
​
}
​
​// A function that takes two parameters, the last one a callback function​
​function getInput (options, callback) {
    allUserData.push (options);
    callback (options);
​
}
​
​// When we call the getInput function, we pass logStuff as a parameter.​
​// So logStuff will be the function that will called back (or executed) inside the getInput function​
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
​//  name: Rich​
​// speciality: JavaScript

------------------------------------------------------------------------

PASS PARAMETERS TO CALLBACK FUNCTIONS

*We can pass any of the containing function’s properties (or global properties) as parameters to the callback function

EX)
var lastName = "Clinton";

function getInput(options, callback){
  allUserData.push(options);
  callback(lastName, options);
}

*Callbacks must always be functions!

*Best practice to make the callback optional

------------------------------------------------------------------------

USING 'this' WITH CALLBACKS

*When the callback function uses the 'this' object, we have to make slight changes to make sure it holds the accurate context of 'this'.














