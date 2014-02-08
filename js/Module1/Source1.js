/**
* Created by Spero on 2/1/14.
*/
var Snooki = (function () {
    function Snooki(jersey) {
        this.jersey = jersey;
        if (jersey == "widow")
            alert("she's dead, Jim");
    }
    Snooki.prototype.sum = function () {
        var numbers = [];
        for (var _i = 0; _i < (arguments.length - 0); _i++) {
            numbers[_i] = arguments[_i + 0];
        }
        var aggregateNumber = 0;
        for (var i = 0; i < numbers.length; i++)
            aggregateNumber += numbers[i];
        return aggregateNumber;
    };
    return Snooki;
})();
//# sourceMappingURL=Source1.js.map
