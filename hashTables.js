// A hash table is just an associative array with key/value pairs, much like a hash in Ruby. All non-scalar objects in JavaScript act like associative array (hash tables) and look like this:

var hashTable = {};

hashTable['key1'] = 1;
hashTable['key2'] = 2;
hashTable['key3'] = 3;

console.log(hashTable); // { key1: 1, key2: 2, key3: 3 }


//Show the values inside

var hashTable = {};

hashTable['key1'] = 1;
hashTable['key2'] = 2;
hashTable['key3'] = 3;

for(var x in hashTable){
  if(hashTable.hasOwnProperty(x)){ //use hasOwnProperty to filter out keys from Object.prototype
    console.log('key is: ' + x + '. and the value is: ' + hashTable[x]);
  }
}


//Cannot use the length() function with hash tables because it's not indexed like arrays