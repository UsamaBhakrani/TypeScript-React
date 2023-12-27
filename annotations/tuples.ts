const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//Simple Tuple
const coke: [string, boolean, number] = ["brown", true, 50];

//OR

//Using an Alias
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
