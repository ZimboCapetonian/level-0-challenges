/*let string1;
let string2;

function findSharedLetters(string1, string2) {
    //return  string.match(/[aeiouAEIOU]/ig, '');
    if (s1.legnth < s2.length) {
        string1 = s1;
        string2 = s2;
        } else {
            string1 = s2;
            string2 = s1;
        }
    for (let i = 0; i < string1.length; i++) {
        if (string2.indexOf(string1[i]) !== -1) {
            return yes
        }
    }

    }

    console.log(findSharedLetters("Apples", "Aresenal"));
    console.log(findSharedLetters("This was hard", "Did you like the house?"));
    */


    /*function twoStrings(s1, s2) {
        let shortStr;
        let longStr;
        
        if(s1.length < s2.length){
          shortStr = s1;
          longStr = s2;
        }else{
          shortStr = s2;
          longStr = s1;
        }
        
        for(let i = 0; i < shortStr.length; i++){
          if(longStr.indexOf(shortStr[i]) !== -1){
            return  string.match(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/ig, '');
          }
        }
        
        return  string.match(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/ig, '');
      }

      console.log(twoStrings("Apples", "Aresenal"));
    console.log(twoStrings("This was hard", "Did you like the house?"));
    */
    

    /*function findSharedLetters(string1, string2) {

        if (string1 && string2)
        
        
        //return  string1.match(/[aeiouAEIOU]/ig, '');
        }
    
        console.log(printVowels("Apples Suck", "Oranges also"));
        console.log(printVowels("This was hard"));*/

function commonChars(string1, string2) {
  var string1 = "";
  var string2 = "";
  
  var result1 = string1.includes(/'aeiouAEIOU/g);
  var result2 = string2.includes(result1);
  
  return result();
}
  
            /*const [first, ...rest] = A.sort((a,b) => -(a.length - b.length));
            const duplicates = [];
            [...first].forEach(e => {
              let isDuplicate = true;
              for (let x = 0, len = rest.length; x < len; x++) {
                let letters = rest[x];
                const i = letters.search(e);
                if (i !== -1) {
                  letters = letters.slice(0, i) + letters.slice(i + 1);
                  rest[x] = letters;
                } else {
                  isDuplicate = false;
                }
              }
              if (isDuplicate) {
                duplicates.push(e);
              }
            });
            return duplicates;*/


          
          
console.log(commonChars("Apples Suck", "Oranges also"));