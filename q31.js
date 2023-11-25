"use strict";
// NO USERS
// /Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const userNames = [];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
        continue;
    }
    console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
}
if (userNames.length < 1) {
    console.log("We need to find some users!");
}
