//Checking Usernames
const current_users = ["Ali", "Hamza", "Daniyal", "Ahmed", "Hasan"];
const new_users = ["Noman", "hamza", "daniyal", "Imran", "Abdullah"];
for (let i = 0; i < current_users.length; i++) {
    for (let j = 0; j < new_users.length; j++) {
        if (current_users[i].toLowerCase == new_users[j].toLowerCase) {
            console.log("The username has already been used");
        }
        else {
            console.log("available");
        }
    }
}
export {};
