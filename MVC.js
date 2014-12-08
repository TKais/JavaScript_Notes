--$(document).ready()  v.s.  window.onload()--

1) $(document).ready() loads the JavaScript functionality right after the html is finished loading, not waiting for images and such on the page. Its faster and adds functionality sooner to the page. Specific to jQuery.

2) window.onload is a DOM element by default, but waits for all html and css to load before adding JavaScript functionality. This can be a pain. Is JS only. 





--Controller--

1) Holds $(document).ready() object and function to load the JS to the document. Inside of this should be:
    1) variables to represent model, view and controller objects (EX, var view = new View(), var controller = new Controller() and var model = new Model())
    2) controller.bindListeners() to load the controllers actions (these attach the view variables (representatives of the html classes or IDs) to the controllers methods)
2) Each controller method should have an action that interacts with the model and another that interacts with the view. It switches between them. Use one model method against one view method.
3) Controller MUST have view and model variables passed to it as two different arguments when creating the Controller constructor object (EX:
  function Controller(view, model){
    this.view = view;
    this.model = model;
  })