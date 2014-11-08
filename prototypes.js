WHY IS PROTOTYPE IMPORTANT IN JAVASCRIPT? 

-Prototype is needed because JavaScript doesnt have classical inheritence based on classes like Ruby. 
-All inheritence is made possible through the prototype property in JavaScript.
-Prototype is also important because it helps access properties and methods of objects. Thats where prototype attributes come in.
- .This is loosely analogous to the way you might inherit your surname from your father—he is your “prototype parent.” If we wanted to find out where your surname came from, we would first check to see if you created it yourself; if not, the search will move to your prototype parent to see if you inherited it from him. If it was not created by him, the search continues to his father (your father’s prototype parent).
-JavaScript will look through the prototype chain to find an objects properties. If it doesnt belong to the object, it will look to the prototype object. If it doesnt belong there, itll go to that objects prototype object. Itll keep going until there arent anymore prototype objects/attributes, then return "undefined".  

EX)
function Plant(){
  this.country = "Mexico";
  this.isOrganic = true;
}

Plant.prototype.showNameAndColor = function() {
  console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function() {
  if(this.isOrganic === true) {
    console.log("I am organic");
  }
}

function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

Fruit.prototype = new Plant();
var banana = new Fruit("Banana", "yellow");
console.log(banana.name); //banana
console.log(banana.showNameAndColor());//// I am a Banana and my color is yellow

This is the prototype chain! bananas prototype object is Fruit.prototype and Fruit inherited from Plant.prototype.

EX)
var myFriends = {name: "Pete"};
console.log(myFriends.name); //will find name directly on the object and return "Pete"


------------------------------------------------------------------------------------------

TWO MAIN CONCEPTS IN PROTOTYPES

1) Prototype Property = 
   -Every JavaScript function has it
   -Its empty by default
   -Attach properties and methods to it when you want to implement inheritence
   -Not enumerable (meaning it will not be logged out in a for/in loop)
   -Used primarily for inheritence: you add methods and properties on a function’s prototype property to make those methods and properties available to instances of that function.

   EX)

   function PrintStuff(myDocuments){
    this.documents = myDocuments;
   }

  //Add print() method to PrintStuff prototype property so that other instances (objects) can inherit it
   PrintStuff.prototype.print = function(){
    console.log(this.documents);
   }

   //create new object with PrintStuff() constructor, allowing new objects to inherit PrintStuff's properties and methods
   var newObj = new PrintStuff("This is a new document that represents myDocuments");
   newObj.print(); //This is a new document that represents myDocuments

2) Prototype Attribute = 
   -A characteristic of the object
   -Tells us the objects parent (who it inherited properties from)
   -Referred to as the 'prototype object'
   -Automatically set when you create a new object
   -Every object inherits properties from some other object
   -newObjs prototype is the PrintStuff prototype 
   -All objects have attributes just like all object properties have attributes / object attributes are prototype, class, and extensible attributes. 

--------------------------------------------------------------------------------------------
 PROTOTYPE ATTRIBUTE OF OBJECTS CREATED WITH new Object() OR OBJECT LITERAL

   -All objects created with object literals and object constructors inherits from Object.prototype
   -So, Object.prototype is the prototype attribute (or prototype object) of all objects created with new Object() or {}. Object.prototype doesnt inherit from anyone. Its the king. 

   EX)
   var userAccount = new Object();
   //same as this
   var userAccount = {name: "Mike"}; 

--------------------------------------------------------------------------------------------
 
 PROTOTYPE ATTRIBUTE OF OBJECTS CREATED WITH CONSTRUCTOR FUNCTION 

   -Objects created with the new keyword and any constructor other than the Object ()constructor, get their prototype from the constructor function.

  EX)
  function Account() {

  }

  var userAccount = new Account() // userAccount initialized with the Account () constructor and as such its prototype attribute (or prototype object) is Account.prototype

  var myArray = new Array() //gets its prototype from Array.prototype and inherits Array.prototypes properties

  ------------------------------------------------------------------------------------------

  TWO WAYS AN OBJECTS PROTOTYPE ATTRIBUTE IS SET WHEN OBJECT IS CREATED

  1) If created with an object literal, it inherits properties from Object.prototype and its prototype object/attribute is Object.prototype.
    var newObj = {}; //Object.prototype

  2) If created with a constructor function (with 'new' keyword) it inherits from that constructor. 
    function Fruit() { this.type = type; this.color = color;}
    var watermelon = new Fruit();
    //Fruit.prototype

