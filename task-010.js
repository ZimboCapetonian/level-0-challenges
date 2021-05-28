let MAX_CHAR = 26;
function findCommonChars(str1, str2) {
  let arr1 = new Array(MAX_CHAR);
  let arr2 = new Array(MAX_CHAR);
  for (let i = 0; i < MAX_CHAR; i++) {
    arr1[i] = 0;
    arr2[i] = 0;
   }
   let length1 = str1.length;
   let length2 = str2.length;

   for (let i = 0; i < length1; i++)
   arr1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;

   for (let i = 0; i < length2; i++)
   arr2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
   for (let i = 0; i <MAX_CHAR; i++) {
     if (arr1[i] !== 0 && arr2[i] !== 0) {
       for (let j = 0; j < Math.min(arr1[i], arr2[i]); j++)
       console.log((String.fromCharCode(i + 'a'.charCodeAt(0))));
     }
   }
}
let str1 = "apples", str2 = "arsenal";
findCommonChars(str1, str2);