// Assignment code here

var capital_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols_list = ["!", "@", "#", "$", "%", "&", "*", "?"]
var pswd_length
var capital_letter
var lowercase_letter
var numbers
var symbols
var generatePassword = function(){
  var temp_password = [];
  var final_pswd = [];
  var pswd_length = prompt("How long your password shoud be?");
  if (pswd_length > 7 && pswd_length < 129) {
    capital_letter = confirm("Would you like capital letters?");
  } else {
    alert("Password should be minimum of 8 characters and maximum of 128 characters.")
    pswd_length = prompt("How long your password shoud be?");
  } 
  lowercase_letter = confirm("Would you like lowercase letters?");
  numbers = confirm("Would you like numbers in your password?")
  symbols = confirm("Would you like symbols in your passworld?")
  
  if (capital_letter) {  
  //   capital();
  // }  else { lowecase()};
  
  // var capital = function () {
    for ( var i = 0; i < pswd_length; i++) {    
      var random = Math.floor(Math.random() * capital_list.length);  
      var select_upper = random
      temp_password.push(capital_list[select_upper])      
    }
  }
  
   if (lowercase_letter) {
  //   var lowecase = function () {
      for ( i = 0; i < pswd_length; i++) {
        random = Math.floor(Math.random() * capital_list.length);
        var select_lower = random
        temp_password.push(capital_list[select_lower].toLowerCase())
      }
    }
    
    if (numbers) {
    // number = function () {
      for ( i = 0; i < pswd_length; i++) {
        random = Math.floor(Math.random() * 9);
        var select_number = random
        temp_password.push(numbers_list[select_number])
      }
    }
    
    if (symbols) {
    // symbols = function () {
      for  (i = 0; i < pswd_length; i++) {
        random = Math.floor(Math.random() * symbols_list.length);
        var select_symbol = random
        temp_password.push(symbols_list[select_symbol])
      }
    }
    
    if (capital_letter != true && lowercase_letter!= true && numbers != true && symbols != true) {
      alert("You have not selected any criteria for your password.")
      restart();
    }
    console.log(temp_password)
    console.log(temp_password.length)
    var join_char = [];
    for (i = 0; i < pswd_length; i++) {
      random = Math.floor(Math.random() * temp_password.length);
      var pswd_character = random
      join_char.push(temp_password[pswd_character])
      
      final_pswd = join_char.join("");
    }

    return final_pswd;
  }

var restart = function () {
  generatePassword();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
