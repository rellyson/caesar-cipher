const sha1 = require('sha1');
const answer = require('./answer.json');

let encrypted_mesage = answer.cifrado;
let numero_casas = answer.numero_casas;
let decrypted_message;

//loop to get every letter in the string given
for (let letter in encrypted_mesage) {

    //now we convert the letter in index on a Unicode
    let decrypting_letter = encrypted_mesage.charCodeAt(letter);

    //checking if our generated Unicode is between 97 and 122, that corresponds to the alplhabet
    if (decrypting_letter >= 97 && decrypting_letter <=122 ){

        //now we subtract the Unicode by the numero_casas given 
        decrypting_letter = decrypting_letter - numero_casas;

        //if after the subtract, the Unicode is less than 97, we add 26 to have the correct Unicode position 
        if (decrypting_letter < 97)
            decrypting_letter = decrypting_letter + 26;
    }

    // generating a new string with our decrypted message
    decrypted_message += String.fromCharCode(decrypting_letter);
}


//https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=425dea77c911d0eb76a0384e7b5989b912b3a9e4

//97 a 122