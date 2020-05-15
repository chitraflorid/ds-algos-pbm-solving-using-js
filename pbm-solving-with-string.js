const str = 'abca';

// Find the first unique character in a given string str.
function findFirstNonRecurringCharacter(str) {
    const characterHash = {};
    const { length } = str;
    let i = 0;

    while (i < length) {
        if (characterHash.hasOwnProperty(str[i])) {
            characterHash[str[i]] += 1;
        } else {
            characterHash[str[i]] = 1;
        }

        i++;
    }

    const keys = Object.keys(characterHash);

    for (let i = 0; i < keys.length; i++) {
        if (characterHash[keys[i]] === 1) {
            return keys[i];
        }
    }

    return null;
}

findFirstNonRecurringCharacter(str);

function findFirstRecurringCharacter(str) {
    const characterHash = {};
    const { length } = str;
    let i = 0;

    while (i < length) {
        if (characterHash.hasOwnProperty(str[i])) {
            return str[i];
        } else {
            characterHash[str[i]] = 1;
        }

        i++;
    }

    return null;
}

findFirstRecurringCharacter(str);

// Find the Longest Substring with At Most K Distinct Characters.
function findLongestSubstringWithKUniqueChars(str, k) {
    const len = str.length;

    if (len <= k) {
        return len;
    }

    let substr = '';
    let max = 0;
    let i = 0;
    const uniqueChars = [str.charAt(0)];
    let subSubstr = '';

    while (i < len) {
        const char = str.charAt(i);

        if (uniqueChars.indexOf(char) >= 0) {
            substr += char;
        } else {
            if (uniqueChars.length >= k) {
                for (let i = 0; i < k - 1; i++) {
                    const char = uniqueChars[i];
                    const firstIndex = substr.indexOf(char);

                    subSubstr = substr.substring(firstIndex + 1);

                    if (subSubstr.indexOf(char) === -1) {
                        uniqueChars.splice(i, 1);
                        break;
                    }
                }
            }

            if (uniqueChars.length < k) {
                uniqueChars.push(char);
                substr = (subSubstr || substr) + char;
            }
        }

        if (max < substr.length) {
            max = substr.length;
        }

        i++;
    }

    return max;
}

findLongestSubstringWithKUniqueChars('abccccccccaaddddeeee', 3);

// Find the first unique character's index in a given string s.
function firstUniqCharIndex (s) {
    const charHash = {};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (!charHash[char]) {
            charHash[char] = 1;
        } else {
            charHash[char]++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (charHash[char] === 1) {
            return i;
        }
    }

    return -1;
}

firstUniqCharIndex('leetcode');

// Given a string, sort it in decreasing order based on the frequency of characters.
function frequencySort(s) {
    const charHash = {};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (!charHash[char]) {
            charHash[char] = 1;
        } else {
            charHash[char]++;
        }
    }

    const freqSorted = new Set(Object.values(charHash).sort((val1, val2) => val2 - val1));

    let res = '';
    const freqHash = {};

    const charKeys = Object.keys(charHash);

    charKeys.forEach(char => {
        const freq = charHash[char];

        if (!freqHash[freq]) {
            freqHash[freq] = [char];
        } else {
            freqHash[freq].push(char);
        }
    });

    freqSorted.forEach(freq => {
        if (freq > 1) {
            freqHash[freq].forEach(char => {
                res += char.repeat(freq);
            });
        } else {
            res += freqHash[freq].join('');
        }
    });

    return res;
}

frequencySort('tree');

// Given an array of strings, group anagrams together.
function groupAnagrams(arr) {
    const sortedHash = {};

    for (let i = 0; i < arr.length; i++) {
        const sorted = [...arr[i]].sort().join('');

        if (!sortedHash[sorted]) {
            sortedHash[sorted] = [arr[i]];
        } else {
            sortedHash[sorted].push(arr[i]);
        }
    }

    return Object.values(sortedHash);
}

groupAnagrams1(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);


