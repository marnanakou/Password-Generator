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
console.log(passwordGenerator(10, true));
