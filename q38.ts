// Cities

const describe_city = (city: string, country: string = "Pakistan"): void => {
  if ("London" === city) {
    console.log(`London is not in ${country}`);
  } else {
    console.log(`${city} is in ${country}`);
  }
};

describe_city("Lahore");
describe_city("Islamabad");
describe_city("London");
