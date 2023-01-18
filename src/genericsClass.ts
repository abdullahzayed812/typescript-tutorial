class users<T> {
  constructor(public value: T) {}
  show(message: T): void {
    console.log(`${message} - ${this.value}`);
  }
}

let userOne = new users<string | number>("Abdullah");
console.log(userOne.value);
console.log(userOne.show(100));
