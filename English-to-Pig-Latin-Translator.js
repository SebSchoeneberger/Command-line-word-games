const playerInput = process.argv.slice(2).map(word => word.toLowerCase());

const translatedArray = [];

function convertToPigLatin(word) {
    if (['a','e','i','o','u'].includes(word.charAt(0))) {
        translatedArray.push(word + 'way');
    } else if (['a','e','i','o','u'].includes(word.charAt(1))) {
        translatedArray.push(word.slice(1) + word.charAt(0) + 'ay');
    } else {
        translatedArray.push(word.slice(2) + word.charAt(0) + word.charAt(1) + 'ay');
    }
}

playerInput.forEach(word => {
    convertToPigLatin(word);
});

console.log(translatedArray);