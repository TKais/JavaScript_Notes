// //CALLBACKS

// function greeting(callback){
//   var name = "Bob";
//   console.log("Hey there, " + name);
//   callback(name);
// }

// function getAge(name){
//   var age = 28;
//   console.log("You are " + age + " and your name is " + name);
// }


// greeting(getAge);

// // /////////////////////////////////////////////////////////////////
// //CONSTRUCTOR FUNCTION WITH PROTOTYPE INHERITENCE

// function Car(make, model){
//   this.make = make;
//   this.model = model;
// }


// Car.prototype = {

//   drive: function(){
//     if(this.make === "Toyota" && this.model === "Prius"){
//       console.log('This is an eco-friendly car');
//     } else {
//       console.log('Not so eco-friendly');
//     }
//   }
// };



// var prius = new Car("Toyota", "Prius");
// prius.drive();  //This is an eco-friendly car

// var escape = new Car("Ford", "Escape");
// escape.drive();    //Not so eco-friendly


// ////////////////////////////////////////////////////////////////////////////////
// //USING CALLBACKS AND A CLOSURE


// function likeMe(callback){
//   var question = prompt("Do you like me?");
//   var yes = "yes";
//   var no = "no";
//   if(question === yes){
//     console.log("Yay! Let's move on to the next question");
//     callback();
//   } else {
//     console.log("Oh...nevermind");
//   }
// };

// function loveMe(){
//   var question = prompt("Do you love me?");
//   var yes = "yes";
//   var no = "no";
//   if(question === yes){
//     console.log("Yay! One more question");
//     (function(){
//       var anotherQ = prompt("Will you marry me?");
//       if(anotherQ === yes){
//         console.log("You've made me the happiest human being alive");
//       } else {
//         console.log("NOOOOOOOO");
//       }
//     })();
//   } else {
//     console.log("Oh...ok, nevermind");
//   }
// };


// likeMe(loveMe);



// ////////////////////////////////////////////////////////////////////////////////////
// //USING TYPEOF TO UNDERSTAND DATA TYPES


// function practice(thing){
//   if(typeof thing === 'number'){
//     console.log("It's a number");
//   } else if(typeof thing === 'string'){
//       console.log("It's a string");
//   } else if(typeof thing === 'object'){
//     console.log("It's an object");
//   } else if(typeof thing === 'undefined'){
//     console.log("It's undefined");
//   } else if(typeof thing === 'function'){
//     console.log("It's a function")
//   } else {
//     console.log("No idea");
//   }
// };




// practice("hey");  //string
// practice(10);    //number
// practice(null);   //object
// practice({});     //object
// practice(undefined);   //undefined
// practice(function(){});  //function



// //////////////////////////////////////////////////////////////////////////////////////////
// //IFFE


// function practice(){
//   var name = "Tiff";
//   (function(){
//     console.log("Hey there " + name);
//   })()
// };


// practice();    //Hey there Tiff

/////////////////////////////////////////////////////////////////////////////////////////////
//USING FS TO READ A FILE

var fs = require('fs');                                            //fs library


var email = '/Users/tiffanykaiser/Desktop/example.txt';            //path to file to be read  
var variables = new Array('--FirstName--', '--LastName--', '--Name--');
var emailString, splitEmailText;                                     //make each word in email a string and split it

function readEmail(callback) {
  fs.readFile(email, function (err, data) {
    emailString = data.toString(); 
    splitEmailText = emailString.split(' '); 
    callback();
  });
}

function checkDashes() {
  for(i = 0; i < variables.length; i++){                  //loop through variables in array
    for(x in splitEmailText){                             //loop through words in email
      if(variables[i] === splitEmailText[x]){            //if any of the variables are found in the email
        console.log(variables[i]);
      } else {
        console.log(splitEmailText[x]);                 //else just leave the email text alone
      }
    }
  }
};

// firstFunction(secondFunction);
readEmail(checkDashes);
//still working on this one










