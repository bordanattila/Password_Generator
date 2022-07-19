// Assignment code here

var capital_list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var numbers_list = [1, 2, 3,];
var generatePassword = function(){
  var temp_password = [];
  var pswd_length = prompt("How long your password shoud be?");
  if (pswd_length > 7 && pswd_length < 129) {
    var capital_letter = confirm("Would you like capital letters?");
  } else {
    alert("Password should be minimum of 8 characters and maximum of 128 characters.")
    pswd_length = prompt("How long your password shoud be?");
  } 
  
  if (capital_letter) {    
    var random = Math.floor(Math.random() * capital_list.length);  
    // console.log(random)  
    for ( var i = 0; i < random; i++) {    
      var select = Math.random() ;
      select *= capital_list.length;
      select = Math.floor(select);
      console.log(select)
      temp_password.push(capital_list[select])      
    }
  }
  // var lowercase_letter = confirm("Would you like lowercase letters?")
  
  // var numbers = confirm("Would you like numbers in your password?")
  // var symbols = confirm("Would you like symbols in your passworld?")
  console.log(temp_password)
  return temp_password;
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
