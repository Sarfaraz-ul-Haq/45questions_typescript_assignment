let rowsOfStars = 5;

let gap = "";

//parent loop
for (let i = 1; i <= rowsOfStars; i++) {
  //child loop (printing spaces)
  for (let j = 1; j <= rowsOfStars - i; j++) {
    gap += " ";
  }
  //child loop  (printing star)
  for (let k = 0; k < 2 * i - 1; k++) {
    gap += "*";
  }
  gap += "\n";
}
console.log(gap);
