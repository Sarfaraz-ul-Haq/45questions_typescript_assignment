"use strict";
// No Users
Object.defineProperty(exports, "__esModule", { value: true });
// Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Program 30
const userNames = ["admin", "ali", "hamza", "noman", "daniyal"];
// Removing all elements of the array "userNames".
userNames.splice(0);
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
// If the list is empty then print a message
if (userNames.length < 1) {
    console.log("We need to find some users!");
}
