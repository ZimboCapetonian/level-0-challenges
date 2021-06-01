function findVowels(str) {
  str = str.toLowerCase()
  let vowels = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
      vowels += str[i] + ", "
      
    }
  }
  let result = Array.from(new Set(vowels)).join("");
  let printOut = "Vowels: " + result;
  console.log(printOut);
}

findVowels("Apples");
findVowels("Umuzi");