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