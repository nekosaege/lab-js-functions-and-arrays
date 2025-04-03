// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(maxNum) {
    return Math.max.apply(null, maxNum);
}
const result = ([2], [55])
console.log(result);



// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    } else {
        let longestWord = words[0];
        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWord.length) {
                longestWord = words[i];
            }
        }
        return longestWord;
    }
}
console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum
}
console.log(sumNumbers());




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++){
        sum += numbers2[i];
    }
    return sum / numbers2.length
}
console.log(averageNumbers());




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
function doesWordExist() {
    if (words2.length === 0) {
        return null
    } else {
        return words2.includes("machine")
    }
}
console.log(doesWordExist());
// Iteration 6 | Count Repetition       
function doesWordExist() {}
