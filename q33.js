"use strict";
function q32() {
    const current_users = ["ALi", "Raza", "Ghouri", "Sarfraz", "Ahmad"];
    const new_users = ["Raffay", "Awais", "RAZA", "aLI", "Usama"];
    const lower_case_current_users = [];
    for (let i = 0; i < current_users.length; i++) {
        lower_case_current_users.push(current_users[i]);
    }
    for (let i = 0; i < new_users.length; i++) {
        if (lower_case_current_users.indexOf(new_users[i].toLocaleLowerCase()) > -1) {
            console.log(`${new_users[i]} will need to enter a new username`);
        }
        else {
            console.log(`${new_users[i]} is available`);
        }
    }
}
