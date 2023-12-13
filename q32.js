"use strict";
//Checking Usernames
Object.defineProperty(exports, "__esModule", { value: true });
//Make a list of current users
const current_users = ["Ali", "Daniyal", "Noman", "Hamza", "Qasim"];
//Make a list of new users
const new_users = ["ali", "Hasan", "daniyal", "Abdullah", "Ahmad"];
//Function to check whether a username is taken or not
function isUsernameTaken(username) {
    for (let i = 0; i < current_users.length; i++) {
        if (current_users[i].toLowerCase() === username.toLowerCase()) {
            return true;
        }
    }
    return false;
}
//Now looping through the new_users list to check the availability of usernames
for (let j = 0; j < new_users.length; j++) {
    if (isUsernameTaken(new_users[j])) {
        console.log("The username has been taken");
    }
    else {
        console.log("The username is available");
    }
}
