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
    const strArr = str.split('');
    const len = strArr.length;

    if (len <= k) return len;

    let substr = str.substring(0, k);
    let max = k;
    let i = k;
    const uniqueChars = [...substr];

    while (i < len) {
        if (uniqueChars.indexOf(strArr[i]) >= 0) {
            substr += strArr[i];
        } else {
            let firstIndex = 0;

            for (let i = 0; i < k; i++) {
                const char = uniqueChars[i];

                firstIndex = substr.indexOf(char);

                const subsubstr = substr.substring(firstIndex + 1);

                if (subsubstr.indexOf(char) === -1) {
                    uniqueChars.splice(i, 1);
                    break;
                }
            }

            if (uniqueChars.length < k) {
                uniqueChars.push(strArr[i]);
                substr = substr.substring(firstIndex + 1) + strArr[i];
            }
        }

        if (max < substr.length) {
            max = substr.length;
        }

        i++;
    }

    return max;
}

findLongestSubstringWithKUniqueChars('abcadcacacaca', 2);
