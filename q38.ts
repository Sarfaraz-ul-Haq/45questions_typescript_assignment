//Cities

function describe_city(city: string, country: string = "Pakistan") {
  if ("London" === city) {
    console.log(`London is not in ${country}`);
  } else {
    console.log(`${city} is in ${country}`);
  }
}

describe_city("Lahore");
describe_city("Islamabad");
describe_city("London");
