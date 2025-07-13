/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
            let newWord = "";
            for (let j = i; j >= 0; j--) {
                newWord += word[j];
            }
            return newWord + word.slice(i + 1, word.length);
        }
    }
    return word;
};
