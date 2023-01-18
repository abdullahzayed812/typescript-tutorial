let strings: string[] = ["abdullah", "hamza"];
let numbers: number[] = [1, 2, 3];

let stringNumbers: (string | number)[] = ["A", "H", 1, 3];

let stringNumberMultiDiArr: (
  | string
  | number
  | boolean
  | (string | number)[]
)[] = ["A", "H", 1, 2, ["J", "M", 8], true, false];

// function with annotations

let showMsg = true;

function printMsg(name, age, salary): string {
  if (showMsg) {
    return `Name is ${name} & ange is ${age} & salary is ${salary}`;
  }
  return "Nothing to return it";
}

console.log(printMsg("abdullah", 26, 100));

// function optional parameter & default

function showData(name: string = "Unknown", age?: number, year?: number) {
  return `Name is ${name} & age is ${age} & year is ${year}`;
}

console.log(showData(undefined, 26, 2022));

function addAll(...numbers: number[]) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  return result;
}

console.log(addAll(1, 2, 3, 4, +true));

// Example

let arr: (number | boolean[] | (string | (string | number)[])[])[];

arr = [1, 3, [true, false], ["abdullah", ["hamza", 38]]];
