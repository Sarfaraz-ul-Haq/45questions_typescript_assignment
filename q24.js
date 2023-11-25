"use strict";
// MORE CONDITIONAL TESTS
// Tests for equality and inequality with strings
let fruit1 = "Mango";
console.log("Is fruit1 == 'Mango? I predict true.");
console.log(fruit1);
console.log("\n");
let fruit2 = "Grapes";
console.log("Is fruit2 == 'Mango? I predict false.");
console.log(fruit2);
console.log("\n");
// Tests using the lower case function
let country = "Pakistan";
console.log("Is country.toLowerCase()  == 'pakistan'? I predict true.");
console.log(country.toLowerCase() == "pakistan");
console.log("\n");
let city = "LAHORE";
console.log("Is city.toLowerCase() == 'LAHORE'? I predict false.");
console.log(city.toLowerCase() == "LAHORE");
console.log("\n");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let n1 = 5;
console.log(n1 === 5);
let n2 = 10;
console.log(n2 !== 10);
let n3 = 25;
console.log(n3 > 24);
let n4 = 26;
console.log(n4 < 25);
let n5 = 50;
console.log(n5 >= 40);
let n6 = 75;
console.log(n6 <= 25);
// Tests using "and" and "or" operators
// And operator
const num1 = 30;
const num2 = 70;
if (num1 >= 30 && num2 < 75) {
    console.log(true);
}
else {
    console.log(false);
}
const num3 = 40;
const num4 = 60;
if (num3 < 30 && num4 > 50) {
    console.log(true);
}
else {
    console.log(false);
}
// Or operator
const num5 = 70;
const num6 = 30;
if (num5 > 50 || num6 < 10) {
    console.log(true);
}
else {
    console.log(false);
}
const num7 = 10;
const num8 = 90;
if (num7 > 30 || num8 <= 50) {
    console.log(true);
}
else {
    console.log(false);
}
// Test whether an item is in a array
const devices = ["Mobile", "Tablet", "Laptop", "Desktop"];
if (devices[2] === "Laptop") {
    console.log("Laptop is in the array.");
}
else {
    console.log("Laptop is not in the array.");
}
// Test whether an item is not in a array
const fruits = ["Mango", "Guava", "Grapes", "Peach", "Strawberries"];
if (fruits[0] !== "Watermelon") {
    console.log("Watermelon is not in the array.");
}
else {
    console.log("Watermelon is in the array.");
}
