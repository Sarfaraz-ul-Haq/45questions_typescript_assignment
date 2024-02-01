"use strict";
// Large Shirts
Object.defineProperty(exports, "__esModule", { value: true });
const make_shirt = (size = "large", text = "I love TypeScript") => {
    console.log(`The size of the shirt is ${size} and the text printed on it is ${text}`);
};
make_shirt();
make_shirt("medium");
make_shirt("small", "I love to program!");
