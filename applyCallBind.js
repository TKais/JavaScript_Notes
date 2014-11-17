--APPLY, CALL & BIND --

*Functions are objects, and have methods --including bind, call and apply. 

*Apply and call are nearly identical, except apply takes an array as the second argument. They are both used for setting the 'this' value explicitly, and borrowing methods.

*Bind is used to set the 'this' value in methods.

-------------------------------------------------------------------------------

BIND

*Bind primarily allows us to set which object is bound to 'this' when a function or method is invoked.

EX)
var user = {
    data        :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    clickHandler:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
​
        // This line is adding a random person from the data array to the text field​
        $ ("input").val (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
​
}
​
​// Assign an eventHandler to the button's click event​
$ ("button").click (user.clickHandler);
//this gives an error because the 'this' in the method is now bound to the button html object


//Do this instead-----------------------------------------------
$ ("button").click (user.clickHandler.bind (user));
//this binds the method's 'this' to the user object, even if it's invoked by the button object


























