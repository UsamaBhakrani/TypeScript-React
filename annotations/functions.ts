const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

const throwError = (message: string): void => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const forecast = (todaysWeather: { date: Date; weather: string }): void => {
  console.log(todaysWeather.date);
  console.log(todaysWeather.weather);
};

// Forcast With Destructuring
const forecastWithDestructure = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
