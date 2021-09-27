// 1a
let randomNum = Math.floor(Math.random() * 5) + 1;
console.log(randomNum);

//1b
if (randomNum >= 4) {
  console.log("Greater than or equal to 4");
} else if (randomNum === 2 || randomNum === 3) {
  console.log("Equal to 2 or 3");
} else {
  console.log("Equal to 1");
}
// Another Way to Solve:
// if (randomNum >= 4) {
//   // Same as line above
// // if (randomNum > 3) {
//   console.log("Greater than or equal to 4");
// } else if (randomNum >= 2) {
// // Same as line above
// // } else if (randomNum > 1) {
//   console.log("Equal to 2 or 3");
// } else {
//   console.log("Equal to 1");
// }

//1c
if (randomNum !== 3) {
  console.log("Not equal to 3");
}

//1d
if (randomNum !== 3 && randomNum !== 5) {
  console.log("NOT equal to 3 AND not equal to 5");
}
// Another Example for 1d

// if (randomNum === 1 || randomNum === 2 || randomNum === 4) {
//     console.log("NOT equal to 3 AND not equal to 5");
//   }

// 1e
if (randomNum === 2 || randomNum === 4) {
  console.log("Equal to 2 OR equal to 4");
}

// BONUS TERRITORY
//2
console.log(randomNum >= 4 ? "Greater than or equal to 4" : "Less than 4");

//3
// Switch Statement takes in a parameter/argument and returns something based on the CASE (Or the match) that the parameter/argument goes with
// In this example if randomNum is 1 it will run the console.log("One"); code, etc.
switch (randomNum) {
  case 1:
    // randomNum = 1;
    console.log("One");
    // Break keywords are needed between each case so that the code for the cas that follows is NOT run as well
    break;
  case 2:
    // randomNum = 2;
    console.log("Two");
    break;
  case 3:
    // randomNum = 3;
    console.log("Three");
    break;
  case 4:
    // randomNum = 4;
    console.log("Four");
    break;
  default:
    console.log("Five");
  // Default works like ELSE in a Conditional Statement (If the value does not match any of the cases,. then it will run what is in the default)
  // There is no need for a BREAK at the end of the Switch Statement since there are no other cases/possibilities
}