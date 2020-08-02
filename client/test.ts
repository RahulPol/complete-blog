class Test {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let t = new Test(1, "Rahul Pol");
console.log(t);
