const playerInput = process.argv[2].toLowerCase();
const shift = process.argv[3];

let encryption = "";

function caesarCipher (playerInput, shift) {
    for (let i = 0; i < playerInput.length; i++) {
        let ascii = playerInput[i].charCodeAt();
        ascii += shift;

        encryption += String.fromCharCode(ascii);
    }
}

caesarCipher(playerInput,shift);

console.log(playerInput);
console.log(shift);
console.log(encryption);