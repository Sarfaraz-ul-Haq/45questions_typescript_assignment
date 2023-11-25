//Store a person’s name, and include some whitespace characters at the beginning and end of the name. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personsName: string = "\t\tElon\n\n\n";
console.log(personsName);

personsName = personsName.trim();
console.log(personsName);


// Stored my favorite number in a variable. Then I made another variable  "message" to reveal my favorite number. Then I logged I message in the console.

let favNumber: number = 50;
let message: string = `My favorite number is ${favNumber}`;
console.log(message);

export {}