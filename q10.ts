//Adding Comments

//Stored a person's name with whitespaces (horizontal tabulators and line break) in a variable
let personsName = "\t\tElon\n\n\n";

//Logged the variable once so that whitespaces are displayed
console.log(personsName); 

//Now trimming the whitespaces by trim() method and logging the updated variable
personsName = personsName.trim();
console.log(personsName);

////====================================================================

//Stored my favorite number in a variable. Then I made another variable  "message" to reveal my favorite number. Then I logged the message in the console.

let favNumber = 50;
let message = `My favorite number is ${favNumber}`;
console.log(message);

