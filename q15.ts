// Changing Guest List

// Start with the program from Exercise 14. Add a print statement at the end of the program stating the name of the guest who can’t make it.
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

console.log(`\nSir Daniyal is busy so he can't join the dinner.\n`);

// Modifying the list, replacing the name of the guest who can’t make it with the name of the new person I'm inviting.
invitePeople[2] = "Sir Adil"; // Updating the array's 2nd index value.

// Printing a second set of invitation messages, one for each person who is still in the list.
console.log(
  `Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`
);
console.log(
  `Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`
);
