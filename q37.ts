//Large Shirts

function make_shirt(
  size: string = "large",
  text: string = "I love TypeScript"
) {
  console.log(
    `The size of the shirt is ${size} and the text printed on it is ${text}`
  );
}

make_shirt();

make_shirt("medium");

make_shirt("small", "I love to program!");
