"use strict";
class User {
    constructor(username, salary) {
        this.u = username;
        this.s = salary;
        this.message = function () {
            return `Hello ${this.u}!`;
        };
    }
    sayMessage() {
        return `Hello ${this.u} your salary is ${this.s}`;
    }
}
let user = new User("Hamza", 8000);
console.log(user.u);
console.log(user.s);
console.log(user.message());
console.log(user.sayMessage());
//# sourceMappingURL=classType.js.map