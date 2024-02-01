"use strict";
// Magicians
Object.defineProperty(exports, "__esModule", { value: true });
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
const magician_names = ["David Blaine", "David Copperfield", "Criss Angel"];
const show_magicians = (arr) => {
    for (const magician of arr) {
        console.log(magician);
    }
};
show_magicians(magician_names);
