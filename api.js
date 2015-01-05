BASIC API REQUEST AND RESPONSE CYCLE 

var xhr = new XMLHttpRequest();                            //create a variable that holds the new request object
xhr.open("GET", "http://www.codecademy.com/", false);      //open with a 'get' status to codeacademy site
xhr.send();                                                //actually send the request

console.log(xhr.status);                                   //console.log the status       (200)
console.log(xhr.statusText);                               //console.log the status text  (OK)