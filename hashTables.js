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

 

