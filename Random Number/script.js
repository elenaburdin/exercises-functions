function checkPalindrome(str) {
    if (str == str.split('').reverse().join('')) {
        return true;
    }
    return false;
}


console.log(checkPalindrome("racecar"))
console.log(checkPalindrome("madam"))
console.log(checkPalindrome("madam"))
console.log(checkPalindrome("hello"))
console.log(checkPalindrome("Abracadabra"))


