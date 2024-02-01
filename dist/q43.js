// Unchanged Magicians
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magician_names = ["David Blaine", "David Copperfield", "Criss Angel"];
const magician_names_copy = [...magician_names];
// function to display each name of the array
const show_magicians = (arr) => {
    for (const magician of arr) {
        console.log(magician);
    }
};
// make_great() function that iterates through the "magician_names_copy" array and  adds "the Great" to every name
const make_great = () => {
    for (let i = 0; i < magician_names_copy.length; i++) {
        magician_names_copy[i] = `${magician_names_copy[i]} the Great`;
    }
    return magician_names_copy;
};
const newArr = make_great();
show_magicians(magician_names);
show_magicians(newArr);
export {};
