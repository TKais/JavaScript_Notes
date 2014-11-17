--JAVASCRIPT EXAMPLE--


var foobar = function(callback) {
    setTimeout(function() {
        // trigger callback after 1000ms
        callback();
    }, 1000);
};

var foo = {
    key: {
      nestedKey: 'value'
    },
    array: [1],
    nestedArray: [1, 2, ['2a', ['2a-I']]]
}

//now that the callback function and object literal are set up, we can call them.

foobar(function() {
    alert(foo.array);
});
//foobar is called and once 1000 milliseconds goes by, the number 1 is alerted. 





--COFFEESCRIPT EXAMPLE--

foobar = (callback) ->
  setTimeout (->
    
    # trigger callback after 1000ms
    callback()
    return
  ), 1000
  return

foo =
  key:
    nestedKey: "value"

  array: [1]
  nestedArray: [
    1
    2
    [
      "2a"
      ["2a-I"]
    ]
  ]

foobar ->
  alert foo.array
  return

---------------------------------------------------------------------------------

COFFEESCRIPT BASICS

()-> //this is a function

coffee = -> //is the same as 
coffee()

coffee = (message) -> //is the same as 
coffee("Yo");

coffee = (message, other) -> //is the same as
coffee("Yo", 2)

*Message and Other above are both parameters being passed to the function

---------------------------------------------------------------------------------

USING DEFAULT PARAMETERS 

coffee = (message = "Ready for some Coffee?") ->
  answer = confirm message
  "Your answer is #{answer}"

alert coffee() //Ready for some Coffee?
alert coffee("Want some decaf?") //Want some decaf?


//It compiles into this JavaScript...

var coffee;
coffee = function(message){
    var answer;
    if(message == null){
        message = "Ready for some Coffee?";
    }
    answer = confirm(message);
    return "Your answer is " + answer;
}

---------------------------------------------------------------------------------
























