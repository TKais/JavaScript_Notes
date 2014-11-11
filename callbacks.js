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