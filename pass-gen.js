const generatePassword = require('generate-password');
function generateRandomPassword(){
    const options= {
        length:12,
        number: true,
        excludeSimilarCharacter:true,
        symbol: true,
        uppercase:true
    }

    const password = generatePassword.generate(options)


    console.log('Generated Password:', password)
}

generateRandomPassword()