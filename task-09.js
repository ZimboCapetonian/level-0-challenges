function printVowels(string) {
    return  string.match(/[aeiouAEIOU]/ig, '');
    }

    console.log(printVowels("Apples Suck"));//['e', 'o', 'o']
    console.log(printVowels("This was hard"));//['O','U','i','o','u']