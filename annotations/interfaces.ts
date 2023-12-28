const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
};

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

//Without Interface
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  const { name, year, broken } = vehicle;
  console.log(name);
  console.log(year);
  console.log(broken);
};

printVehicle(oldCivic);
//With Interface

const vehiclePrint = (vehicle: Vehicle) => {
  const { name, year, broken } = vehicle;
  console.log(name);
  console.log(year);
  console.log(broken);
};

vehiclePrint(oldCivic);
