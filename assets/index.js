//creating the container
let container = document.createElement("div");
container.classList.add("container");
container.style.width = "75px";
container.style.align = "center";

//Creating the password generator

//using getRandomInt() function
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
