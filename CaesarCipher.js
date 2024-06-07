// Taking Players Input Phrase through the console & converting the shift value to an integer
const playerInput = process.argv[2].toLowerCase();
const shift = parseInt(process.argv[3]);

let encryption = "";


function caesarCipher (playerInput, shift) {
    // For loop that goes through every letter of the players input string and return the ASCII value of the letter 
    for (let i = 0; i < playerInput.length; i++) {
        let ascii = playerInput[i].charCodeAt();

    // This if statement assures that only lowercase letters get shifted, so that whitespaces or punctuations dont get shifted too. 
    if (ascii >= 97 && ascii <= 122){
    // Calculation for shifting the letters by the players input amount
        ascii = ((ascii - 97 + shift) % 26) + 97;
    }
    // This part of the code converts back the ASCII values of the letter to a String
        encryption += String.fromCharCode(ascii);
    }

    return encryption;
}

// Calling the function with the Players Input and Shit value and storing it into a variable.
const encryptedMessage = caesarCipher(playerInput,shift);

// Logging the Input and encypted message into the console
console.log(`Original Text: ${playerInput}`);
console.log(`Shift value: ${shift}`);
console.log(`Cipher Text: ${encryptedMessage}`);