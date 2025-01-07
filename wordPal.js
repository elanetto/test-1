function isWordPalindrome(word) {
    const normalizedWord = word.toLowerCase();
    
    const reversedWord = normalizedWord.split('').reverse().join('');
    
    return normalizedWord === reversedWord;
}

console.log(isWordPalindrome("hello")); // false
console.log(isWordPalindrome("Bob"));   // true
console.log(isWordPalindrome("madam")); // true
console.log(isWordPalindrome("Racecar")); // true
