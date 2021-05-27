function printVowels(str){
  var matches = str.match(/[aeiouAEIOU]/gi);
   return matches;

}

 console.log(printVowels("Apples"))
