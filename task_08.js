function minutesToHours(d) {
    var digit = d;
    var minutes = digit % 60;
    var hours = Math.floor(digit / 60);
        
    return digit + " will become " + hours + " hours, " + minutes + " minutes.";

}

console.log(minutesToHours(347));