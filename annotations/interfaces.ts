interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reporting {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `This is my Car ${this.name}`;
  },
};

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
  console.log(vehicle.summary());
};

const printReport = (item: Reporting): void => {
  console.log(item.summary());
};

//////////////

const drinks = {
  color: "black",
  carbonated: true,
  sugarContent: 2000,
  summary(): string {
    return `my drink has this much sugar${this.sugarContent}`;
  },
};

printReport(oldCivic);
printReport(drinks);
