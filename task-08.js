function minutesToHours(d) {
    var digit = d;
    var hours = (digit / 60);
    var amountOfH = Math.floor(hours);
    var minutes = (hours - amountOfH) * 60;
    var amountOfM = Math.round(minutes);
    return digit + " will become " + amountOfH + " hours, " + amountOfM + " minutes.";

}

console.log(minutesToHours(347));