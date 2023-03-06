function countVowel(str) {
    str = str.toLowerCase();
    let countVowel = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
        if (vowel.includes(char)) {
            countVowel++;
        }
    }
    return countVowel;
}

console.log(countVowel("Hello"))
console.log(countVowel("Umbrella"))
console.log(countVowel("Simon"))


