"use strict";
// LARGE SHIRTS
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "large", text = "I love TypeScript") {
    console.log(`The size of the shirt is ${size} and the text printed on it is ${text}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love to program!");
