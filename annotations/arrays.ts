const carMakers = ["Ford", "Toyota", "Chevy"];

carMakers.map((car: string): string => {
  return car;
});

// Flexible Types
const importantDates: (Date | string | number)[] = [
  new Date(),
  "2023-10-03",
  1,
];

importantDates.push('Hello')
importantDates.push(45)
importantDates.push(new Date())
