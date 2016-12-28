export class MyClass {
  public add(a : number, b : number) : number {
    return a + b;
  }

  public asyncAdd(a : number, b : number) : Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(a + b);
    });
  }
}