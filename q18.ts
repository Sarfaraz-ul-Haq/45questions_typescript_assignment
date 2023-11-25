// Initialize array in non-alphabetical order
let placesToVisit: string[] = [
  'Silicone Valley',
  'National Air and Space Museum',
  'Mount Everest',
  'International Space Station',
  'Disneyland',
];
// Print the array in its original form.
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list.
console.log(placesToVisit.sort());

// Show that the array is still in its original order by printing it.
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list.
console.log(placesToVisit.reverse());

// Show that the array is still in its original order by printing it.
console.log(placesToVisit);

// Reverse the order of the list. Print the array to show that its order has changed.
placesToVisit = placesToVisit.reverse();
console.log(placesToVisit);

// Reverse the order of the list again. Print the list to show it’s back to its original order.
placesToVisit = placesToVisit.reverse();
console.log(placesToVisit);

// Sort the array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit = placesToVisit.sort();
console.log(placesToVisit);

// Sort to change the array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.reverse();
console.log(placesToVisit);
