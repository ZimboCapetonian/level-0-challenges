/*function printCommonLetters(str1, str2) {
  let output = str1.match(str2);
  return output;
}

function commonChars(a, b) {
  
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        var result = a[i];
        return result;
      }
    }
  }
  return result2;
}*/

function printCommLett(string1, string2) {
  let result2 = string2.includes(string1);
  return result2;
}


//console.log(printCommonLetters("Apples Suck", "Oranges also");
//console.log(commonChars("Apples Suck", "Oranges also");
console.log(printCommLett("Apples Suck", "Oranges also"));
