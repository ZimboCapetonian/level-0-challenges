function minutesToHours(d) {
    var digit = d;
    var minutes = digit % 60;
    var hours = Math.floor(digit / 60);
    if (hours > 1 && minutes > 1) {
        return digit + " will become " + hours + " hours, " + minutes + " minutes.";
    } else if (hours >= 1 && minutes === 1) {
        return digit + " will become " + hours + " hours, " + minutes + " minute.";
    } else if (hours < 1 && minutes === 1) {
      return digit + " will become " + minutes + " minute.";
    } else if (hours == 1 && minutes == 1) {
      return digit + " will become " + hours + " hour, " + minutes + " minute.";
    } else if (hours ==1 && minutes > 1) {
      return digit + " will become " + hours + " hour, " + minutes + " minutes."; 
    }
    else {
        return digit + " will become " + minutes + " minutes.";
    }
    
}

console.log(minutesToHours(347));
console.log(minutesToHours(71));
console.log(minutesToHours(61));