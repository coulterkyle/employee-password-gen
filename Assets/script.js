// Assignment Code
var generateBtn = document.querySelector("#generate");

var length = prompt("How long would you like your password? (please choose a length between 8-128 characters)");

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
  
      const randomChar = characters[randomIndex];
  
      password += randomChar;
    }
  
    return password;
  }
  const newPassword = generatePassword(length);
  console.log(newPassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
