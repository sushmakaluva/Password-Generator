var inputNo;
function inputLength() {
    inputNo = prompt("Choose the length for your password(between 8-128 char)?");
    if (inputNo === '' || inputNo === null) {
        alert("Please input a number for password");
        inputLength();
    } else {
        prompts();
    }
}

function prompts() {
    var specialChar, numbers, lowerCase, upperCase;
    specialChar = confirm("Do you want to have special characters in your password?");
    numbers = confirm("Do you want to have numbers(0-9) in your password?");
    lowerCase = confirm("Do you want to have lowercase letters(a-z) in your password?");
    upperCase = confirm("Do you want to have Uppercase letters(A-Z) in your password?");

    if (specialChar || numbers || lowerCase || upperCase) {
        generatePassword(specialChar, numbers, lowerCase, upperCase, inputNo);
    } else {
        alert("You need to select atleast one type of character");
        prompts();
    }
}

function generatePassword(isSpecialChar, isNumbers, isLowerCase, isUpperCase, passwordLength) {
    var spChar = '!$+:=@^~_.-&#/<;[';
    var noChar = '1234567890';
    var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var finalCharSet = '';
    if (isSpecialChar) finalCharSet += spChar;
    if (isNumbers) finalCharSet += noChar;
    if (isLowerCase) finalCharSet += lowerChar;
    if (isUpperCase) finalCharSet += upperChar;

    var res = '';
    for (var i = 0; i < passwordLength; i++) {
        res = res + finalCharSet.charAt(Math.floor(Math.random() * finalCharSet.length));
    }

    document.getElementById("password").textContent = res;

}


function copyToClipboard() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}