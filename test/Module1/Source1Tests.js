/**
* Created by Spero on 2/1/14.
*/
/// <reference path='..\..\js\Module1\Source1.ts' />
/// <reference path='..\..\resources\qunit-1.10.0.d.ts' />
//var snook: Snooki = new Snooki('howdy');
//alert('Snooki sum #1: ' + snook.sum(1, 5, 10,  15, 20).toString());
//alert('Snooki sum #2: ' + snook.sum(1, 5).toString());
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
    equal(myVar.sum(1, 5), 6, "should equal 51");
});
//# sourceMappingURL=Source1Tests.js.map
