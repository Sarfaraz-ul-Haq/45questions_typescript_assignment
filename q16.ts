//More Guests

// I just found a bigger dinner table, so now more space is available.
// Going to invite three more guests for dinner.

// Start with the program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table/
const invitePeople: string[] = ["Sir Zia", "Sir Jahanzaib", "Sir Daniyal"];

console.log(
  `Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`
);

// Print a simple message to tell that a person from the array is busy so he can't join the dinner.
console.log(`\nSir Daniyal is busy so he can't join the dinner.\n`);

invitePeople[2] = "Sir Adil"; // Update the array's 2nd index value.

// Now print a message to all persons using the updated list.
console.log(
  `Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`
);

// Informing the people that I found a bigger dinner table.
console.log("\nI found a bigger dinner table.\n");

// Add a new person in the beginning of the list.
invitePeople.unshift("Sir Zeeshan");

// Add a new person in the middle of the list.
invitePeople.splice(2, 0, "Sir Imran");

// Add a new person in the end of the list.
invitePeople.push("Sir Qasim");

// Now print a message to all persons using the updated list.
console.log(
  `Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[3]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[4]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[5]}, I would like to invite you to dinner tonight.`
);
