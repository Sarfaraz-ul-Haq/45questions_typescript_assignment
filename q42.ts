//Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magician_names = ["David Blaine", "David Copperfield", "Criss Angel"];

const make_great = (arr: string[]) => {
  for (let i = 0; i < magician_names.length; i++) {
    arr[i] + "the Great";
  }
};
make_great(magician_names);

const show_magicians = (arr: string[]) => {
  for (const magician of arr) {
    console.log(magician);
  }
};

show_magicians(magician_names);
