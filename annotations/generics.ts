export class ArrayofNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

export class ArrayofStrings {
  constructor(public collecton: string[]) {}
  get(index: number): string {
    return this.collecton[index];
  }
}

export class ArrayofAnything<T> {
  constructor(public collecton: T[]) {}
  get(index: number): T {
    return this.collecton[index];
  }
}

const arrayOfAnything = new ArrayofAnything<string>(["a"]);
const arrayOfAnything1 = new ArrayofAnything<number>([1]);
const arrayOfAnything2 = new ArrayofAnything(["a"]);
const arrayOfAnything3 = new ArrayofAnything([1]);

const printStrings = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const printNumbers = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const printAnything = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
function printAnything1<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b"]);
printAnything<number>([1, 2, 3, 4]);

// Type Inference
printAnything(["a", "b"]);
printAnything([1, 2, 3, 4]);
