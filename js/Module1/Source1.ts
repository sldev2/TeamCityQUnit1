/**
 * Created by Spero on 2/1/14.
 */

class Snooki {
    booby: string;
    goober: string;

    constructor(public jersey: string){
        if(jersey == "widow")
            alert("she's dead, Jim");
    }

    sum(...numbers: number[]) {
        var aggregateNumber = 0;
        for (var i = 0; i < numbers.length; i++)
            aggregateNumber += numbers[i];
        return aggregateNumber;
    }
}