const sha1 = require('sha1');
const answer = require('./answer.json');
const jsonUpdate = require('json-update');
const fetch = require('node-fetch');
const FormData = require('form-data');

let encrypted_mesage = answer.cifrado;
let numero_casas = answer.numero_casas;
let decrypted_message = "";

//loop to get every letter in the string given
for (let letter in encrypted_mesage) {

    //now we convert the letter in index on a Unicode
    let decrypting_letter = encrypted_mesage.charCodeAt(letter);

    //checking if our generated Unicode is between 97 and 122, that corresponds to the alplhabet
    if (decrypting_letter >= 97 && decrypting_letter <= 122) {

        //now we subtract the Unicode by the numero_casas given 
        decrypting_letter = decrypting_letter - numero_casas;

        //if after the subtract, the Unicode is less than 97, we add 26 to have the correct Unicode position 
        if (decrypting_letter < 97)
            decrypting_letter = decrypting_letter + 26;
    }

    // generating a new string with our decrypted message
    decrypted_message += String.fromCharCode(decrypting_letter);
}

//generating a sha1 hash for decrypted message
let resumo_criptografico = sha1(decrypted_message);

//updating json at decifrado and resumo_criptografico fields
jsonUpdate.update('./app/answer.json', { decifrado: decrypted_message, resumo_criptografico: resumo_criptografico })
    .then(() => {
        console.log("done!");
    }
);

//crating new form
const form = new FormData();

//append every field from json
for (let item in answer) {

    form.append('answer',item,answer[item]);
}


//http post to server passing Form.data 
fetch('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=425dea77c911d0eb76a0384e7b5989b912b3a9e4',
     {method: 'POST', body: form})
	.then(res => res.json())
	.then(json => console.log(json));