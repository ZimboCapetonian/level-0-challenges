function minutesToHours(d) {
    var digit = d;
    var remainderOfH = digit % 60;
    var hours = (digit / 60) - remainderOfH ;
    
    var minutes = (hours - remainderOfH) * 60;
    var amountOfM = Math.round(minutes);
    return digit + " will become " + hours + " hours, " + amountOfM + " minutes.";

}

console.log(minutesToHours(347));