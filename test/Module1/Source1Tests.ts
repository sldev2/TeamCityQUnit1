/**
 * Created by Spero on 2/1/14.
 */

/// <reference path='..\..\js\Module1\Source1.ts' />
    /// <reference path='..\..\resources\qunit-1.10.0.d.ts' />




//var snook: Snooki = new Snooki('howdy');
//alert('Snooki sum #1: ' + snook.sum(1, 5, 10,  15, 20).toString());
//alert('Snooki sum #2: ' + snook.sum(1, 5).toString());




test( "a basic test example", function() {                //  example of a qunit test
    var value = "hello";
    equal( value, "hello", "We expect value to be hello" );
});

test( "test simple51", function() {                //  example of a qunit test
        var myVar: Snooki = new Snooki('howdy');
        equal(myVar.sum(1, 5, 10,  15, 20),51, "should equal 51");
    }
);

test( "test simple6", function() {                //  example of a qunit test
        var myVar: Snooki = new Snooki('howdy');
        equal(myVar.sum(1, 5),6, "should equal 51");
    }
);


//test("test complex", function(){
//    var myVar: ns1.sockets.ComplexWebSocket = new ns1.sockets.ComplexWebSocket();
//    myVar.sayHi();
//    equal(myVar.message,"hi, there!", "should say: hi, there!");
//});