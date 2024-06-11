//subtask 1

let word = "aweerwrw";
let vowels = 0;
let consonants = 0;

word = word.toLowerCase();

for (let i = 0; i < word.length; i++) {
    if (/[aeiou]/.test(word[i])) {
        vowels++;
    } else if (/[a-z]/.test(word[i])) {
        consonants++;
    }
}

console.log(`${word} contains ${vowels} vowels and ${consonants} consonants.`);

//subtask 2

function caesar(word, direction) {
    const shift = direction === 'plus' ? 1 : direction === 'minus' ? -1 : 0;
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    return word.split('').map((char) => {
        const lowerIndex = lowerAlphabet.indexOf(char.toLowerCase());
        const upperIndex = upperAlphabet.indexOf(char.toUpperCase());
        if (lowerIndex === -1 && upperIndex === -1) return char;
        let newIndex = 0;
        if (lowerIndex !== -1) {
            newIndex = (lowerIndex + shift + lowerAlphabet.length) % lowerAlphabet.length;
            return char === char.toUpperCase() ? upperAlphabet[newIndex].toUpperCase() : lowerAlphabet[newIndex];
        }
        if (upperIndex !== -1) {
            newIndex = (upperIndex + shift + upperAlphabet.length) % upperAlphabet.length;
            return char === char.toLowerCase() ? lowerAlphabet[newIndex].toLowerCase() : upperAlphabet[newIndex];
        }
    }).join('');
}

let inputWord = 'ZzZ';
let plusWord = caesar(inputWord, 'plus');
console.log('Offset: +1, result = ', plusWord);
let minusWord = caesar(inputWord, 'minus');
console.log('Offset: -1, result = ', minusWord);

