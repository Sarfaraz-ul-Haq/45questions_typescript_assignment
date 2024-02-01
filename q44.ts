// Sandwiches

import chalk from "chalk";

// Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

const order_sandwich = (...array: string[]) => {
  console.log(chalk.green("Summary of sandwich:"));

  for (let i = 0; i < array.length; i++) {
    console.log(chalk.gray(`- ${array[i]}`));
  }
};

order_sandwich("chicken spread", "sausages");
order_sandwich("chilli garlic sauce", "nuggets", "salad");
order_sandwich("cheese", "patty", "olives", "sausages");
