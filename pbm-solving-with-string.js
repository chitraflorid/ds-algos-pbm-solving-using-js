const str = 'abca';

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

    if (len <= k) return len;

    let substr = '';
    let max = 0;
    let i = 1;
    const uniqueChars = [str.charAt[0]];
    let subSubstr = '';

    while (i < len) {
        const char = str.charAt[i];

        if (uniqueChars.indexOf(char) >= 0) {
            substr += char;
        } else {
            let firstIndex = 0;
            const uniqueLen = uniqueChars.length;

            if (uniqueLen >= k) {
                for (let i = 0; i < k; i++) {
                    const char = uniqueChars[i];

                    firstIndex = substr.indexOf(char);
                    subSubstr = substr.substring(firstIndex);

                    if (subSubstr.indexOf(char) === -1) {
                        uniqueChars.splice(i, 1);
                        break;
                    }
                }
            }

            uniqueChars.push(char);
            substr = (subSubstr || substr) + char;
        }

        if (max < substr.length) {
            max = substr.length;
        }

        i++;
    }

    return max;
}

findLongestSubstringWithKUniqueChars('aabacbebebe', 3);

