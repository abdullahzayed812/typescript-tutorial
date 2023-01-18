"use strict";
let strings = ["abdullah", "hamza"];
let numbers = [1, 2, 3];
let stringNumbers = ["A", "H", 1, 3];
let stringNumberMultiDiArr = ["A", "H", 1, 2, ["J", "M", 8], true, false];
let showMsg = true;
function printMsg(name, age, salary) {
    if (showMsg) {
        return `Name is ${name} & ange is ${age} & salary is ${salary}`;
    }
    return "Nothing to return it";
}
console.log(printMsg("abdullah", 26, 100));
function showData(name = "Unknown", age, year) {
    return `Name is ${name} & age is ${age} & year is ${year}`;
}
console.log(showData(undefined, 26, 2022));
function addAll(...numbers) {
    let result = 0;
    numbers.forEach((num) => (result += num));
    return result;
}
console.log(addAll(1, 2, 3, 4, +true));
let arr;
arr = [1, 3, [true, false], ["abdullah", ["hamza", 38]]];
//# sourceMappingURL=index.js.map