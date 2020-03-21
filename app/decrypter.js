let answer = require('./answer.json');

let encrypted_mesage = answer.cifrado;
let decrypted_message = answer.decifrado;

for (let letter in encrypted_mesage) {

    let decrypting_letter = encrypted_mesage.charCodeAt(letter);

    if (decrypting_letter >= 97 && decrypting_letter <=122 ){
        decrypting_letter = decrypting_letter - answer.numero_casas;

        if(decrypting_letter < 97)
            decrypting_letter = decrypting_letter + 26;
    }


    let decrypted_letter = String.fromCharCode(decrypting_letter);
}


//https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=425dea77c911d0eb76a0384e7b5989b912b3a9e4

//97 a 122