function isSentencePalindrome(sentence) {
    const normalizedSentence = sentence.toLowerCase().replace(/\s+/g, '');
    
    const reversedSentence = normalizedSentence.split('').reverse().join('');
    
    return normalizedSentence === reversedSentence;
}

console.log(isSentencePalindrome("Step on no pets")); // true
console.log(isSentencePalindrome("Hello world"));    // false
console.log(isSentencePalindrome("Was it a car or a cat I saw")); // true
console.log(isSentencePalindrome("No lemon no melon")); // true
