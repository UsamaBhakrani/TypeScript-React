var oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true,
};
//Without Interface
var printVehicle = function (vehicle) {
    var name = vehicle.name, year = vehicle.year, broken = vehicle.broken;
    console.log(name);
    console.log(year);
    console.log(broken);
};
printVehicle(oldCivic);
//With Interface
var printVehicles = function (vehicle) {
    var name = vehicle.name, year = vehicle.year, broken = vehicle.broken;
    console.log(name);
    console.log(year);
    console.log(broken);
};
printVehicles(oldCivic);
