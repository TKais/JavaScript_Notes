An object is an unordered list of primitive data (and sometimes reference data types) types that are stored as name-value pairs

---------------------------------------------------------------------------------
JavaScript has one complex data type, the Object data type, and it has five simple data types: Number, String, Boolean, Undefined, and Null. Note that these simple (primitive) data types are immutable, they cannot be changed, while objects are mutable.
-----------------------------------------------------------------------------------

Object Literals

// This is an empty object initialized using the object literal notation​
​var myBooks = {};
​
​// This is an object with 4 items, again using object literal​
​var mango = {
color: "yellow",
shape: "round",
sweetness: 8,
​
​howSweetAmI: function () {
console.log("Hmm Hmm Good");
}
}

*Object literals use 'var object' that is equal to a hash of key-value pairs.

-------------------------------------------------------------------------------------

Object Constructor

 The second most common way to create objects is with Object constructor. A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
var mango =  new Object ();
mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;
​
mango.howSweetAmI = function () {
console.log("Hmm Hmm Good");
}

*Constructors use 'function object' NOT equal to but has a hash of key-value pairs following it. Each key must be bound to the object, so use 'this'.

--------------------------------------------------------------------------------------

Constructor Pattern for Creating Objects

function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {
​
    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;
​
    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }
​
    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }
}

*This allows for many fruits to be made off of one object model instead of creating various different fruits with the same properties. 
NOW you can make this:


var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.​
mangoFruit.nativeTo();
​//Grown in:South America​
​// Grown in:Central America​
​// Grown in:West Africa​
​
​var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // This is a Pineapple.

--------------------------------------------------------------------------------------

An inherited property is defined on the object’s prototype property. Meaning, an object will inherit a new property based on the prototype method passed for that object. For example: someObject.prototype.firstName = “rich”;

--------------------------------------------------------------------------------------

Examples of methods using object prototype inheritance.

Fruit.prototype.showName = function () {
console.log("This is a " + this.fruitName);
}
​
Fruit.prototype.nativeTo = function () {
            console.log("Grown in:" + this.nativeToLand);
}
--------------------------------------------------------------------------------------

Primitive Data Types

These are stored directly on the variable, where reference data types are not. 

EX)
// The primitive data type String is stored as a value​
var person = "Kobe";  
​var anotherPerson = person; // anotherPerson = the value of person​
person = "Bryant"; // value of person changed​
​
console.log(anotherPerson); // Kobe​
console.log(person); // Bryant

--------------------------------------------------------------------------------------

Reference Data Types

Not stored directly on the variable as a value -- just as reference.

EX)
var person = {name: "Kobe"};
​var anotherPerson = person;
person.name = "Bryant";
​
console.log(anotherPerson.name); // Bryant​
console.log(person.name); // Bryant

 when we changed the person.name property to “Bryant” the anotherPerson reflected the change because it never stored an actual copy of it’s own value of the person’s properties, it only had a reference to it.

 -------------------------------------------------------------------------------------

 3 Attributes of Object Data Properties

 These 3 are set to true by default

 -Configurable attribute: whether property can be deleted or changed
 -Enumerable: whether the property can be returned in a for/in loop
 -Writable: Whether the property can be changed

 ----------------------------------------------------------------------------------------

 Access an objects properties through dot or bracket notation:

 DOT

 var chocolate = new Cookie();
 chocolate.cookTime = 24;

 BRACKET

 chocolate["cookTime"]

 ------------------------------------------------------------------------------------------

 OWN VS INHERITED PROPERTIES

 Own = properties that were defined when the object was created
 Inherited = properties inherited from the objects prototype object

 Important to know because from time to time you need to enumerate an object and you want only the own properties, not the inherited ones

 EX) 
Find out if property exists on an object (own or inherited):

var school = {schoolName: "MIT"};
console.log("schoolName" in school); //true
console.log("schoolType" in school); //false

EX)
Find out if object has an own property only:

var school = {schoolName: "MIT"};
console.log(school.hasOwnProperty("schoolName")); //true
console.log(school.hasOwnProperty("toString")); //false


