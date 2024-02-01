// Adding Comments

//Stored a person's name with whitespaces (horizontal tabulators and line break) in a variable
let person_name = "\t\tElon\n\n\n";

//Logged the variable once so that whitespaces are displayed
console.log(person_name);

//Now trimming the whitespaces by trim() method and logging the updated variable
person_name = person_name.trim();
console.log(person_name);

//____________________________________________________________________________________________

//Stored my favorite number in a variable. Then I made another variable  "message" to reveal my favorite number. Then I logged the message in the console.

const favNumber = 50;
const message = `My favorite number is ${favNumber}`;
console.log(message);
