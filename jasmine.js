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
1 - it("and has a positive case", function() {
    expect(true).toBe(true);
  });
2 - it("and can have a negative case", function() {
    expect(false).not.toBe(true);
  });
});
3 - describe("The 'toEqual' matcher", function() {

    it("works for simple literals and variables", function() {
      var a = 12;
      expect(a).toEqual(12);
    });
4 - it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  });
5 - it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });
6 - it("The 'toBeDefined' matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).toBeDefined();
    expect(a.bar).not.toBeDefined();
  });
7 - it("The `toBeUndefined` matcher compares against `undefined`", function() {
    var a = {
      foo: "foo"
    };

    expect(a.foo).not.toBeUndefined();
    expect(a.bar).toBeUndefined();
  });
8 - it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(foo).toBeTruthy();
    expect(a).not.toBeTruthy();
  });
9 - it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
  });
10 - it("The 'toContain' matcher is for finding an item in an Array", function() {
    var a = ["foo", "bar", "baz"];

    expect(a).toContain("bar");
    expect(a).not.toContain("quux");
  });
11 - it("The 'toBeLessThan' matcher is for mathematical comparisons", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(e).toBeLessThan(pi);
    expect(pi).not.toBeLessThan(e);
  });
12 - it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).toBeGreaterThan(e);
    expect(e).not.toBeGreaterThan(pi);
  });
13 - it("The 'toBeCloseTo' matcher is for precision math comparison", function() {
    var pi = 3.1415926,
      e = 2.78;

    expect(pi).not.toBeCloseTo(e, 2);
    expect(pi).toBeCloseTo(e, 0);
  });
14 - it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
    var foo = function() {
      return 1 + 2;
    };
    var bar = function() {
      return a + 1;
    };

    expect(foo).not.toThrow();
    expect(bar).toThrow();
  });
});



DISABLING A SUITE:

Just add an 'x' before describe and it. EX) xdescribe and xit



BEFOREEACH AND AFTEREACH

Made to keep the test suite dry 

beforeEach = function called once before each spec in the describe is run
afterEach = function called after each spec

describe("A spec (with setup and tear-down)", function() {
  var foo;

  beforeEach(function() {
    foo = 0;
    foo += 1;
  });

  afterEach(function() {
    foo = 0;
  });

  it("is just a function, so it can contain any code", function() {
    expect(foo).toEqual(1);
  });

  it("can have more than one expectation", function() {
    expect(foo).toEqual(1);
    expect(true).toEqual(true);
  });
});

























