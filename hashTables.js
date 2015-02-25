// A hash table is just an associative array with key/value pairs, much like a hash in Ruby. All non-scalar objects in JavaScript act like associative array (hash tables) and look like this:

var hashTable = {};

hashTable['key1'] = 1;
hashTable['key2'] = 2;
hashTable['key3'] = 3;

console.log(hashTable); // { key1: 1, key2: 2, key3: 3 }


//Show the values inside a hash

var hashTable = {};

hashTable['key1'] = 1;
hashTable['key2'] = 2;
hashTable['key3'] = 3;

for(var x in hashTable){
  if(hashTable.hasOwnProperty(x)){ //use hasOwnProperty to filter out keys from Object.prototype
    console.log('key is: ' + x + ' and the value is: ' + hashTable[x]);
  }
}

//Show the values in an array
var array = ['one', 'two', 'three'];
 for(var x in array){
  console.log('This is index: ' + x + ' and this is element ' + array[x]);
 }


//Cannot use the length() function with hash tables because it's not indexed like arrays

hashTable.length; //undefined


//MAKE IT SO WE CAN FIND THE LENGTH, LIKE A REAL HASH TABLE

 //NOTE: In JavaScript, every non-scalar variable is an object. Okay, so what does this mean? Well, essentially, this means it has a constructor, methods and properties

 //HASH TABLES DON'T EXIST IN JAVASCRIPT. We can use Object, Date, Array, etc. object types to simulate hash tables though (use the Object class, as it is the closest thing to a hash table)

 //Think of hash tables like Objects, where key-value is property-value

 function HashTable(obj){
  this.length = 0;
  this.items = {};
  for(var p in obj){
    if(obj.hasOwnProperty(p)){
      this.items[p] = obj[p];
      this.length++;
    }
  }
 }

 var h = new HashTable({'name': 'tiff', 'age': 28, 'location': 'san francisco'});

 console.log(h); //HashTable {length: 3, items: Object}
 console.log(h.items); //Object {name: "tiff", age: 28, location: "san francisco"}
 h.items['sex'] = 'female'; //"female"
 console.log(h.items);  //Object {name: "tiff", age: 28, location: "san francisco", sex: "female"}
 console.log(h.length); //3

 //UH OH...Why didn't it increment above? Because adding properties this way only checks in items -- not object in the original constructor

 //Add a new function to add a property

 function HashTable(obj){
  this.length = 0;
  this.items = {};
  for(var p in obj){
    if(obj.hasOwnProperty(p)){
      this.items[p] = obj[p];
      this.length++;
    }
  }
  this.setItem = function(key,value){
    var previous = undefined;   
    if(this.items.hasOwnProperty(key)){   //checking to see if the key already exists
      previous = this.items[key];         //if it does, don't create a new key, but change the value
    } else {
      this.length++;                      //otherwise, increment the length because it's a new key
    }
    this.items[key] = value;              //set the new key and value to the items hash
  }
 }


var h = new HashTable({'name': 'tiff', 'age': 28, 'location': 'san francisco'});
console.log(h.setItem('one', 1)); //undefined
console.log(h); //HashTable {length: 4, items: Object, setItem: function}
console.log(h.items); //Object {name: "tiff", age: 28, location: "san francisco", one: 1}
console.log(h.length); //4



//WRITING MY OWN BY MYSELF WITHOUT PASSING IN AN OBJECT

function HashTable(){
  this.length = 0;
  this.items = {};
}

HashTable.prototype.addItem = function(key, value){
  this.items[key] = value;
  this.length++;
}

HashTable.prototype.deleteItem = function(key){
  delete this.items[key]
  this.length -= 1;
}


var h = new HashTable();
h.addItem('foo', 'bar');  
console.log(h);           //{ length: 1, items: { foo: 'bar' } }
console.log(h.items);     //{ foo: 'bar' }
console.log(h.length);    //1
h.addItem('tiff', 'kaiser');
console.log(h.items);         //{ foo: 'bar', tiff: 'kaiser' }
console.log(h.length);        //2
h.addItem('shark', 'tank');
console.log(h.items);        //{ foo: 'bar', tiff: 'kaiser', shark: 'tank' }
console.log(h.length);       //3
h.deleteItem('foo');
console.log(h.items);     //{ tiff: 'kaiser', shark: 'tank' }
console.log(h.length);   //2



