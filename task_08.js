function minutesToHours(digit) {
    var minutes = digit % 60;
    var hours = Math.floor(digit / 60);
    if (hours > 1 && minutes > 1) {
        return digit + " will become " + hours + " hours, " + minutes + " minutes.";
    } else if (hours > 1 && minutes === 1) {
        return digit + " will become " + hours + " hours, " + minutes + " minute.";
    } else if (hours < 1 && minutes === 1) {
      return digit + " will become " + minutes + " minute.";
    } else if (hours == 1 && minutes == 1) {
      return digit + " will become " + hours + " hour, " + minutes + " minute.";
    } else if (hours == 1 && minutes > 1) {
      return digit + " will become " + hours + " hour, " + minutes + " minutes."; 
    } else if (hours == 1 && minutes == 0) {
      return digit + " will become " + hours + " hour."; 
    } else if (hours > 1 && minutes == 0) {
      return digit + " will become " + hours + " hours."; 
    }
    else {
        return digit + " will become " + minutes + " minutes.";
    }
    
}

console.log(minutesToHours(347));
console.log(minutesToHours(71));
console.log(minutesToHours(61));
console.log(minutesToHours(41));
console.log(minutesToHours(60));
console.log(minutesToHours(181));
console.log(minutesToHours(180));