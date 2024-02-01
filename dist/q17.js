"use strict";
// Shrinking Guest List
Object.defineProperty(exports, "__esModule", { value: true });
// I just found out that my new dinner table won’t arrive in time for the dinner, and I have space for only two guests.
// Start with the program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner
const invitePeople = ["Sir Zia", "Sir Jahanzaib", "Sir Daniyal"];
console.log(`Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`);
// Print a simple message to tell that a person from the array is busy so he can't join the dinner.
console.log(`\nSir Daniyal is busy so he can't join the dinner.\n`);
invitePeople[2] = "Sir Adil"; // Update the array's 2nd index value.
// Now print a message to all persons using the updated list.
console.log(`Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`);
// Informing the people that I found a bigger dinner table.
console.log("\nI found a bigger dinner table.\n");
// Add a new person in the beginning of the list.
invitePeople.unshift("Sir Zeeshan");
// Add a new person in the middle of the list.
invitePeople.splice(2, 0, "Sir Imran");
// Add a new person in the end of the list.
invitePeople.push("Sir Qasim");
// Now print a message to all persons using the updated list.
console.log(`Hello ${invitePeople[0]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[1]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[2]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[3]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[4]}, I would like to invite you to dinner tonight.`);
console.log(`Hello ${invitePeople[5]}, I would like to invite you to dinner tonight.`);
// Informing the people that I found a bigger dinner table.
console.log("\nI can invite only two people for dinner.\n");
// Removing 4 persons from the list so that only 2 are left and each time I remove them from the list, I let them know that I'm sorry, I can't invite them to dinner.
invitePeople.shift();
console.log(`Sorry Sir Zeeshan, I can't invite you for dinner.`);
invitePeople.splice(1, 1);
console.log(`Sorry Sir Imran, I can't invite you for dinner.`);
invitePeople.pop();
console.log(`Sorry Qasim, I can't invite you for dinner.`);
invitePeople.pop();
console.log(`Sorry Sir Adil, I can't invite you for dinner.`);
// Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`\n${invitePeople[0]}, you are still invited to dinner.`);
console.log(`${invitePeople[1]}, you are still invited to dinner.`);
// Remove the last two names from the list.
invitePeople.pop();
invitePeople.pop();
// Print the list to make sure that there is actually an empty list at the end of this program.
console.log(invitePeople);
