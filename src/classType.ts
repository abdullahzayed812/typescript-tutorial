// Data access modifiers (public, private, protedted)

class User {
  private username: string;
  public get user() {
    return this.username;
  }
  public set user(value: string) {
    this.username = value;
  }
  protected salary: number;
  public message: () => string;
  constructor(username: string, salary: number) {
    this.username = username;
    this.salary = salary;
    this.message = function () {
      return `Hello ${this.username}!`;
    };
  }
  sayMessage() {
    return `Hello ${this.username} your salary is ${this.salary}`;
  }
}

let user = new User("Hamza", 8000);

// console.log(user.username);
// console.log(user.salary);
console.log(user.message());
console.log(user.sayMessage());

// Static keyword

class Admin {
  private static count: number = 0;
  static getCounter(): void {
    console.log(`${this.count} Object Created`);
  }
  public username: string;
  constructor(username: string) {
    this.username = username;
  }
}

const u1 = new Admin("Abdullah");
const u2 = new Admin("Hamza");
const u3 = new Admin("Hajar");

Admin.getCounter();
