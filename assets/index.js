//using getRandomInt() function and //Creating the password generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function passwordGenerator(num, mixedCase) {
  const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";
  let pass = "";
  for (let i = 0; i < num; i++) {
    var randomIndex = getRandomInt(charset.length);
    if (i % 3 === 0 && mixedCase === true) {
      pass += charset[randomIndex].toUpperCase();
    } else {
      pass += charset[randomIndex];
    }
  }
  return pass;
}

//updating input field with a new pass each time
function generatePasswordDOM() {
  let passlen = document.getElementById("length").value;
  let mixedCases = document.getElementById("mixedCase").checked;
  let newPassword = passwordGenerator(passlen, mixedCases);
  document.getElementById("password").setAttribute("value", newPassword);
}

//Register an event for the button to generate a new password.

document
  .getElementById("generate")
  .addEventListener("click", generatePasswordDOM);

//adding checkbox
document.getElementById("mixedcase");
