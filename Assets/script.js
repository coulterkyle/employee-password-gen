// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Calls the generatePassword function - this is the function responsible for password creation
  function generatePassword() {

    //This line determines the length of the password
    const lengthRequest = prompt("How long would you like your password? (please choose a length between 8-128 characters)");
    /*this is a conditional statement - if the password request is not between 8-128 characters,
    it will start the function over until parameters are met*/
    if (lengthRequest < 8 || lengthRequest > 128) {
      alert("Your password must be between 8-128 characters!");
      return generatePassword();
    };

    //Series of prompts which will confirm with the user the characters to be included in the password
    const upperCaseRequest = confirm(" Would you like your password to include uppercase letters?");
    const lowerCaseRequest = confirm("Would you like your password to include lowercase letters?");
    const numericRequest = confirm("Would you like your password to include numbers?");
    const symbolsRequest = confirm("Would you like your password to include special characters?");

    //Conditional statement that ensures user uses at least on character type 
    if (upperCaseRequest === false && lowerCaseRequest === false && numericRequest === false
      && symbolsRequest === false) {
      alert("Your password must include at least one character type!");
      return generatePassword();
    };

    //Names the variables which are to be possible in charSet
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numeric = "1234567890";
    const symbols = "!@#$%^&*?+=-";

    let charSet = "";

    //Conditional statement that adds the user's requests of characters to be included into charSet  
    if (upperCaseRequest === true) {
      charSet += upperCase;
    } if (lowerCaseRequest === true) {
      charSet += lowerCase;
    } if (numericRequest === true) {
      charSet += numeric;
    } if (symbolsRequest === true) {
      charSet += symbols
    };


    let password = "";

    /*Produces password by making index based on the lengthRequest provided by user, randomIndex selects
    a random number based on charSet length to ensure all characters specified by user are used, randomChar
    selects characters randomly based on charSet and randomIndex and then adds them to password*/
    for (let i = 0; i < lengthRequest; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      const randomChar = charSet[randomIndex];
      password += randomChar;
    }

    return password;
  };

  //Writes password to the document by calling generate password function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
