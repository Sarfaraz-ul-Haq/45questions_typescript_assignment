//Ordinal Numbers
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 1) {
        console.log(`${numArr[i]}st`);
    }
    else if (numArr[i] === 2) {
        console.log(`${numArr[i]}nd`);
    }
    else if (numArr[i] === 3) {
        console.log(`${numArr[i]}rd`);
    }
    else {
        console.log(`${numArr[i]}th`);
    }
}
export {};
