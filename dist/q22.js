"use strict";
// Intentional Error
Object.defineProperty(exports, "__esModule", { value: true });
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Program 19
let invitePeople = ["Sir Zia", "Sir Jahanzaib", "Sir Daniyal"];
invitePeople.pop();
invitePeople[2] = null;
console.log(invitePeople);
//These are files are ECMAScript modules maybe thats why its not giving error when I'm trying to access an element that is not present in the array
