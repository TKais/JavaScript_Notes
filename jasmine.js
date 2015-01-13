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

Implements a boolean comparison between the actual value and the expected value. 

Some included matchers:
1 - expect(true).toBe(true)
2 - expect(false).not.toBe(true);
3 - var a = 12;
      expect(a).toEqual(12);
4 - var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
5 - expect(message).toMatch(/bar/);
6 - var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
7 - var a = null;
    var foo = "foo";

    expect(null).toBeNull();
    expect(a).toBeNull();
    expect(foo).not.toBeNull();
8 - var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
9 - var a, foo = "foo";

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
10 - var a = ["foo", "bar", "baz"];

    expect(a).toContain("bar");
    expect(a).not.toContain("quux");
11 - var pi = 3.1415926,
      e = 2.78;

    expect(e).toBeLessThan(pi);
    expect(pi).not.toBeLessThan(e);
12 - var pi = 3.1415926,
      e = 2.78;

    expect(pi).toBeGreaterThan(e);
    expect(e).not.toBeGreaterThan(pi);
13 - var pi = 3.1415926,
      e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
14 - var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();


























