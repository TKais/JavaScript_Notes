HOW TO USE:

After downloading and unzipping, open SpecRunner.html in the browser and change necessary files in the <head> tag. Then, link those necessary files that contain your JavaScript in the source/spec folder.


DESCRIBE:

The beginning of a test suite. Describe takes two parameters: a string and a function. The string is the name of what is being tested, and the function implements the suite. 

EX)  
describe('A suite', function(){
  it('contains spec with an expectation', function(){
    expect(true).toBe(true);
  });
});



IT:

Defines the actual specs of a test. Also takes two parameters: a string and a function. The string is the title of the spec and the function is the actual spec/test. 



EXPECTATIONS:

Take a value called the actual (actual value in the code) and chains it to the expected value. 



MATCHERS:

