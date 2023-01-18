// Abstract method or field is one that hasn't had an implementation provided
// These members must exist inside an abstract class, which cannot be directly instantiated.

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log("Pizza cooking time is 1 hour");
  }
}

class Burger extends Food {
  constructor(title: string) {
    super(title);
  }
  getCookingTime() {
    console.log("Burger cooking time is half hour");
  }
}
