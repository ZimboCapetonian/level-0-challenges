function minutesToHours(d) {
    var digit = d;
    var hours = (digit / 60);
    var remHours = Math.floor(hours);
    var minutes = (hours - remHours) * 60;
    var remMinutes = Math.round(minutes);
    return digit + " will become " + remHours + " hours, " + remMinutes + " minutes.";

}

console.log(minutesToHours(347));