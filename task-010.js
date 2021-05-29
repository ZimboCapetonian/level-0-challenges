function findCommon(str1, str2) {
  let resultStr = "";
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        resultStr += str1[i] + ", ";
      }
    }
  }
  return Array.from(new Set(resultStr)).join("");
}

console.log(findCommon("Algea", "Reality"));