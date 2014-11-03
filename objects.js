An object is an unordered list of primitive data (and sometimes reference data types) types that are stored as name-value pairs

---------------------------------------------------------------------------------

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

---------------------------------------------------------------------------------------

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

---------------------------------------------------------------------------------------

An inherited property is defined on the object’s prototype property. Meaning, an object will inherit a new property based on the prototype method passed for that object. For example: someObject.prototype.firstName = “rich”;

---------------------------------------------------------------------------------------

Examples of methods using object prototype inheritance.

Fruit.prototype.showName = function () {
console.log("This is a " + this.fruitName);
}
​
Fruit.prototype.nativeTo = function () {
            console.log("Grown in:" + this.nativeToLand);
}