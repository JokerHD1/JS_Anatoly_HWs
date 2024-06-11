//subtask 1

function findUniquePizzas(myPizzas, competitorPizzas) {
    let uniquePizzas = myPizzas.filter(pizza => !competitorPizzas.includes(pizza));
    return uniquePizzas.length > 0 ? uniquePizzas : null;
}

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Margherita', 'Caprichosa', 'Peperoni', 'Hawaiian'];

console.log(findUniquePizzas(myPizzas, competitorPizzas));

//subtask 2

function findLongestWords(phrase) {
    let words = phrase.split(" ");
    let maxLength = Math.max(...words.map(word => word.length));
    let longestWords = words.filter(word => word.length === maxLength);
    return longestWords;
}

console.log(findLongestWords("This is an example sentence"));

//subtask 3

function rmvDuplicates(arr) {
    return Array.from(new Set(arr));
}

console.log(rmvDuplicates([1, 2, 3, 3, 4, 5, 4, 6]));

//subtask 4

function isPalindrome(word) {
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrome("Tenet"));
console.log(isPalindrome("hello"));