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
