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
