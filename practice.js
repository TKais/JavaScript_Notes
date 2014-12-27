function greeting(callback){
  var name = "Bob";
  console.log("Hey there, " + name);
  callback(name);
}

function getAge(name){
  var age = 28;
  console.log("You are " + age + " and your name is " + name);
}


greeting(getAge);

// /////////////////////////////////////////////////////////////////

function Car(make, model){
  this.make = make;
  this.model = model;
}


Car.prototype = {

  drive: function(){
    if(this.make === "Toyota" && this.model === "Prius"){
      console.log('This is an eco-friendly car');
    } else {
      console.log('Not so eco-friendly');
    }
  }
};



var prius = new Car("Toyota", "Prius");
prius.drive();  //This is an eco-friendly car

var escape = new Car("Ford", "Escape");
escape.drive();    //Not so eco-friendly


////////////////////////////////////////////////////////////////////////////////


function likeMe(callback){
  var question = prompt("Do you like me?");
  var yes = "yes";
  var no = "no";
  if(question === yes){
    console.log("Yay! Let's move on to the next question");
    callback();
  } else {
    console.log("Oh...nevermind");
  }
};

function loveMe(){
  var question = prompt("Do you love me?");
  var yes = "yes";
  var no = "no";
  if(question === yes){
    console.log("Yay! One more question");
    (function(){
      var anotherQ = prompt("Will you marry me?");
      if(anotherQ === yes){
        console.log("You've made me the happiest human being alive");
      } else {
        console.log("NOOOOOOOO");
      }
    })();
  } else {
    console.log("Oh...ok, nevermind");
  }
};


likeMe(loveMe);



////////////////////////////////////////////////////////////////////////////////////



function practice(thing){
  if(typeof thing === 'number'){
    console.log("It's a number");
  } else if(typeof thing === 'string'){
      console.log("It's a string");
  } else if(typeof thing === 'object'){
    console.log("It's an object");
  } else if(typeof thing === 'undefined'){
    console.log("It's undefined");
  } else if(typeof thing === 'function'){
    console.log("It's a function")
  } else {
    console.log("No idea");
  }
};




practice("hey");  //string
practice(10);    //number
practice(null);   //object
practice({});     //object
practice(undefined);   //undefined
practice(function(){});  //function



//////////////////////////////////////////////////////////////////////////////////////////


//IFFE


function practice(){
  var name = "Tiff";
  (function(){
    console.log("Hey there " + name);
  })()
};


practice();    //Hey there Tiff

/////////////////////////////////////////////////////////////////////////////////////////////

function practice(){
  var name = "Tiff";
  function(){
    console.log("Hey there " + name);
  }
}


practice();











