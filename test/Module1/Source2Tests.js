/// <reference path='..\..\js\Module1\Source1.ts' />
/// <reference path='..\..\resources\qunit-1.10.0.d.ts' />
test("a basic test example", function () {
    var value = "hello";
    equal(value, "hello", "We expect value to be hello");
});

test("test simple51", function () {
    var myVar = new Snooki('howdy');
    equal(myVar.sum(1, 5, 10, 15, 20), 51, "should equal 51");
});

test("test simple6", function () {
    var myVar = new Snooki('howdy');
    equal(myVar.sum(1, 5), 6, "should equal 6");
});

test("test simple6 not 66", function () {
    var myVar = new Snooki('howdy');
    equal(myVar.sum(1, 5), 6, "should equal 6, not 66");
});

test("test simple20", function () {
    var myVar = new Snooki('howdy');
    equal(myVar.sum(10, 10), 20, "should equal 20");
});
//# sourceMappingURL=Source2Tests.js.map
