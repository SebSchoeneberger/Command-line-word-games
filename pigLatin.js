// Creating an new array containing only the players input and transforming each element inside the array to lower case
const playerInput = process.argv.slice(2).map(word => word.toLowerCase());

const translatedArray = [];

// Function checking if either the first or second letter of an element in array contains a vowel.
// After checking the function transforms the Word acordingly and push's it into an new Array.
function convertToPigLatin(word) {
    if (['a','e','i','o','u'].includes(word.charAt(0))) {
        translatedArray.push(word + 'way');
    } else if (['a','e','i','o','u'].includes(word.charAt(1))) {
        translatedArray.push(word.slice(1) + word.charAt(0) + 'ay');
    } else {
        translatedArray.push(word.slice(2) + word.charAt(0,1) + word.charAt(1) + 'ay');
    }
}

// Calling the function on each word (element) of the Players Input Array
playerInput.forEach(word => {
    convertToPigLatin(word);
});

// Loggin the original and the translated phrase into the console
console.log(`English Phrase: ${playerInput.join(' ')}`);
console.log(`Pig Latin Translation: ${translatedArray.join(' ')}`);