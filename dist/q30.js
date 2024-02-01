"use strict";
//Hello Admin
Object.defineProperty(exports, "__esModule", { value: true });
const userNames = ["admin", "ali", "hamza", "noman", "daniyal"];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] == "admin") {
        console.log("Hello admin would you like to see a status report?");
    }
    else {
        console.log(`Thank you ${userNames[i]} for logging in again.`);
    }
}
