HOW TO USE:

After downloading and unzipping, open SpecRunner.html in the browser and change necessary files in the <head> tag. Then, link those necessary files that contain your JavaScript in the source/spec folder.


DESCRIBE:

describe takes two parameters: a string and a function. The string is the name of what is being tested, and the function implements the suite. 

EX)  
describe('A suite', function(){
  it('contains spec with an expectation', function(){
    expect(true).toBe(true);
  });
});