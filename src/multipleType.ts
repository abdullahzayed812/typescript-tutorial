function multipleType<T, S>(valueOne: T, valueTwo: S): string {
  return `The first value is ${valueOne} and second value is ${valueTwo}`;
}

console.log(multipleType<string, number>("hamza", 100));
console.log(multipleType<string, boolean>("abdullah", true));

// Generics with arrow function
const genericsWithArrow = <T>(value: T): string => {
  return `The value is ${value} and it's type if ${typeof value}`;
};
