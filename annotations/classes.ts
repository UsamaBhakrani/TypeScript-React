class Vehicle {
  protected drive(): void {
    console.log("Chuga Chuga");
  }
}
class Car extends Vehicle {
  drive(): void {
    console.log("VROOM VROOM");
  }
  protect(): void {
    this.drive();
  }
}
