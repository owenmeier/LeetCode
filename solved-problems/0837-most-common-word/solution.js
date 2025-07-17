/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    words = paragraph.toLowerCase().replace(/[^a-z]/gi, " ").split(/\s+/).filter(word => word.length > 0);
    const freqMap = new Map();
    console.log(words);

    for (let i = 0; i < words.length; i++) {
        if (!banned.includes(words[i]))
        freqMap.set(words[i], (freqMap.get(words[i]) || 0) + 1);
    }

    // console.log(freqMap);

    let maxCount = 0;
let mostCommon = "";

for (let [word, count] of freqMap.entries()) {
    if (count > maxCount) {
        maxCount = count;
        mostCommon = word;
    }
}

return mostCommon;

    
};
