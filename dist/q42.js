"use strict";
// Great Magicians
// Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 41
const magician_names = ["David Blaine", "David Copperfield", "Criss Angel"];
// function to display each name of the array
const show_magicians = (arr) => {
    for (const magician of arr) {
        console.log(magician);
    }
};
show_magicians(magician_names);
// make_great() function that iterates through the magician_names array and  adds "the Great" to every name
const make_great = () => {
    for (let i = 0; i < magician_names.length; i++) {
        magician_names[i] = `${magician_names[i]} the Great`;
    }
};
make_great();
show_magicians(magician_names);
