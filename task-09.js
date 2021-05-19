function printVowels(string) {
    return  string.match(/[aeiouAEIOU]/ig, '');
    }

    console.log(printVowels("Apples Suck"));
    console.log(printVowels("This was hard"));