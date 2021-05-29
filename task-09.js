function findVowels(str) {
  str = str.toLowerCase()
  let vowels = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
      vowels += str[i] + ", "
      
    }
  }
  console.log(Array.from(new Set(vowels)).join(""));
}

findVowels("Apples");
findVowels("Umuzi");