BASIC API REQUEST AND RESPONSE CYCLE 

var xhr = new XMLHttpRequest();                            //create a variable that holds the new request object
xhr.open("GET", "http://www.codecademy.com/", false);      //open with a 'get' status to codeacademy site
xhr.send();                                                //actually send the request

console.log(xhr.status);                                   //console.log the status       (200)
console.log(xhr.statusText);                               //console.log the status text  (OK)



An HTTP Request is made up of:
  1. The request line (tells the server what kind of request is being sent (GET, POST, etc.) and what resource its looking for)
  2. The header (sends the server additional information (such as which client is making the request))
  3. The body can be empty (as in a GET request) or contain data (if youre POSTing or PUTing information, that information is contained here).


ENDPOINTS = API-defined locations where particular data are stored. 
     EX) Just as youll GET a pair of pants from PantsWorld or youll GET a bag of peanuts from PeanutHut, youll GET something different depending on the endpoint you use